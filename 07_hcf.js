// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 6;
const b = 9;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const max = (a > b) ? a : b;
let hcf = undefined;

for (let hcfCandidate = 1; hcfCandidate <= max; hcfCandidate++) {
    if (a % hcfCandidate !== 0 ) {
        continue;
    }
    hcf = ((b % hcfCandidate) === 0) ? hcfCandidate : hcf;
}

console.log(hcf);
