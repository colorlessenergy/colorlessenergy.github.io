let menuHamburger = document.querySelector('#menu-hamburger');
let responsiveNav = document.querySelector('.mobile-nav');

let buttonContact = document.querySelector('#contact--back');
let contactMenu = document.querySelector('.contact');
let svgContactButton = document.querySelector('.mail-icon');

menuHamburger.addEventListener('click', function () {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('mobile-nav--active');
  document.body.classList.toggle('disable-scroll');
});

// these event listener aren't added on pages that don't have these buttons
if (buttonContact) {
  buttonContact.addEventListener('click', contactToView);
}

if (svgContactButton) {
  svgContactButton.addEventListener('click', contactToView);
}

function contactToView() {
  contactMenu.classList.toggle('contact--back');
  document.body.classList.toggle('disable-scroll');
}