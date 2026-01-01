let i = 1;
let totalImages = 6;

function showImage() {
  document.getElementById("heroImage").src = "images/" + i + ".jpg";
}

function onNextPress() {
  if (i < totalImages) {
    i++;
    showImage();
  }
}

function onPrevPress() {
  if (i > 1) {
    i--;
    showImage();
  }
}

let timerID;
function onSlideShowPress() {
  if (timerID) return;
  i = 1;
  showImage();

  timerID = setInterval(() => {
    i = (i % totalImages) + 1;
    showImage();
  }, 2000);
}

function onStopPress() {
  clearInterval(timerID);
  timerID = null;
}
