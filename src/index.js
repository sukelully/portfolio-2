import "./styles.css";

// Set up event listeners for mobile menu
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Show/hide mobile menu
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

// Update footer year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', initApp);