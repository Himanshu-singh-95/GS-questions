// Count Fibonacci numbers in given range in O(Log n) time and O(1)

const countFibs = (low, high) => {
  let f1 = 0;
  let f2 = 1;
  let f3 = 1;
  let result = 0;

  while (f1 <= high) {
    if (f1 >= low) {
      result++;
    }

    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
  }

  return result;
};

console.log("countFibs", countFibs(10, 100));
