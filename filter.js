// Refactor into function done by Bing copilot
function handleFilterButtonClick(filterButtonId, fadeClassName, tagClassName) {
    const projectArticles = document.getElementsByClassName("project-article");
    if (projectArticles) {
        window.addEventListener("DOMContentLoaded", function() {
            // listen for input in button
            document.getElementById(filterButtonId).addEventListener("click", function() {
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
                        fadeElement(parentContainer);
                    }
                }
            });
        });
    }
}

function removeFilters(filterButtonId, fadeClassName) {
    const projectArticles = document.getElementsByClassName("project-article");
    if (projectArticles) {
        window.addEventListener("DOMContentLoaded", function() {
            // listen for input in button
            document.getElementById(filterButtonId).addEventListener("click", function() {
                resetFadeOnScroll(fadeClassName);
                
                // show all container elements
                let projects = document.getElementsByClassName("project-article");
                for (let i = 0; i < projects.length; i++) {
                    projects[i].style.display = "block";
                    fadeElement(projects[i]);
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
handleFilterButtonClick("js-filter", ".fade-in-up-on-scroll", "js");
handleFilterButtonClick("python-filter", ".fade-in-up-on-scroll", "python");
handleFilterButtonClick("sql-filter", ".fade-in-up-on-scroll", "sql");
