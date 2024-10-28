/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
}

/**
 * More optimized factorial function for TCO
 */
function optFactorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return optFactorial(n - 1, n * acc);
}

// unit tests
// do not modify the below code
test("factorials", () => {
  expect(optFactorial(1)).toEqual(1);
  expect(optFactorial(2)).toEqual(2);
  expect(optFactorial(3)).toEqual(6);
  expect(optFactorial(10)).toEqual(3628800);
});
