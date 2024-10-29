// https://ryfarlane.com/article/fade-in-on-scroll-vanilla-javascript-css
// Refactor into function done by Bing copilot

// Applies animation tags as the user scrolls
function fadeInUpOnScroll(selector, fade) {
    const elementsToFadeInUpOnScroll = document.querySelectorAll(selector);

    if (elementsToFadeInUpOnScroll) {
        // Animate elements that appear on the initial page load
        window.addEventListener("DOMContentLoaded", function() {
            elementsToFadeInUpOnScroll.forEach(function(element) {
                if (window.scrollY + window.innerHeight >= element.offsetTop) {
                    element.classList.add(fade);
                }
            });
        });

        // Animate elements that appear when scrolling
        window.addEventListener("scroll", function() {
            elementsToFadeInUpOnScroll.forEach(function(element) {
                // Elements animate only once
                if (window.scrollY + window.innerHeight >= element.offsetTop) {
                    element.classList.add(fade);
                }
            });
        });
    }
}

// fade specific element 
function fadeElement(element, fade) {
    if (element) {
        if (window.scrollY + window.innerHeight >= element.offsetTop) {
            element.classList.add(fade);
        }
    }
}

// resets animation tags on elements selected
function resetFadeOnScroll(selector, fade) {
    const elementsToReset = document.querySelectorAll(selector);

    if (elementsToReset) {
        elementsToReset.forEach(function (element) {
            element.classList.remove(fade);
        });
    }
}

// Call the function
fadeInUpOnScroll(".fade-in-up-on-scroll", "fade-in-up");
fadeInUpOnScroll(".fade-in-down-on-scroll", "fade-in-down");
fadeInUpOnScroll(".fade-in-right-on-scroll", "fade-in-right");
fadeInUpOnScroll(".fade-in-left-on-scroll", "fade-in-left");
