document.forms["nameForm"].addEventListener("submit", function (e) {
  console.log("hello world");
  if (!confirm("Are you sure you want to continue?")) {
    e.preventDefault();
  }
});

const input = document.getElementById("userName");
const timeoutEvent = new CustomEvent("lateSubmit", {
  detail: {
    msg: "Time up! Input duration passed",
  },
});

let timerID = setTimeout(function () {
  input.dispatchEvent(timeoutEvent);
}, 30000);

input.addEventListener("lateSubmit", function (event) {
  if (input.value == "") {
    alert(event.detail.msg);
  }
});

input.addEventListener("input", function () {
  if (timerID) {
    clearTimeout(timerID);
  }
});
