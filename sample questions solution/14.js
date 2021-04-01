// Find out the number of pair from given integer array whose sum isequal to a given number.
// Storage object approach

const countPairs = function (arr, target) {
  let mp = new Map();
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    const rem = target - arr[i];

    if (mp.has(rem)) {
      resArr.push("(" + rem + ", " + arr[i] + ")");
    } else {
      mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
    }
  }
  return resArr.join("\n");
};

const A = [1, 4, 12, 6, 10, -8];
const n = 16;

console.log(countPairs(A, n));
