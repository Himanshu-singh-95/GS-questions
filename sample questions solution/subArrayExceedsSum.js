/**
 *
 * Given an array of integers and a number x,
 * find the smallest subarray with sum greater than the given value.
 */
// Find the smallest subarray whose sum is equal or greater than thetarget value

const subArrayExceedsSum = (arr, target) => {
  const n = arr.length;
  let start = 0;
  let end = len - 1;
  let max_len = n;
  
  for (let i = 0; i < n; i++) {
    let curr_sum = 0;
    let curr_len = 0;
    for (let j = i; j < n; j++) {
      curr_sum += arr[j];
      curr_len = j - i + 1;
      if (curr_sum > target && curr_len < max_len) {
        start = i;
        end = j;
        max_len = curr_len;
      }
    }
  }
  return {
    start,
    end,
    max_len,
  };
};

console.log("subArrayExceedsSum", subArrayExceedsSum([1, 4, 45, 6, 0, 19], 51));

// optimizedApproach
const optimizedApproach = (array, x) => {
  // Initialize current sum and minimum length
  curr_sum = 0;
  n = array.length;
  min_len = n + 1;

  // Initialize starting and ending indexes
  start = 0;
  end = 0;

  while (end < n) {
    // Keep adding array elements while current sum is smaller than x
    while (curr_sum <= x && end < n) {
      curr_sum += array[end++];
    }

    // If current sum becomes greater than x.
    while (curr_sum > x && start < n) {
      // Update minimum length if needed
      if (end - start < min_len) {
        min_len = end - start;
      }

      // remove starting elements
      curr_sum -= array[start++];
    }
  }
  return min_len;
};

console.log("subArrayExceedsSum", optimizedApproach([1, 4, 45, 6, 0, 19], 51));
