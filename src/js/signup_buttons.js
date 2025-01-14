/**
 * Set up listeners all signup buttons on the page.
 *
 * @function setupSignupButtons
 */
export function setupSignupButtons() {
    const signupBtns = document.querySelectorAll(
        ".signup-button, .get-started, .signup-icon"
    );
    const focusTo = document.getElementById("hero");
    for (let signupButton of signupBtns) {
        // If there is input processing button here, flush input filed.
        let prevElement = signupButton.previousElementSibling;
        if (prevElement !== null && prevElement.tagName.toLowerCase() === "label") {
            signupButton.addEventListener("click", function () {
                let inputElement = prevElement.querySelector("input");
                inputElement.value = inputElement.placeholder;
                // Action moves focus.
                focusTo.scrollIntoView({behavior: "smooth"});
            });
            continue;
        }
        // Action moves focus.
        signupButton.addEventListener("click", function () {
            focusTo.scrollIntoView({behavior: "smooth"});
        });
    }
}