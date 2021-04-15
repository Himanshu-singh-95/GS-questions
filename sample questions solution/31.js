/**
 * Longest sub-array having sum k. Given an array arr[] of size n containing integers
 * find the length of the longest sub-array having sum equal to the given value k.
 */

/**
 * function to find the length of longest subarray having sum k
 * @param {Array} arr
 * @param {Number} k
 * Time Complexity is of O(n^2).
 */
const lenOfLongSubarr = (arr, k) => {
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let currLen = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      currLen = j - i + 1;
      if (sum == k && currLen > maxLen) {
        maxLen = currLen;
      }
    }
  }

  return maxLen;
};

let arr = [-5, 8, -14, 2, 4, 12];
let k = -5;
console.log(lenOfLongSubarr(arr, k));

/**
 * function to find the length of longest subarray having sum k
 * @param {Array} arr
 * @param {Number} k
 * Time Complexity is of O(n^2).
 */
const lenOfLongSubarrOptimized = (arr, k) => {
  let maxLen = 0;
  const n = arr.length;
  let sum = 0;
  // Map to store (sum, index) tuples
  let mp = new Map();

  // traverse the given array
  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum == k) {
      maxLen = i + 1;
    }

    // make an entry for 'sum' if it is not present in 'map'
    if (!mp.has(sum)) {
      mp.set(sum, i);
    }

    // check if 'sum-k' is present in 'map' or not
    // f present, then obtain index of (sum-k) from the map as index.
    // Now check if maxLen < (i-index), then update maxLen = (i-index).
    if (mp.has(sum - k)) {
      // update maxLength
      if (maxLen < i - mp.get(sum - k)) {
        maxLen = i - mp.get(sum - k);
      }
    }
  }
  return maxLen;
};
arr = [10, 5, 2, 7, 1, 9];
k = 15;
console.log(lenOfLongSubarrOptimized(arr, k));
