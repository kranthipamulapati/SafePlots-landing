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
});
