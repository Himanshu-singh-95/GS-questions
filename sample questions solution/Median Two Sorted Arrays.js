// find the median of the two sorted arrays.
// ex. {1, 3} and {2} is 2

function mergeLists(firstList, secondList) {
  let newList = [];

  // logic to add if two unsorted different sized arrays
  firstList = firstList.sort((a, b) => a - b);
  secondList = secondList.sort((a, b) => a - b);

  while (firstList.length != 0 && secondList.length != 0) {
    newList.push(
      firstList[0] < secondList[0] ? firstList.shift() : secondList.shift()
    );
  }
  return newList.concat(firstList).concat(secondList);
}

const findMedian = (firstList, secondList) => {
  const arr = mergeLists(firstList, secondList);
  const n = arr.length;
  if (n % 2 != 0) {
    median = arr[Math.floor(n / 2)];
  } else {
    median = (arr[Math.floor((n - 1) / 2)] + arr[Math.floor(n / 2)]) / 2;
  }

  return median;
};

console.log(findMedian([1, 3], [2]));
