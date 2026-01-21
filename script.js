/** @format */

console.log("initialized.");

const header = document.querySelector(".header");
const mobileToggle = document.querySelector(".mobile-toggle");

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        header.classList.toggle("active");

        // Toggle Icon
        if (header.classList.contains("active")) {
            mobileToggle.textContent = "✕"; // Close icon
        } else {
            mobileToggle.textContent = "☰"; // Menu icon
        }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (header.classList.contains("active")) {
                header.classList.remove("active");
                mobileToggle.textContent = "☰";
            }
        });
    });
}
