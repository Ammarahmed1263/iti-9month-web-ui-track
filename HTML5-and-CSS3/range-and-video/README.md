# HTML5 Range & Video Controls

Interactive projects demonstrating HTML5 `<input type="range">` and `<video>` elements with JavaScript control.

---

## Project 1: Color Range Mixer

**What it does:** Dynamically change text color using three RGB range sliders.

### How it works:
1. Creates three range inputs (Red, Green, Blue) dynamically using JavaScript
2. Each slider ranges from 0-255
3. Input event listener triggers `updateColor()` on every change
4. Updates heading text color: `rgb(red, green, blue)`

### Key Code:
```javascript
function updateColor() {
  const red = ranges[0].value;
  const green = ranges[1].value;
  const blue = ranges[2].value;
  header.style.color = `rgb(${red}, ${green}, ${blue})`;
}
```

**Learning Points:**
- Dynamic DOM element creation
- Range input event handling
- RGB color manipulation
- Real-time CSS updates

---

## Project 2: Video Player Controls

**What it does:** Full-featured HTML5 video player with play/pause, seek, volume, speed, and playlist navigation.

### Core Features:

#### Playback Controls
- **Play/Pause**: Start and stop video
- **Jump Start/End**: Go to start or end of video
- **Skip ±5s**: Jump backward/forward 5 seconds
- **Playlist Switching**: Previous/Next buttons cycle through videos

#### Video Parameters
```javascript
const videos = ["plus-one.mp4", "frozen.mp4", "sort.mp4"];
```
Switches between videos at start/end when navigation buttons are pressed.

#### Seek Bar
- Updates on `timeupdate` event (every frame update)
- Allows scrubbing video to any position
- Displays current time / total duration in MM:SS format

#### Volume Control
```javascript
volumeSlider.addEventListener("input", function (event) {
  video.volume = event.target.value;  // 0 to 1
  mute.textContent = video.volume === 0 ? "Unmute" : "Mute";
});
```
Range from 0 (mute) to 1 (full volume)

#### Speed Control
```javascript
speedSlider.addEventListener("input", function (event) {
  video.playbackRate = event.target.value;  // 0.25x to 2x
  speedValue.textContent = event.target.value + "x";
});
```
Speed range from 0.25x to 2x with 0.25 step

#### Video Events Used
| Event | Purpose |
|-------|---------|
| `timeupdate` | Update progress bar & time display |
| `loadedmetadata` | Set max seek bar value & duration |
| `input` (seek bar) | Change video position |

### Key Helper Function:
```javascript
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}
```
Converts seconds to MM:SS format.

**Learning Points:**
- HTML5 video element API
- Event listeners for media control
- Range slider input handling
- Time formatting and display
- Playlist management
- Video metadata handling

---

## Quick Start

**Color Range:**
```
Adjust sliders → Observe text color change
```

**Video Player:**
```
Use buttons to play/pause/seek
Adjust volume and speed sliders
Previous/Next buttons switch videos
```
