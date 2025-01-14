/**
 * Set up the video player and the play button.
 *
 * @function setupVideo
 */
export function setupVideo() {
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
}