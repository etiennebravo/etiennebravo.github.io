scroll_button_event('#scroll-skills');
scroll_button_event('#scroll-images');

/**
 * 
 * @param {HTMLElement} elementId 
 * @param {Number} scroll_ratio Amount of scroll desired (From 0 to 1)
 */
function scroll_button_event(elementId) {
    document.addEventListener('DOMContentLoaded', () => {

        // Constants
        const skill_scroll = document.querySelector(elementId);
        const scroll_right = document.querySelector(`${elementId}-right`);
        const scroll_left = document.querySelector(`${elementId}-left`);
        let gutter = 0;

        if (document.offsetWidth >= 768) {
            gutter = 64;  // 4 rem    
        } else { 
            gutter = 32;  // 2 rem
        }

        const scroll_amount = skill_scroll.children[0].offsetWidth + gutter; // 4rem = gutter width

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
