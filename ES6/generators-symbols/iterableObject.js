const itrObj = {
  company: "Facebook",
  worth: 90000000,
  size: "50k-200k",
  [Symbol.iterator]: function* () {
    for (const entry of Object.entries(this)) {
        yield entry;
    }
  }
//   [Symbol.iterator]: function () {
//     const entries = Object.entries(this);
//     let index = 0;

//     return {
//       next: function () {
//         if (index < entries.length) {
//           return {
//             value: entries[index++],
//             done: false,
//           };
//         }

//         return { value: undefined, done: true };
//       },
//     };
//   },
};

for (const entry of itrObj) {
  console.log(entry);
}
