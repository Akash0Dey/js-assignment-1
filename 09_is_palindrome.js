// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 12321;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// let remainingNumber = a;
// let reverse = 0;

// while (remainingNumber != 0) {
//     let reminder = remainingNumber % 10;
//     reverse = reverse * 10 + reminder;
//     remainingNumber = (remainingNumber - reminder) / 10;
// }

// const isPalindrome = (reverse === a);

// console.log(isPalindrome);

const numberString = "" + a;
let reverseString = '';

for (let index = 0; index >= (numberString.length - 1); index--) {
    reverseString = numberString[index] + reverseString;
}

const isPalindrome = (reverseString === numberString);
console.log(isPalindrome);