// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// recursion

const fibonacciTerm = function (currentTerm, nextTerm, termLeft) {
  if (termLeft <= 0) {
    return;
  }

  console.log(currentTerm);

  return fibonacciTerm(currentTerm + nextTerm, currentTerm, termLeft - 1);
}

const fibonacci = function (term) {
  return fibonacciTerm(0, 1, term);
}

fibonacci(n)