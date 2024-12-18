// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 1;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let dividingNumber = a;
let divisor = 2;

while (dividingNumber > 1) {
    if (dividingNumber % divisor === 0) {
        console.log(divisor);
        dividingNumber = dividingNumber / divisor;
        divisor--;
    }
    divisor++;
}