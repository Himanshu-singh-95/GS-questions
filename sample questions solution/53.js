/**
 * "Given a list L of video names and their watch rates, 
 * write a function that will return the videos with the top 10 watch rates.
Video names may appear more than once.Example:
L = [('abc', 10), ('def', 15), ('ghi', 10), ('abc', 12), …, ('xyz',100)]
The function should return ['xyz', 'abc', …, 'def', 'ghi']"

 */

const top_watch_rates = (arr) => {
  const rates_storage = arr.reduce((preVal, currVal) => {
    preVal[currVal[0]] = (preVal[currVal[0]] || 0) + parseInt(currVal[1]);
    return preVal;
  }, {});

  tempArr = Object.entries(rates_storage);
  n = tempArr.length;

  // Time Complexity: O(nk)
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (tempArr[j][1] < tempArr[j + 1][1]) {
        [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
      }
    }
  }
  return tempArr.slice(0, 10);
};

const arr = [
  ["abc", 10],
  ["def", 15],
  ["ghi", 10],
  ["abc", 12],
  ["xyz", 100],
  ["abc", 12],
  ["xyz", 100],
  ["sds", 12],
  ["xyz", 100],
  ["fd", 12],
  ["fdfd", 100],
  ["abfdfdfc", 12],
  ["dsds", 100],
  ["ddsd", 12],
  ["sdsd", 100],
  ["sds", 12],
  ["ffdf", 100],
  ["dsd", 12],
  ["dsds", 100],
  ["absdsc", 12],
  ["dsd", 100],
  ["sd", 12],
  ["dsds", 100],
];

console.log(top_watch_rates(arr));
