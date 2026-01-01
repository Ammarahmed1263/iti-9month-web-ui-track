let index = 0;
const count = 5;
let timerID;

let speed = 400;
let step = -50;

function stop() {
  clearInterval(timerID);
}

function start() {
  function callback() {
    document.querySelectorAll("img")[index].src = "images/marble1.jpg";
    index = (index + 1) % count;
    document.querySelectorAll("img")[index].src = "images/marble3.jpg";

    if (index === count - 1) {
      clearInterval(timerID);

      if (speed <= 50) {
        step = 50;
      } else if (speed >= 250) {
        step = -50;
      }

      speed += step;

      console.log(`Current Speed: ${speed}ms`);

      timerID = setInterval(callback, speed);
    }

    console.log(speed);
  }

  timerID = setInterval(callback, speed);
}

start();
