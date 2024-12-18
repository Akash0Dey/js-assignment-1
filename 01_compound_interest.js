// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;   // p = 200, 500
const r = 5;    //  r = 10,  3
const t = 2;    //  t = 1,   3
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
function range(start, end, step) {
  let numbers = [];

  for (let number = start; number < end; number += step) {
    numbers.push(number);
  }

  return numbers;
}

const compoundAmount = function([principle, rate], a){
  return [principle + (principle * rate) / 100, rate];
}

console.log(range(0, t, 1).reduce(compoundAmount, [p, r])[0] - p);