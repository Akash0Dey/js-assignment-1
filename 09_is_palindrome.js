// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 121;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const noOfDigit = function (number) {
  if (number < 10) {
    return 1;
  }

  return 1 + noOfDigit(number / 10);
}

const reverse = function (number) {
  if (number < 10) {
    return number;
  }

  const lastDigit = number % 10;
  const positionValue = Math.pow(10, noOfDigit(number) - 1);

  return lastDigit * positionValue + reverse(Math.floor(number / 10));
}

console.log(reverse(a) === a);