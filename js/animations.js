// Consulted: https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript

////////// Changing background ///////////

let animationRefreshTimer = 0;  // milliseconds between frames

// match motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animationRefreshTimer = 6000;
} else {
    animationRefreshTimer = 3000;
}

// find element
const frame = document.getElementById("title-screen");
const imageCount = 4;
let count = 0;

// preload images
const images = [];
for (let i = 0; i < imageCount; i++) {
    images[i] = new Image();
    images[i].src = `../assets/background${i}.png`;
}

// set initial background image
frame.style.backgroundImage = `url(${images[count].src})`;

// cycle through frames
setInterval(function() {
    count++;
    // reset if needed
    if (count >= imageCount) {
        count = 0;
    }
    frame.style.backgroundImage = `url(${images[count].src})`;
}, animationRefreshTimer);


/////////////// Dynamic images ////////////////

/**
 * @summary Change images according to window width, if more than n pixels in width,
 *  primaryImage will display, if less n pixels in width, secondaryImage will display
 * @param {string} elementID id of the image
 * @param {string} primaryImage primary image source path
 * @param {string} secondaryImage secondary image source path
 */

let MAX_WIDTH = 768;

function dynamicImage(elementID, primaryImage, secondaryImage) {
    function updateImageBasedOnWidth() {
        let image = document.getElementById(elementID);
        if (image) {
            if (window.innerWidth < MAX_WIDTH) {
                image.src = secondaryImage;
            } else {
                image.src = primaryImage;
            }
        }
    }

    //listen for inputs
    document.addEventListener("DOMContentLoaded", updateImageBasedOnWidth);
    window.addEventListener("resize", updateImageBasedOnWidth);
}


dynamicImage("zion-image", "../assets/zion-3-2.jpg", "../assets/zion-2-3.jpg");
dynamicImage("macaw-image", "../assets/guacamaya-2-1.jpg", "../assets/guacamaya-1-1.jpg");