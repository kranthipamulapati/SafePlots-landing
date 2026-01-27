/** @format */

document.addEventListener("DOMContentLoaded", () => {
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
                // On mobile, toggle the dropdown
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
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

    // Contact form (dummy API call; wire up later)
    const contactForm = document.querySelector("#contactForm");
    const statusEl = document.querySelector(".form-status");
    const submitBtn = document.querySelector(".form-submit");

    const setStatus = (msg) => {
        if (statusEl) statusEl.textContent = msg;
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

            try {
                if (submitBtn) submitBtn.disabled = true;
                setStatus("Sending…");

                const res = await fetch(
                    "https://database.safeplots.com/api/collections/landing_contacts/records",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: payload.name || "",
                            phone: payload.phone || "",
                            email: payload.email || "",
                            message: payload.message || "",
                            source: "landing",
                        }),
                    },
                );

                if (!res.ok) throw new Error(`Request failed: ${res.status}`);

                setStatus("Sent! We’ll contact you soon.");
                contactForm.reset();
            } catch (err) {
                console.warn(
                    "Contact form submit failed (API not wired yet).",
                    err,
                );
                setStatus(
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
});
