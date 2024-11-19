scroll_button_event('#scroll-skills');
scroll_button_event('#scroll-images', 0.50);

/**
 * 
 * @param {HTMLElement} elementId 
 * @param {Number} scroll_ratio Amount of scroll desired (From 0 to 1)
 */
function scroll_button_event(elementId, scroll_ratio=1) {
    document.addEventListener('DOMContentLoaded', () => {

        // Constants
        const skill_scroll = document.querySelector(elementId);
        const scroll_right = document.querySelector(`${elementId}-right`);
        const scroll_left = document.querySelector(`${elementId}-left`);
        const scroll_amount = skill_scroll.children[0].offsetWidth + 70; // 70 = 4 rem + some more px

        // listen to right button
        scroll_right.addEventListener('click', () => {
            skill_scroll.scrollBy({
                left: scroll_amount,
                behavior: 'smooth'
            });
        });

        // listen to left button
        scroll_left.addEventListener('click', () => {
            skill_scroll.scrollBy({
                left: -scroll_amount,
                behavior: 'smooth'
            });
        });
    });
}
