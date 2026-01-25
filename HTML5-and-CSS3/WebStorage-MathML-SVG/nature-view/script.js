const canvas = document.getElementById("nature-view");
const ctx = canvas.getContext("2d");

const backgroundGradient = ctx.createLinearGradient(0, 0, 0, 500);

backgroundGradient.addColorStop(0, "skyblue");
backgroundGradient.addColorStop(0.3, "#98d9f3");
backgroundGradient.addColorStop(0.5, "white");
backgroundGradient.addColorStop(0.5, "#00b300");
backgroundGradient.addColorStop(0.7, "#00c800");
backgroundGradient.addColorStop(1, "white");

ctx.fillStyle = backgroundGradient;
ctx.fillRect(20, 20, 570, 580);

ctx.beginPath();
ctx.lineWidth = 5;

ctx.moveTo(120, 400); 
ctx.lineTo(120, 110); 
ctx.lineTo(490, 110); 
ctx.lineTo(490, 400); 

const goalGradient = ctx.createLinearGradient(0, 150, 0, 350);

goalGradient.addColorStop(0, "black")
goalGradient.addColorStop(0.4, "black");
goalGradient.addColorStop(1, "rgba(0,0,0,0)");

ctx.strokeStyle = goalGradient;
ctx.stroke();