//hamburger
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function () {
  this.classList.toggle('hamburger-active');
  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.classList.toggle('show');
});
