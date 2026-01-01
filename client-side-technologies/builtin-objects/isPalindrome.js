let str = prompt("Enter Word here: ");

let cleanStr = str.replace(/[^a-zA-z0-9]/g, "")

let sensitive = confirm("Consider case sensitivity?");

let start = 0;
let end = cleanStr.length - 1;

let palindrome = true;
while (start <= end) {
  if (sensitive) {
    if (cleanStr[start] !== cleanStr[end]) {
      palindrome = false;
      break;
    }
  } else {
    if (cleanStr[start].toLowerCase() !== cleanStr[end].toLowerCase()) {
      palindrome = false;
      break;
    }
  }
  start++;
  end--;
}

alert(cleanStr + (palindrome ? " is palindrome" : " isn't palindrome"));
