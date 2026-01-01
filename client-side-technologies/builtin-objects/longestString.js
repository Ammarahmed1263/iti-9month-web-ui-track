let str = prompt("Enter sentence here: ");

let words = str.split(' ');
let longest = '';

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//         if (current.length > longest.length) {
//             longest = current;
//         }
//         current = '';
//     } else {
//         current += str[i];
//     }
// }

// if (current.length > longest.length) {
//     longest = current;
// }

document.write('longest word is ', longest);