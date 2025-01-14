document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("product-video");
    const playButton = document.getElementById("play-button");

    // Обработчик для кнопки "Play"
    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.style.display = "block"; // Показываем видео
            video.play();
            playButton.style.display = "none"; // Скрываем кнопку
        }
    });

    // Обработчик для клика на видео.
    video.addEventListener("click", function () {
        if (!video.paused) {
            video.pause(); // Ставим видео на паузу
            playButton.style.display = "block"; // Показываем кнопку "Play"
        } else {
            video.play(); // Возобновляем воспроизведение
            playButton.style.display = "none"; // Скрываем кнопку
        }
    });

    // Показать кнопку "Play" снова, если видео завершено.
    video.addEventListener("ended", function () {
        // Показываем кнопку "Play" при завершении.
        playButton.style.display = "block";
    });
});
