/** @format */

/* Flip deferred full stylesheet from print → all (replaces inline onload; CSP-friendly). */
document
    .querySelectorAll('link[rel="stylesheet"][data-async-css][media="print"]')
    .forEach((link) => {
        link.media = "all";
    });

document.addEventListener("DOMContentLoaded", () => {
    // -- PostHog Tracking Helper --
    const trackEvent = (eventName, props = {}) => {
        if (window.posthog) {
            window.posthog.capture(eventName, props);
        }
    };

    const mobileToggle = document.querySelector(".mobile-toggle");
    const header = document.querySelector(".header");

    if (mobileToggle && header) {
        mobileToggle.addEventListener("click", () => {
            header.classList.toggle("active");
            // Switch icon between Hamburger (☰) and Close (✕)
            const isOpened = header.classList.contains("active");
            mobileToggle.textContent = isOpened ? "✕" : "☰";
        });
    }

    // Close mobile menu when clicking a link, but NOT if it's a dropdown trigger
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            if (link.classList.contains("dropdown-trigger")) {
                e.preventDefault();
                // On mobile, toggle the dropdown
                if (window.innerWidth <= 1024) {
                    const parent = link.closest(".nav-item");
                    parent.classList.toggle("dropdown-open");
                }
                return; // Don't close header
            }

            header.classList.remove("active");
            if (mobileToggle) mobileToggle.textContent = "☰";

            // If it's a dropdown item, also close the dropdown so it's fresh for next time
            document.querySelectorAll(".nav-item").forEach((item) => {
                item.classList.remove("dropdown-open");
            });
        });
    });

    const contactForm = document.querySelector("#contactForm");
    const statusEl = document.querySelector(".form-status");
    const submitBtn = document.querySelector(".form-submit");

    const setStatus = (msg) => {
        if (statusEl) statusEl.textContent = msg;
    };

    const CONTACT_LIMITS = {
        name: { min: 1, max: 50 },
        phone: { min: 7, max: 15 },
        message: { max: 500 },
    };

    const trimField = (value) => String(value ?? "").trim();

    const normalizePhone = (value) => trimField(value).replace(/\D/g, "");

    const isValidEmail = (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const validateContact = ({ name, phone, email, message }) => {
        const errors = [];
        const nameTrimmed = trimField(name);
        const phoneDigits = normalizePhone(phone);
        const emailTrimmed = trimField(email);
        const messageTrimmed = trimField(message);

        if (nameTrimmed.length < CONTACT_LIMITS.name.min) {
            errors.push("Please enter your name.");
        } else if (nameTrimmed.length > CONTACT_LIMITS.name.max) {
            errors.push(
                `Name must be ${CONTACT_LIMITS.name.max} characters or fewer.`,
            );
        }

        if (phoneDigits.length < CONTACT_LIMITS.phone.min) {
            errors.push(
                `Phone must be ${CONTACT_LIMITS.phone.min}–${CONTACT_LIMITS.phone.max} digits.`,
            );
        } else if (phoneDigits.length > CONTACT_LIMITS.phone.max) {
            errors.push(
                `Phone must be ${CONTACT_LIMITS.phone.max} digits or fewer.`,
            );
        }

        if (messageTrimmed.length > CONTACT_LIMITS.message.max) {
            errors.push(
                `Message must be ${CONTACT_LIMITS.message.max} characters or fewer.`,
            );
        }

        if (emailTrimmed && !isValidEmail(emailTrimmed)) {
            errors.push("Please enter a valid email address.");
        }

        return {
            ok: errors.length === 0,
            errors,
            data: {
                name: nameTrimmed,
                phone: phoneDigits,
                email: emailTrimmed,
                message: messageTrimmed,
            },
        };
    };

    const PB_FIELD_LABELS = {
        name: "Name",
        phone: "Phone",
        email: "Email",
        message: "Message",
    };

    const formatPocketBaseError = (body) => {
        if (!body || typeof body !== "object") return null;

        const fieldErrors = body.data;
        if (fieldErrors && typeof fieldErrors === "object") {
            const parts = [];
            for (const [field, info] of Object.entries(fieldErrors)) {
                if (info && typeof info === "object" && info.message) {
                    const label = PB_FIELD_LABELS[field] || field;
                    parts.push(`${label}: ${info.message}`);
                }
            }
            if (parts.length) return parts.join(" ");
        }

        const message =
            typeof body.message === "string" ? body.message.trim() : "";
        if (!message) return null;

        if (/unique|duplicate/i.test(message)) {
            return "We already received this message. We’ll get back to you soon.";
        }

        return message;
    };

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const payload = Object.fromEntries(formData.entries());

            // Honeypot: if filled, pretend success
            if (payload.company) {
                setStatus("Thanks! We’ll reach out shortly.");
                contactForm.reset();
                return;
            }

            const validation = validateContact(payload);
            if (!validation.ok) {
                setStatus(validation.errors.join(" "));
                return;
            }

            try {
                if (submitBtn) submitBtn.disabled = true;
                setStatus("Sending…");

                const res = await fetch(
                    "https://database.safeplots.com/api/collections/landing_contacts/records",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            ...validation.data,
                            source: "landing",
                        }),
                    },
                );

                if (!res.ok) {
                    let pbBody = null;
                    try {
                        pbBody = await res.json();
                    } catch {
                        /* non-JSON error body */
                    }
                    const err = new Error("contact_submit_failed");
                    err.pocketBase = pbBody;
                    throw err;
                }

                setStatus("Sent! We’ll contact you soon.");
                trackEvent("contact_form_success", { source: "landing" });
                contactForm.reset();
            } catch (err) {
                const pbMessage = formatPocketBaseError(err.pocketBase);
                setStatus(
                    pbMessage ||
                        "Couldn’t submit right now. Please call or email us.",
                );
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }

    // Pricing page: monthly/yearly toggle
    const pricingToggle = document.querySelector("[data-pricing-toggle]");
    if (pricingToggle) {
        const billingButtons = pricingToggle.querySelectorAll("[data-billing]");
        const priceEls = document.querySelectorAll("[data-price]");
        const periodEls = document.querySelectorAll("[data-price-period]");

        const formatter = (() => {
            try {
                return new Intl.NumberFormat("en-IN");
            } catch {
                return { format: (n) => String(n) };
            }
        })();

        const applyBilling = (billing) => {
            const isYearly = billing === "yearly";
            const periodLabel = isYearly ? "/year" : "/month";

            billingButtons.forEach((btn) => {
                const isActive = btn.dataset.billing === billing;
                btn.classList.toggle("is-active", isActive);
                btn.setAttribute("aria-pressed", isActive ? "true" : "false");
            });

            periodEls.forEach((el) => {
                el.textContent = periodLabel;
            });

            priceEls.forEach((el) => {
                const raw = el.dataset[billing];
                const amount = Number(raw);
                el.textContent = Number.isFinite(amount)
                    ? formatter.format(amount)
                    : raw || "";
            });
        };

        billingButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                applyBilling(btn.dataset.billing || "monthly");
            });
        });

        applyBilling("monthly");
    }

    // Auto-fill contact form message for service quote buttons
    const serviceCtaButtons = document.querySelectorAll(".service-cta");
    const messageTextarea = document.querySelector(
        "#contactForm textarea[name='message']",
    );

    serviceCtaButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const serviceName = btn.dataset.service;
            if (messageTextarea && serviceName) {
                messageTextarea.value = `I would like to get a quote for: ${serviceName}`;
            }
        });
    });

    // Blog expansion logic (Redesigned for Viewer)
    const blogReadMoreBtns = document.querySelectorAll(".blog-read-more");
    const articleViewer = document.getElementById("blog-article-viewer");
    const viewerDisplayArea = document.getElementById("viewer-display-area");

    blogReadMoreBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.target;
            const libraryId = `library-${targetId}`;
            const sourceEl = document.getElementById(libraryId);

            if (sourceEl && articleViewer && viewerDisplayArea) {
                // Inject content from library to viewer
                viewerDisplayArea.innerHTML = sourceEl.innerHTML;

                // Show viewer
                articleViewer.classList.remove("hidden");

                // Scroll to viewer
                articleViewer.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Hero Text Animation
    const span1 = document.getElementById("dynamic-text-1");
    const span2 = document.getElementById("dynamic-text-2");

    if (span1 && span2) {
        const textPairs = [
            ["SAFEGUARD YOUR PLOTS", "FROM YOUR HOME"],
            ["SECURE YOUR PLOTS", "AT YOUR CONVENIENCE"],
            ["FENCE YOUR PLOTS", "WITHOUT THE HASSLE"],
        ];

        let currentIndex = 0;

        setInterval(() => {
            // Trigger Fade Out
            span1.classList.add("fade-out");
            span2.classList.add("fade-out");

            // Wait for transition to complete, then swap text and fade in
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % textPairs.length;
                span1.textContent = textPairs[currentIndex][0];
                span2.textContent = textPairs[currentIndex][1];

                span1.classList.remove("fade-out");
                span2.classList.remove("fade-out");
            }, 500); // Matches CSS transition duration
        }, 5000); // Cycle every 5 seconds
    }

    // -- PostHog Tracking Listeners --

    // Header Login
    const loginBtn = document.querySelector(".header-actions .btn-black");
    if (loginBtn) {
        loginBtn.addEventListener("click", () =>
            trackEvent("login_click", { location: "header" }),
        );
    }

    // Header Navigation Links
    const headerNavLinks = document.querySelectorAll(
        ".nav-links a:not(.dropdown-trigger)",
    );
    headerNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const linkText = link.textContent.trim();
            const linkHref = link.getAttribute("href");
            trackEvent("nav_click", {
                location: "header",
                link_text: linkText,
                link_href: linkHref,
            });
        });
    });

    // Hero Buttons
    const heroPrimary = document.querySelector(".hero-cta-group .btn-primary");
    if (heroPrimary) {
        heroPrimary.addEventListener("click", () =>
            trackEvent("get_started_click", { location: "hero" }),
        );
    }

    const heroSecondary = document.querySelector(
        ".hero-cta-group .btn-outline",
    );
    if (heroSecondary) {
        heroSecondary.addEventListener("click", () =>
            trackEvent("view_samples_click", { location: "hero" }),
        );
    }

    // Pricing Plans
    const digitalShieldBtn = document.querySelector(
        ".plan-card:not(.is-featured):not(.plan-card-custom) .plan-cta",
    );
    if (digitalShieldBtn) {
        digitalShieldBtn.addEventListener("click", () =>
            trackEvent("plan_select", { plan: "Digital Shield" }),
        );
    }

    const protectionProBtn = document.querySelector(
        ".plan-card.is-featured .plan-cta",
    );
    if (protectionProBtn) {
        protectionProBtn.addEventListener("click", () =>
            trackEvent("plan_select", { plan: "Protection Pro" }),
        );
    }

    const customPlanBtn = document.querySelector(".plan-card-custom .plan-cta");
    if (customPlanBtn) {
        customPlanBtn.addEventListener("click", () =>
            trackEvent("plan_select", { plan: "Custom" }),
        );
    }

    // Services (re-using serviceCtaButtons if available)
    if (typeof serviceCtaButtons !== "undefined") {
        serviceCtaButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                trackEvent("service_quote_click", {
                    service: btn.dataset.service,
                });
            });
        });
    }

    // Footer Social Media Links
    const socialLinks = document.querySelectorAll(
        ".footer-socials .social-icon",
    );
    socialLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const platform = link.getAttribute("aria-label");
            trackEvent("social_click", {
                platform: platform,
                location: "footer",
            });
        });
    });

    // Footer Navigation Links
    const footerLinks = document.querySelectorAll(".footer-links a");
    footerLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const linkText = link.textContent.trim();
            const linkHref = link.getAttribute("href");
            trackEvent("footer_link_click", {
                link_text: linkText,
                link_href: linkHref,
            });
        });
    });

    // Footer Contact Links (Phone, Email, Maps)
    const footerPhoneLink = document.querySelector(
        ".footer-contact-list a[href^='tel']",
    );
    if (footerPhoneLink) {
        footerPhoneLink.addEventListener("click", () => {
            trackEvent("contact_click", { type: "phone", location: "footer" });
        });
    }

    const footerEmailLink = document.querySelector(
        ".footer-contact-list a[href^='mailto']",
    );
    if (footerEmailLink) {
        footerEmailLink.addEventListener("click", () => {
            trackEvent("contact_click", { type: "email", location: "footer" });
        });
    }

    const footerMapsLink = document.querySelector(
        ".footer-contact-list a[href*='google.com/maps']",
    );
    if (footerMapsLink) {
        footerMapsLink.addEventListener("click", () => {
            trackEvent("contact_click", { type: "maps", location: "footer" });
        });
    }

    // Contact Section Links (Phone, Email)
    const contactPhoneLink = document.querySelector(
        ".contact-item a[href^='tel']",
    );
    if (contactPhoneLink) {
        contactPhoneLink.addEventListener("click", () => {
            trackEvent("contact_click", {
                type: "phone",
                location: "contact_section",
            });
        });
    }

    const contactEmailLink = document.querySelector(
        ".contact-item a[href^='mailto']",
    );
    if (contactEmailLink) {
        contactEmailLink.addEventListener("click", () => {
            trackEvent("contact_click", {
                type: "email",
                location: "contact_section",
            });
        });
    }
});
