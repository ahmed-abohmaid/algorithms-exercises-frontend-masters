function fibonacci(n, memo = {}) {
  // Check if the value is already in the memo
  if (memo[n]) return memo[n];

  // Base cases
  if (n === 1 || n === 2) return 1;
  if (n <= 0) return 0;

  // Store the computed value in the memo
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// unit tests
test("fibonacci", () => {
  expect(fibonacci(1)).toEqual(1);
  expect(fibonacci(2)).toEqual(1);
  expect(fibonacci(3)).toEqual(2);
  expect(fibonacci(10)).toEqual(55);
  expect(fibonacci(20)).toEqual(6765);
});