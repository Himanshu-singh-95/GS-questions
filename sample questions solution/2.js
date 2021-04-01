// 2nd smallest element of an unsorted array.
// 04_Second Smallest
const second_smallest = (arr) => {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;
  if (n < 2) {
    return "Not possible";
  }
  for (const num of arr) {
    if (first > num) {
      second = first;
      first = num;
    }

    if (second > num && num !== first) {
      second = num;
    }
  }
  if (second == Number.MAX_SAFE_INTEGER)
    console.log("There is no second smallest element");
  else
    console.log(
      `The smallest element is ${first} and second smallest element is ${second}`
    );
};

const arr = [12, 13, 1, 10, 34, 1, -2];
second_smallest(arr);
