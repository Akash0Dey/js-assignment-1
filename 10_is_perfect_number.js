// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 28;
// Print true if a is a perfect number otherwise print false
// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
// For example, 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// Printing more than one output or printing anything other than perfect or not perfect might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const sumOfProperFractor = function (number, divisor) {
  if (number < divisor * divisor) {
    return 1;
  }

  const sum = number % divisor === 0 ? (number / divisor) + divisor : 0;
  return sum + sumOfProperFractor(number, divisor + 1);
}

console.log(sumOfProperFractor(a, 2) === a);