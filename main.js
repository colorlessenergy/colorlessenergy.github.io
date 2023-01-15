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
