// Refactor into function done by Bing copilot

/**
 * @summary Show elements with the selected tag
 * @param {HTMLElement} filterButtonId id of the button
 * @param {string} fadeClassName class that identifies elements that fade, see fade_in_on_scroll for more info.
 * @param {string} tagClassName elements with this tag will be shown
 */
function handleFilterButtonClick(filterButtonId, fadeClassName, tagClassName) {
    const projectArticles = document.getElementsByClassName("project-article");
    if (projectArticles) {
        window.addEventListener("DOMContentLoaded", function() {
            // listen for input in button
            const button = document.querySelector("#" + filterButtonId)
            button.addEventListener("click", function() {

            // reset all buttons
            const buttonList = document.querySelectorAll(".button-list button");
            buttonList.forEach(function(element) {
                element.classList.remove("button-pressed");
            });

            // change button style
            this.classList.add("button-pressed");

            // reset animations
            resetFadeOnScroll(fadeClassName);
            
            // hide all container elements
            for (let i = 0; i < projectArticles.length; i++) {
                projectArticles[i].style.display = "none";
            }
            
            // only show elements with specific tag inside
            let tags = document.getElementsByClassName(tagClassName);
            for (let i = 0; i < tags.length; i++) {
                let parentContainer = tags[i].closest(".project-article");
                if (parentContainer) {
                    parentContainer.style.display = "block";

                    // animate newly shown elements
                    fadeElement(parentContainer, "fade-in-up");
                }
            }
            });
        });
    }
}

/**
 * 
 * @param {HTMLElement} filterButtonId id of the button
 * @param {string} fadeClassName css class of the animation that identifies fading elements
 */
function removeFilters(filterButtonId, fadeClassName) {
    const projectArticles = document.getElementsByClassName("project-article");
    if (projectArticles) {
        window.addEventListener("DOMContentLoaded", function() {
            // listen for input in button
            document.getElementById(filterButtonId).addEventListener("click", function() {
                 // reset all buttons
                const buttonList = document.querySelectorAll(".button-list button");
                buttonList.forEach(function(element) {
                    element.classList.remove("button-pressed");
                });

                // Change pressed button
                this.classList.add("button-pressed");

                // reset animations
                resetFadeOnScroll(fadeClassName);
                
                // show all container elements
                let projects = document.getElementsByClassName("project-article");
                for (let i = 0; i < projects.length; i++) {
                    projects[i].style.display = "block";
                    fadeElement(projects[i], "fade-in-up");
                }
            });
        });
    }
}

// Call the function for each button
removeFilters("remove-filters", ".fade-in-up-on-scroll");
handleFilterButtonClick("c-filter", ".fade-in-up-on-scroll", "c");
handleFilterButtonClick("html-filter", ".fade-in-up-on-scroll", "html");
handleFilterButtonClick("java-filter", ".fade-in-up-on-scroll", "java");
handleFilterButtonClick("python-filter", ".fade-in-up-on-scroll", "python");
handleFilterButtonClick("sql-filter", ".fade-in-up-on-scroll", "sql");
handleFilterButtonClick("misc-filter", ".fade-in-up-on-scroll", "misc");
