// --- Mobile Navigation Toggle ---

// First, we give nicknames to the HTML elements we need to work with.
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Now, we tell the hamburger icon to listen for a 'click'.
hamburger.addEventListener('click', () => {
  // When the click happens, we 'toggle' a CSS class named 'active' on our navLinks.
  // Toggle is like a light switch: if the class is there, it removes it. If it's not, it adds it.
  navLinks.classList.toggle('active');
});