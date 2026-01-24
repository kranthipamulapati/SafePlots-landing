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

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            header.classList.remove("active");
            if (mobileToggle) mobileToggle.textContent = "☰";
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

                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: payload.name || "",
                        phone: payload.phone || "",
                        email: payload.email || "",
                        message: payload.message || "",
                        source: "landing",
                    }),
                });

                if (!res.ok) throw new Error(`Request failed: ${res.status}`);

                setStatus("Sent! We’ll contact you soon.");
                contactForm.reset();
            } catch (err) {
                console.warn("Contact form submit failed (API not wired yet).", err);
                setStatus("Couldn’t submit right now. Please call or email us.");
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }
});
