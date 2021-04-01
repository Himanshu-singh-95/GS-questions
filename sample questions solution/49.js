// Find Second largest element in an array

const second_largest = (arr) => {
  const n = arr.length;
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;

  if (n < 2) {
    return "Not possible";
  }

  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    }
    if (num > second && num != first) {
      second = num;
    }
  }
  if (second == Number.MIN_SAFE_INTEGER)
    console.log("There is no second smallest element");
  else
    console.log(
      `The largest element is ${first} and second largest element is ${second}`
    );
};

const arr = [12, 13, 1, 10, 34, 1, -2];
second_largest(arr);
