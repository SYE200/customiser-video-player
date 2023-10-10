const video = document.getElementById('custom-video');

let isPlaying = false;

video.addEventListener('click', togglePlay);
video.addEventListener('dblclick', handleDoubleClick);

function togglePlay() {
    if (isPlaying) {
        video.pause();
    } else {
        video.play();
    }
    isPlaying = !isPlaying;
}

function handleDoubleClick(event) {
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;
    const videoDuration = video.duration;
    const seekTime = 10; // seconds to seek

    if (clickX < screenWidth / 3) {
        // Double-tap on the left side
        video.currentTime -= seekTime;
    } else if (clickX > (screenWidth / 3) * 2) {
        // Double-tap on the right side
        video.currentTime += seekTime;
    } else {
        // Double-tap in the middle
        togglePlay();
    }
}


