// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;   // p = 200, 500
const r = 5;    //  r = 10,  3
const t = 2;    //  t = 1,   3
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
// recursion

const compoundAmount = function (priciple, rate, time) {
  if (time <= 0) {
    return priciple;
  }

  return compoundAmount(priciple + (priciple * rate) / 100, rate, time - 1);
}

console.log(compoundAmount(p, r, t) - p);