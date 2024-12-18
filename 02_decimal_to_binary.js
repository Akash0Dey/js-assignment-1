// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 16;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
function range(start, end, step) {
  let numbers = [];

  for (let number = start; number < end; number += step) {
    numbers.push(number);
  }

  return numbers;
}

const lastBit = function (number) {
  console.log(number & 1); 
  return number >> 1; 
}

range(0, Math.ceil(Math.log2(a + 1)), 1).reduce(lastBit, a);

// let decimalNumber = a;
// while (decimalNumber >= 0) {
//   const binaryReminder = decimalNumber % 2;
//   decimalNumber = (decimalNumber - binaryReminder) / 2;
//   console.log(binaryReminder);
//   if (decimalNumber === 0) {
//       break;
//   }
// }