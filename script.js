// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Handle smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Form submission feedback
const form = document.querySelector('.contact-form');
const submitButton = document.getElementById('submit-btn');
const submitText = submitButton?.querySelector('span');
const spinner = submitButton?.querySelector('.loading-spinner');

if (form) {
    form.addEventListener('submit', function () {
        if (submitButton && submitText && spinner) {
            // Show loading state
            submitButton.disabled = true;
            submitText.style.opacity = '0';
            spinner.style.display = 'block';
        }
    });
}

// Ensure the page is fully loaded before applying the transition
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
