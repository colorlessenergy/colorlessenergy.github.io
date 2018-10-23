let menuHamburger = document.querySelector('#menu-hamburger');
let responsiveNav = document.querySelector('.mobile-nav');

let buttonContact = document.querySelector('#contact--back');
let contactMenu = document.querySelector('.contact');
let svgContactButton = document.querySelector('.pen-icon');

menuHamburger.addEventListener('click', function () {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('mobile-nav--active');
  document.body.classList.toggle('disable-scroll');
});

buttonContact.addEventListener('click', contactToView);
svgContactButton.addEventListener('click', contactToView)

function contactToView() {
  contactMenu.classList.toggle('contact--back');
  document.body.classList.toggle('disable-scroll');
}