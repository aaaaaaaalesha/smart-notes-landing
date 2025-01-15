/**
 * Set up listeners all signup buttons on the page.
 *
 * @function setupSignupButtons
 */
export function setupSignupButtons() {
    const signupButtons = document.querySelectorAll(
        ".signup-button, .get-started, .signup-icon"
    );
    const focusTo = document.getElementById("hero");

    signupButtons.forEach(button => {
        const prevElement = button.previousElementSibling;
        if (prevElement !== null && prevElement.tagName.toLowerCase() === "label") {
            button.addEventListener("click", function () {
                const inputElement = prevElement.querySelector("input");
                inputElement.value = inputElement.placeholder;
                focusTo.scrollIntoView({behavior: "smooth"});
            });
        } else {
            button.addEventListener("click", function () {
                focusTo.scrollIntoView({behavior: "smooth"});
            });
        }
    });
}