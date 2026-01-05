const log = document.getElementById("character");

document.addEventListener("keydown", function (event) {
  log.innerHTML = event.key;

  if (event.ctrlKey && event.code == "KeyS") {
    event.preventDefault();
  }
});
