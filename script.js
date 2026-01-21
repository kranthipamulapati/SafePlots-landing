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
}
