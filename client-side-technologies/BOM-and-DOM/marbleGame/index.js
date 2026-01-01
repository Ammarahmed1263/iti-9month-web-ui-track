let index = 0;
const count = document.images.length;
let timerID;

let speed = 400;
let step = -50;

for (let i = 0; i < count; i++) {
  document.images[i].mouseover = stop;
  document.images[i].mouseout = start;
}

function start() {
  function callback() {
    document.images[index].src = "images/marble1.jpg";
    index = (index + 1) % count;
    document.images[index].src = "images/marble3.jpg";

    if (index === count - 1) {
      clearInterval(timerID);

      if (speed <= 50) {
        step = 50;
      } else if (speed >= 250) {
        step = -50;
      }

      speed += step;

      timerID = setInterval(callback, speed);
    }

    console.log(speed);
  }

  timerID = setInterval(callback, speed);
}

function stop() {
  clearInterval(timerID);
}

start();
