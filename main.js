if (!localStorage.getItem('theme')) {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

if (localStorage.getItem('theme') === 'dark') {
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
    document.body.classList.remove('dark');
});

darkThemeIcon.addEventListener('click', function () {
    popAudio.pause();
    popAudio.currentTime = 0;
    popAudio.play();
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark');
});

const menuHamburger = document.querySelector('#menu-hamburger');
const responsiveNav = document.querySelector('.mobile-nav');
menuHamburger.addEventListener('click', function () {
    menuHamburger.classList.toggle('animate');
    responsiveNav.classList.toggle('mobile-nav--active');
    document.body.classList.toggle('disable-scroll');
});

const playImages = (image, container, amountOfImages) => {
    const imageElement = document.querySelector(`.${image}`);
    if (!imageElement) {
        return;
    }

    const originalImagSrc = imageElement.src;
    const containerElement = document.querySelector(container);
    let timeouts = [];
    const animate = () => {
        for (let i = 1; i <= amountOfImages; i++) {
            let timeoutID = setTimeout(() => {
                if (i === amountOfImages) {
                    animate();
                }

                imageElement.src = `/images/${image}/${image}-${i}.png`;

                timeouts.shift();
            }, 800 * i);

            timeouts.push(timeoutID);
        }
    };

    containerElement.addEventListener('mouseenter', () => {
        animate();
    });

    containerElement.addEventListener('mouseleave', () => {
        imageElement.src = originalImagSrc;

        timeouts.forEach(timeoutID => {
            clearTimeout(timeoutID);
        });
        timeouts = [];
    });
};

playImages('productivity', '.productivity-container', 6);
playImages('place', '.place-container', 2);
playImages('calorie-tracker', '.calorie-tracker-container', 3);
