// Modified version of: https://askavy.com/javascript-how-to-scroll-through-a-div-by-dragging-and-not-by-using-the-scroll-bars/
// Consulted: https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/

const skillsSection = document.getElementById('scroll-skills');
const imagesSection = document.getElementById('scroll-images')

mouseDragScroll(skillsSection);
mouseDragScroll(imagesSection);

/**
 * @summary Enables dragging with mouse within an overflowing element
 * @param {HTMLElement} container element ID
 */
function mouseDragScroll(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        // prevents highlighting text, messes up with selecting text (not good for screen readers)
        e.preventDefault(); 
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault(); // prevents highlighting text
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX);
        container.scrollLeft = scrollLeft - walk;
    });
}

