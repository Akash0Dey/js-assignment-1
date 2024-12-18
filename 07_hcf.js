// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 6;
const b = 9;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const isDivisible = function (dividend, divisor) {
  return dividend % divisor === 0;
}

const hcfPossible = function (num1, num2, hcfCandidate) {
  if (isDivisible(num1, hcfCandidate) && isDivisible(num2, hcfCandidate)) {
    return hcfCandidate;
  }

  return hcfPossible(num1, num2, hcfCandidate - 1);
}

const hcf = function (num1, num2) {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  if (min === 0) {
    return max;
  }
  
  return hcfPossible(num1, num2, min);
}

console.log(hcf(a, b));