// https://ryfarlane.com/article/fade-in-on-scroll-vanilla-javascript-css
// Refactor into function done by Bing copilot
function fadeInUpOnScroll(selector) {
    const elementsToFadeInUpOnScroll = document.querySelectorAll(selector);

    if (elementsToFadeInUpOnScroll) {
        // Animate elements that appear on the initial page load
        window.addEventListener("DOMContentLoaded", function() {
            elementsToFadeInUpOnScroll.forEach(function(element) {
                if (window.scrollY + window.innerHeight >= element.offsetTop) {
                    element.classList.add("fade-in-up");
                }
            });
        });

        // Animate elements that appear when scrolling
        window.addEventListener("scroll", function() {
            elementsToFadeInUpOnScroll.forEach(function(element) {
                // Elements animate only once
                if (window.scrollY + window.innerHeight >= element.offsetTop) {
                    element.classList.add("fade-in-up");
                }
            });
        });
    }
}

// fade specific element 
function fadeElement(element) {
    if (element) {
        if (window.scrollY + window.innerHeight >= element.offsetTop) {
            element.classList.add("fade-in-up");
        }
    }
}

// resets animation tags on elements selected
function resetFadeOnScroll(selector) {
    const elementsToReset = document.querySelectorAll(selector);

    if (elementsToReset) {
        elementsToReset.forEach(function (element) {
            element.classList.remove("fade-in-up");
        });
    }
}

// Call the function
fadeInUpOnScroll(".fade-in-up-on-scroll");
