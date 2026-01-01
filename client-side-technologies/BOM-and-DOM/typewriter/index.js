let child;
const typingMessage =
  "your message will be displayed character by character :) \n\n\n\n few seconds and this window will terminate...";
let index = 0;
let timerID;

function onShowPress() {
  child = open("child.html", "Typing", "top=400,left=400,width=600,height=360");

  if (timerID) clearTimer();

  timerID = setInterval(() => {
    if (index < typingMessage.length) {
      if (typingMessage[index] == "\n") {
        child.document.querySelector("#typewriter").innerHTML += "<br />";
      } else {
        child.document.querySelector("#typewriter").innerHTML +=
          typingMessage[index];
      }
      index++;
    } else {
      clearTimer();
      setTimeout(closeChild, 5000);
    }

  }, 50);
}

function closeChild() {
  if (child && !child.closed) {
    child.close();
  }
}

function clearTimer() {
  if (timerID) {
    clearInterval(timerID);
    timerID = null;
    index = 0;
  }
}
