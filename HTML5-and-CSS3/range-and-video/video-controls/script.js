const video = document.querySelector("video");
const seekBar = document.getElementById("seek-bar");
const play = document.getElementById("play-button");
const pause = document.getElementById("pause-button");
const jumpEnd = document.getElementById("jump-end-button");
const skipForward = document.getElementById("skip-forward-button");
const skipBackward = document.getElementById("skip-backward-button");
const jumpStart = document.getElementById("jump-start-button");
const volumeSlider = document.getElementById("volume-slider");
const speedSlider = document.getElementById("speed-slider");
const mute = document.getElementById("mute-button");
const progress = document.getElementById("video-progress");
const duration = document.getElementById("video-duration");
const speedValue = document.getElementById("speed-value");

let activeVideo = 1;
const videos = ["plus-one.mp4", "frozen.mp4", "sort.mp4"];

video.addEventListener("timeupdate", function () {
  seekBar.value = video.currentTime;
  progress.innerHTML = formatTime(video.currentTime);
});

video.addEventListener("loadedmetadata", function () {
  seekBar.value = 0;
  seekBar.max = video.duration;
  duration.innerHTML = formatTime(video.duration);
  video.playbackRate = 1;
});

seekBar.addEventListener("input", function () {
  video.currentTime = seekBar.value;
});

play.addEventListener("click", function () {
  video.play();
});

pause.addEventListener("click", function () {
  video.pause();
});

jumpEnd.addEventListener("click", function () {
  if (video.duration - video.currentTime < 0.5) {
    activeVideo = (activeVideo + 1) % videos.length;
    video.firstElementChild.src = "videos/" + videos[activeVideo];
    video.load();
    video.play();
  } else {
    video.currentTime = video.duration;
  }
});

skipForward.addEventListener("click", function () {
  video.currentTime = Math.min(video.currentTime + 5, video.duration);
});

skipBackward.addEventListener("click", function () {
  video.currentTime = Math.max(video.currentTime - 5, 0);
});

jumpStart.addEventListener("click", function () {
  if (video.currentTime < 1) {
    activeVideo = (activeVideo - 1 + videos.length) % videos.length;
    video.firstElementChild.src = "videos/" + videos[activeVideo];
    video.load();
    video.play();
  } else {
    video.currentTime = 0;
  }
});

mute.addEventListener("click", function () {
  video.muted = !video.muted;
  volumeSlider.value = video.muted ? 0 : video.volume;
  mute.textContent = video.muted ? "Unmute" : "Mute";
});

volumeSlider.addEventListener("input", function (event) {
    video.volume = event.target.value;
    mute.textContent = video.volume === 0 ? "Unmute" : "Mute";
});

speedSlider.addEventListener("input", function (event) {
  video.playbackRate = event.target.value;
  speedValue.textContent = event.target.value + "x";
});

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + formattedSeconds;
}
