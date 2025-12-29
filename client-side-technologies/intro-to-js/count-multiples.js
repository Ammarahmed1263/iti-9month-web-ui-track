let multiple_3 = "",
  multiple_5 = "",
  sum = 0;

let start = parseInt(prompt("Enter range start: "));
let end = parseInt(prompt("Enter range end: "));

for (let i = start; i <= end; i++) {
  if (i % 3 == 0) {
    if (multiple_3 !== "") {
      multiple_3 += ",";
    }
    multiple_3 += i;
    sum += i;
  }

  if (i % 5 == 0) {
    if (multiple_5 !== "") {
      multiple_5 += ",";
    }
    multiple_5 += i;
    sum += i;
  }
}

document.write("Number multiple of 3: " + multiple_3 + "<br>");
document.write("Number multiple of 5: " + multiple_5 + "<br>");
document.write("total sum is " + sum + "<br>");
