// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 81;
const b = 15;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let multipleOfA = a;

while (multipleOfA % b !== 0) {
    if (a === 0 || b === 0) {
        multipleOfA = 0;
        break;
    }
    multipleOfA = multipleOfA + a;
}

const lcm = multipleOfA;

console.log(lcm);