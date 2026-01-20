// FAQ Accordion functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Close all other FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
    });

    // Toggle current FAQ item
    if (!isActive) {
        faqItem.classList.add("active");
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        // Close mobile menu if open
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("active");
    });
});

// Header scroll effect with throttling
let ticking = false;
function updateHeader() {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.backdropFilter = "blur(15px)";
    } else {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.backdropFilter = "blur(10px)";
    }
    ticking = false;
}

window.addEventListener("scroll", function () {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Contact functions
function makeCall() {
    const phone = "917780391340";
    window.open(`tel:${phone}`, "_self");
}

function openWhatsApp() {
    const phone = "917780391340";
    const message =
        "Hello! I'm interested in SafePlots services. Can you help me get started?";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`;
    window.open(whatsappUrl, "_blank");
}

function copyEmail() {
    const email = "admin@safeplots.com";
    navigator.clipboard
        .writeText(email)
        .then(() => {
            const emailText = document.getElementById("email-text");
            emailText.textContent = "Email Copied!";
            emailText.style.color = "#10b981";

            setTimeout(() => {
                emailText.textContent = "Send Email";
                emailText.style.color = "";
            }, 2000);
        })
        .catch((err) => {
            console.error("Failed to copy email: ", err);
            alert("Failed to copy email. Please copy manually: " + email);
        });
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
    // Initialize scroll animations
    document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
    });
});
