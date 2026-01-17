document.querySelectorAll(".video-card video").forEach(video => {
    video.addEventListener("mouseenter", () => video.play());

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});
