const canvas = document.getElementById("buttonCanvas");
const ctx = canvas.getContext("2d");

const centerX = 150;
const centerY = 150;

const outerRadius = 100;
const outerGradient = ctx.createRadialGradient(
    centerX + 25, centerY - 35, outerRadius / 2 - 15,
    centerX, centerY, outerRadius
);

outerGradient.addColorStop(0, "#d0dbff");
outerGradient.addColorStop(0.2, "#b4c6f8");
outerGradient.addColorStop(1, "#1745cf");

ctx.beginPath();
ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
ctx.fillStyle = outerGradient;
ctx.fill();


const innerRadius = 75;
const innerGradient = ctx.createRadialGradient(
    centerX + 35, centerY + 45, 5,
    centerX, centerY, innerRadius
);

innerGradient.addColorStop(0, "#8facff");
innerGradient.addColorStop(1, "#2654e8");

ctx.beginPath();
ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
ctx.fillStyle = innerGradient;
ctx.fill();


ctx.font = "150px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

ctx.fillText("N", centerX, centerY + 15);