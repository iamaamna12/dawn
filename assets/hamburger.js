document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.navbar__hamburger');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('show');
  });
});
