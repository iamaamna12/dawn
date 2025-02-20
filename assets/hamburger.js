// Select the hamburger and menu elements
const hamburger = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.hamburger-menu'); // Ensure this targets the correct menu

// Add event listener to toggle the menu visibility
hamburger.addEventListener('click', () => {
  menu.classList.toggle('show'); // Toggle visibility class, make sure the 'show' class is defined in your CSS
});
