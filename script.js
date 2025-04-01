// Function to toggle the theme
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Check the current theme on page load and set the appropriate theme
window.addEventListener('DOMContentLoaded', () => {
    // Check localStorage for the saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.innerText = '🌞'; // Change button to indicate light mode
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.innerText = '🌓'; // Change button to indicate dark mode
    }
});

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the current theme in localStorage for persistence
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.innerText = '🌞'; // Change button to light mode
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.innerText = '🌓'; // Change button to dark mode
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust the scroll position to account for the header
            behavior: 'smooth'
        });
    });
});

// Form submission handler (simple mockup)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;

        // Simple alert on form submission (you can replace it with actual form submission logic)
        alert(`Message sent successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear the form
        contactForm.reset();
    });
}
