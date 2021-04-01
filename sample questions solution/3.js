// 2nd smallest element of a sorted rotated array. E.g. 5,6,1,2,3,4
// 03_Smallest Number

// modified binary search implementation
// Time complexity of O(log n)
function smallest(arr, start, end) {
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element at mid is smallest then element on the left should be greater, return mid
    if (arr[mid] < arr[mid - 1]) return arr[mid];
    // If element at mid is largest then element on the right should be smaller, return mid + 1
    else if (arr[mid + 1] < arr[mid]) return arr[mid + 1];
    // if mid does not satisfies above condition and element in the end is bigger than the current mid
    // then the minimum has to be in the left side of the mid
    else if (arr[end] > arr[mid]) end = mid - 1;
    // if mid does not satisfies above condition and element in the end is smaller than the current mid
    // then the minimum has to be in the right side of the mid
    else start = mid + 1;
  }
}

function findMin(arr, start, end) {
  // logic for minimum value
  const small = smallest(arr, start, end);
  // logic for 2nd / nth minimum
  let secodnMinimum = arr.indexOf(small) + 1;
  if (secodnMinimum >= arr.length) {
    secodnMinimum = secodnMinimum - arr.length; // Since array is rotated
  }
  return arr[secodnMinimum] > small ? arr[secodnMinimum] : undefined;
}

const input = [4, 5, 6, 1, 2, 3];

console.log(findMin(input, 0, input.length - 1));
Output: 2;
