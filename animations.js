// This file contains JavaScript functions for animations on the "Register Now" page.

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");
    
    // Add animation to inputs on focus
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.classList.add("animated");
        });
        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.classList.remove("animated");
            }
        });
    });

    // Smooth scroll to the top of the page on form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        alert("Thank you for registering!");
        form.reset();
    });
});

// Function to fade in elements
function fadeIn(element) {
    element.style.opacity = 0;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();
        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}

// Call fadeIn on the form when the page loads
window.onload = function() {
    const form = document.querySelector("form");
    fadeIn(form);
};