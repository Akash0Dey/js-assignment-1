// Do not rename a, use it as input for your program.
// a will be a Whole number.
// While testing we will change its value.
const a = 5;
// Print the first prime number above `a`
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const isNumberHasMoreThan2Factors = function (primeCandidate, divisor) {
  if (Math.pow(divisor, 2) > primeCandidate) {
    return true;
  }

  return primeCandidate % divisor === 0 ? false : 
  isNumberHasMoreThan2Factors(primeCandidate, divisor + 1);
}

const isPrime = function (primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isNumberHasMoreThan2Factors(primeCandidate, 2);
}

const firstPrimeAbove = function (number) {
  const primeCandidate = number + 1;

  if (primeCandidate < 3) {
    console.log(2);
    return;
  }

  if (isPrime(primeCandidate)) {
    console.log(primeCandidate);
    return;
  }

  return firstPrimeAbove(primeCandidate);
}

firstPrimeAbove(a)