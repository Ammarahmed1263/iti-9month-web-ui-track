let inputField = document.getElementById("numbers");
let clearBtn = document.getElementById("ac");
let deleteBtn = document.getElementById("del");
let displayBtn = document.getElementById("displayBtn");

clearBtn.addEventListener("click", function () {
  if (inputField.value != "") {
    inputField.value = "";
  }
});

let eraseVal = function () {
  if (inputField.value != "") {
    inputField.value = inputField.value.substring(
      0,
      inputField.value.length - 1
    );
  }
};

deleteBtn.addEventListener("click", eraseVal);

function displayNum(button) {
  let val = button.value;
  inputField.value += val.trim();
}

displayBtn.addEventListener("click", function () {
  let menu = document.getElementById("menu");
  console.log(menu);

  let options = [];
  for (let i = 0; i < menu.options.length; i++) {
    if (menu.options[i].selected) {
      options.push(menu.options[i].text);
    }
  }

  document.getElementById("div1id").innerHTML = options;
});