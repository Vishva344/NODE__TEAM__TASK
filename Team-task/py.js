// const height = 5;

// for (let i = 0; i < height; i++) {
//   let row = '';

//   // Add spaces to left-align the pyramid
//   for (let j = 0; j < height - i; j++) {
//     row += ' ';
//   }

//   // Add asterisks for the pyramid
//   for (let j = 0; j <= i; j++) {
//     row += '*';

//     // Add spaces between the asterisks for a more pyramid-like appearance
//     if (j < i) {
//       row += '*';
//     }
//   }

//   console.log(row);
// }

const numRows = 8;

for (let i = 0; i < numRows; i++) {
  let row = '';

  // Add spaces to left-align the pattern
  for (let j = 0; j < i; j++) {
    row += ' ';
  }

  // Add asterisks for the pattern
  for (let j = 0; j <= i; j++) {
    row += '*';
  }

  console.log(row);
}

