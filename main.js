const menuHamburger = document.querySelector('#menu-hamburger');
const responsiveNav = document.querySelector('.mobile-nav');
menuHamburger.addEventListener('click', function () {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('mobile-nav--active');
  document.body.classList.toggle('disable-scroll');
});

const contactNav = document.querySelector('.contact__nav');
if (contactNav) {
  contactNav.addEventListener('click', function (event) {
    if (event.target.className.includes('contact__back')) {
      contactToView();
    }
  });
}

const svgContactButton = document.querySelector('.mail-icon');
if (svgContactButton) {
  svgContactButton.addEventListener('click', contactToView);
}

const contactMenu = document.querySelector('.contact');
function contactToView() {
  contactMenu.classList.toggle('contact--back');
  document.body.classList.toggle('disable-scroll');
}