var canvas = document.getElementById("line-animation");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "darkred";
ctx.lineWidth = 8;
ctx.lineCap = "round"

var currentX = 0;
var currentY = 0;
var targetX = 500;
var targetY = 500;

function draw() {
  ctx.beginPath();

  ctx.moveTo(0, 0);

  ctx.lineTo(currentX, currentY);

  ctx.stroke();

  currentX += 2;
  currentY += 2;

  if (currentX <= targetX && currentY <= targetY) {
    requestAnimationFrame(draw);
  } else {
    ctx.lineTo(targetX, targetY);
    ctx.stroke();

    setTimeout(function () {
      alert("animation end");
    }, 200);
  }
}

draw();
