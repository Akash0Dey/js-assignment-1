// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 2;
const d = 3;
const n = 5;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let sumOfAP = 0;
let currentTerm = a;
let nthTerm = 1;
while (nthTerm <= n) {
    sumOfAP = sumOfAP + (currentTerm + (nthTerm - 1) * d);
    nthTerm++;
}

console.log(sumOfAP);
