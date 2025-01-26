/**
 * Sets up a video to play or pause when its container is clicked.
 * @function
 */
export function setupVideo() {
    const videoContainer = document.getElementById("video");
    const video = document.getElementById("product-video");
    const playButton = document.getElementById("play-button");

    // Toggle video play/pause on click.
    videoContainer.addEventListener("click", function (event) {
        if (![playButton, video].includes(event.target)) return;
        toggleVideo(video, playButton);
    });
    // Show button again if video has been ended.
    videoContainer.addEventListener("ended", function () {
        playButton.style.display = "block";
    });
}

/**
 * Toggle video play/pause state.
 *
 * If the video is currently paused, show the video and play it. Hide the
 * play button. Otherwise, pause the video and show the play button.
 *
 * @param {HTMLVideoElement} video - The video element.
 * @param {HTMLButtonElement} playButton - The play button element.
 */
function toggleVideo(video, playButton) {
    if (video.paused) {
        video.style.display = "block";
        video.play().then(() => {
            // Скрыть кнопку.
            playButton.style.display = "none";
        });
    } else {
        video.pause();
        playButton.style.display = "block";
    }
}