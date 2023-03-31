// create an empty array
let myArray = [];

//  1 to 90  add to the array
for (let i = 1; i <= 90; i++) {
  myArray.push(i);
}

// print the resulting array
console.log(myArray);
// now i try to pop it ...
function popNumber() {
  if (myArray.length > 0) {
    var item = myArray[Math.floor(Math.random()*myArray.length)];
    myArray.pop(item);
    console.log(item);
    setTimeout(popNumber, 2000);
  }
}


// start popping numbers.....
popNumber();

