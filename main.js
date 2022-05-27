if (!localStorage.getItem('theme')) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.style.backgroundColor = '#333333';
  document.body.classList.add('dark');
}

const lightThemeIcon = document.querySelector('#light-theme-icon');
const darkThemeIcon = document.querySelector('#dark-theme-icon');

const popAudio = new Audio('/pop.mp3');
lightThemeIcon.addEventListener('click', function () {
  popAudio.pause();
  popAudio.currentTime = 0;
  popAudio.play();
  localStorage.setItem('theme', 'light');
  animateBackgroundColor('#ffffff');
  document.body.classList.remove('dark');
});

darkThemeIcon.addEventListener('click', function () {
  popAudio.pause();
  popAudio.currentTime = 0;
  popAudio.play();
  localStorage.setItem('theme', 'dark');
  animateBackgroundColor('#333333');
  document.body.classList.add('dark');
});

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

const squareSize = 50;
let previousInterval = null;
function animateBackgroundColor (fillStyle) {
  if (previousInterval) {
    clearInterval(previousInterval);
    previousInterval = null;
  }

  const canvas = document.querySelector('#animate-background');
  const context = canvas.getContext('2d');
  context.fillStyle = fillStyle;
  let x = 0;
  let y = 0;
  let direction = 1;

  const drawBackgroundColorInterval = window.setInterval(() => {
    context.fillRect(x, y, squareSize, squareSize);
    y += (squareSize * direction);

    if (y >= canvas.height || (direction === -1 && y < 0)) {
      direction = direction * -1;
      if (direction === -1) {
        y = canvas.height;
      } else if (direction === 1) {
        y = 0;
      }

      x += squareSize;

      if (x >= canvas.width) {
        document.body.style.backgroundColor = fillStyle;
        clearInterval(drawBackgroundColorInterval);
      }
    }
  }, 50);

  previousInterval = drawBackgroundColorInterval;
}