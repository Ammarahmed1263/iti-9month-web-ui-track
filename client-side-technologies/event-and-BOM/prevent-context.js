document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  console.log(event.clientX, event.clientY);
});
