// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 10;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
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

const primeRange = function (startRange, endRange) {
  const primeCandidate = startRange < 2 ? 2 : startRange;

  if (startRange > endRange) {
    return;
  }

  if (isPrime(primeCandidate)) {
    console.log(primeCandidate);
  }

  return primeRange(primeCandidate + 1, endRange);
}

primeRange(startOfRange, endOfRange);