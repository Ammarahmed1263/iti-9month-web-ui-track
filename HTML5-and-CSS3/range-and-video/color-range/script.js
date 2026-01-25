createRange("blue-range", "Blue");
createRange("green-range", "Green");
createRange("red-range", "Red");
createHeader();

const header = document.getElementById("color-text");
const ranges = document.querySelectorAll("input[type='range']");

for (let i = 0; i < ranges.length; i++) {
  ranges[i].addEventListener("input", updateColor);
}

function updateColor() {
  const red = ranges[0].value;
  const green = ranges[1].value;
  const blue = ranges[2].value;
  header.style.color = `rgb(${red}, ${green}, ${blue})`;
}

function createHeader() {
  const scriptTag = document.body.firstChild;
  let h1 = document.createElement("h1");
  h1.id = "color-text";
  h1.textContent =
    "Change the 3 Color Ranges above and observe my color Change";

  h1.style.marginTop = "30px";
  h1.style.marginLeft = "30px";
  h1.style.fontSize = "40px";
  h1.style.fontFamily = "system-ui, sans-serif";

  scriptTag.before(h1);
}

function createRange(id, name) {

  let container = document.createElement("div");
  container.style.marginBottom = "10px";
  container.style.textAlign = "center";

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = name;
  label.style.width = "60px";
  label.style.fontWeight = "bold";
  label.style.fontFamily = "monospace";

  let rangeInput = document.createElement("input");
  rangeInput.type = "range";
  rangeInput.id = id;
  rangeInput.name = name;
  rangeInput.min = "0";
  rangeInput.max = "255";
  rangeInput.step = "1";
  rangeInput.value = "0";
  rangeInput.style.cursor = "pointer";
  rangeInput.style.accentColor = name.toLowerCase();

  container.appendChild(label);
  container.appendChild(rangeInput);

  document.body.insertAdjacentElement("afterbegin", container);
}
