// Do not rename a, use it as input for your program.
// a will be a Whole number.
// While testing we will change its value.
const a = 0;
// Print the first prime number above `a`
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isPrime = false;
let primeCandidate = a;

while (isPrime === false) {
    primeCandidate++;
    isPrime = true;

    for (let divisor = 2; divisor < primeCandidate; divisor++) {
        if (primeCandidate % divisor === 0) {
            isPrime = false;
        }
    }

    if (primeCandidate < 2) {
        isPrime = false;
    }
}

console.log(primeCandidate);