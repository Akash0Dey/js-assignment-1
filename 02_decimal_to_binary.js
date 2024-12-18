// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// recursion

const decimalToBinary = function (number) {
  if (number < 2) {
    console.log(number);
    return;
  }

  console.log(number % 2);
  return decimalToBinary(number >> 1);
}

decimalToBinary(a);