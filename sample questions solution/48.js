/**
 * Given n size unsorted array, find its mean and median.
 */

function findMean(arr) {
  arr = arr.sort((a, b) => a - b);
  let n = arr.length;
  const mean = arr.reduce((preVal, currVal) => currVal + preVal) / n;
  let median = 0;
  if (n % 2 != 0) {
    median = arr[Math.floor(n / 2)];
  } else {
    median = (arr[Math.floor((n - 1) / 2)] + arr[Math.floor(n / 2)]) / 2;
  }

  return `Mean: ${mean} \n Median: ${median}`;
}

const arr = [1, 3, 4, 2, 6, 5, 8, 7];
console.log("findMean \n", findMean(arr));
