let string = prompt("Enter string here: ");
let char = prompt("Enter character to count: ");
while (char.length !== 1) {
    char = prompt("Please enter only ONE character: ");
}

let caseSensitive = confirm("Is case sensitive? (OK=Yes, Cancel=No)");

function countOccurrences(string, char, sensitive) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (sensitive) {
      if (string[i] === char) count++;
    } else {
      if (string[i].toLowerCase() === char.toLowerCase()) count++;
    }
  }
  return count;
}

console.log(
  'In "',
  string,
  '" found',
  countOccurrences(string, char, caseSensitive),
  'occurrences of "',
  char,
  '"'
);
