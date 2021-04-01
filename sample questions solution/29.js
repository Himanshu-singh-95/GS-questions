// Possible to make a divisible by 3 number using all digits in an array
// The idea is based on the fact that a number is divisible by 3 iff sum of its digits is divisible by 3.
//  So we simply find sum of array elements. If the sum is divisible by 3, our answer is Yes, else No.

const isPossibleToMakeDivisible = (arr) => {
  const remainder =
    arr.reduce((preVal, currVal) => {
      return preVal + parseInt(currVal);
    }, 0) % 3;
  // Return true if remainder is 0.
  return remainder == 0;
};

const arr = [40, 50, 90];

console.log("isPossibleToMakeDivisible", isPossibleToMakeDivisible(arr));
