/**
 *
 * Given two arrays of integers, returns the dot product of the arrays
 */
// Find the dot product of two arrays - mean array1[i] * array2[i]
// Find the dot product of two arrays - mean array1[i] * array2[i].
// (if the length of the two arrays are not equal then the loop should go for the lesser length).

const dotProduct = (arr1, arr2) => {
  let ans = 0;
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    ans += arr1[i] * arr2[i];
  }
  return ans;
};

const array1 = [1, 2];
const array2 = [2, 3];
const result = dotProduct(array1, array2);

if (result == 8) console.log("Passed.");
else console.log("Failed");
