const numbers = [1, 1, 2, 3, 4, 5, 5, 6, 6,6, 5,7];
const counts = {};
// for each
numbers.forEach((number) => {
  counts[number] = counts[number] ? counts[number] + 1 : 1;
});

console.log(counts); 
// //for of

// for (const number of numbers) {
//   counts[number] = counts[number] ? counts[number] + 1 : 1;
// }

// console.log(counts);

// // for 
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   counts[number] = counts[number] ? counts[number] + 1 : 1;
// }

// console.log(counts); 
// // for in
// for (let i in numbers) {
//   const number = numbers[i];
//   counts[number] = counts[number] ? counts[number] + 1 : 1;
// }
// console.log(counts);























//  arr.forEach(num => {
//    if (countObj[num]) {
//     console.log(countObj[num]);
//      countObj[num]++;
//    } else {
//     countObj[num] = 1;
//   }
//   }, {});
//   console.log(countObj);
//   for (const key in countObj) {
//    console.log(`${key}:${countObj[key]}`);}
   
  //for 
    // (i = 0; i < arr.length; i++){
    //     if (!countObj[arr[i]])        
    //     countObj[arr[i]] = 0;    
    //     ++countObj[arr[i]];
    // }
//     const counts = {};
// for 
//     (i = 0; i < arr.length; i++){
//         if (!counts[arr[i]])        
//         counts[arr[i]] = 0;    
//         ++counts[arr[i]];
//     }
 
// console.log(counts);