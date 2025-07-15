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

// --- FAQ Accordion ---

// First, we select all the individual FAQ items.
const faqItems = document.querySelectorAll('.faq-item');

// Then, we loop through each item.
faqItems.forEach(item => {
  // We find the question button inside each item.
  const question = item.querySelector('.faq-question');

  // We add a 'click' event listener to the question button.
  question.addEventListener('click', () => {
    // Before opening a new one, we check if any other item is already active.
    const openItem = document.querySelector('.faq-item.active');

    // If there is an open item, and it's NOT the one we just clicked, we close it.
    if (openItem && openItem !== item) {
      openItem.classList.remove('active');
    }

    // Finally, we toggle the 'active' class on the item we clicked.
    // This will either open it (if it was closed) or close it (if it was already open).
    item.classList.toggle('active');
  });
});