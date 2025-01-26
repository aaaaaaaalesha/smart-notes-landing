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
        button.addEventListener("click", (event) => {
            const button = event.currentTarget;
            const prevElement = button.previousElementSibling;
            if (prevElement !== null && prevElement.tagName.toLowerCase() === "label") {
                const inputElement = prevElement.querySelector("input");
                inputElement.value = inputElement.placeholder;
            }
            focusTo.scrollIntoView({behavior: "smooth"});
        });
    });
}