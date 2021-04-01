// Find the nth Number in fibonacci series using Iterative and Recursive Approach.

// Iterative solution:
// Time Complexity:O(n)
// Extra Space: O(1)
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// Recursive solution:
//Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
// Extra Space: O(n)
function fibRec(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log("fib", fib(15));
console.log("fibRec", fibRec(15));
