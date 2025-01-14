document.addEventListener("DOMContentLoaded", function () {
    // Listeners for signup-buttons.
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
                focusTo.scrollIntoView({behavior: 'smooth'});
            });
            continue;
        }
        // Action moves focus.
        signupButton.addEventListener("click", function () {
            focusTo.scrollIntoView({behavior: 'smooth'});
        });
    }

    // Listeners for `video` tag.
    const video = document.getElementById("product-video");
    const playButton = document.getElementById("play-button");

    // Play button click handler to start and stop video.
    playButton.addEventListener("click", function () {
        if (video.paused) {
            // Show button
            video.style.display = "block";
            video.play();
            // Hide button.
            playButton.style.display = "none";
        }
    });

    // Video click handler to its start and stop.
    video.addEventListener("click", function () {
        if (!video.paused) {
            video.pause();
            // Show button.
            playButton.style.display = "block";
        } else {
            video.play();
            // Hide button.
            playButton.style.display = "none";
        }
    });

    // Show button again if video has been ended.
    video.addEventListener("ended", function () {
        playButton.style.display = "block";
    });
});
