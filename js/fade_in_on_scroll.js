// https://ryfarlane.com/article/fade-in-on-scroll-vanilla-javascript-css
// Refactor into function done by Bing copilot

// Applies animation tags as the user scrolls
function fadeInUpOnScroll(selector, fade) {
    const elementsToFadeInUpOnScroll = document.querySelectorAll(selector);

    if (elementsToFadeInUpOnScroll) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(fade);
                    observer.unobserve(entry.target);  // Unobserve once the animation is applied
                }
            });
        }, { threshold: 0.1 });  // Adjust the threshold as needed

        elementsToFadeInUpOnScroll.forEach(element => {
            observer.observe(element);
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
fadeInUpOnScroll(".fade-in-left-on-scroll", "fade-in-left");
