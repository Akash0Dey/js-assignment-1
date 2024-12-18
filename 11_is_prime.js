// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 3;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let count = 0;
let isPrime = false;

for (let divisor = 1; divisor < a; divisor++) {
    if (a % divisor === 0){
        count++;
    }
}

if (count === 1){
    isPrime = true;
}

console.log(isPrime);
