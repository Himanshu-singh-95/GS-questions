// Given an array of Employees with name,marks. Find out the maximum average marks from the list.
// {"Alia","-678"},
// {"Bobby","100"},
// {"Alex","223"},
// {"Alex","-23"},
// {"Bobby","723"}
// Avg Bobby = 411.5,Alex= 100,Alia=-678. Result: 411.5
// 24_Best Average Grade

const input = [
  ["Alia", "-678"],
  ["Bobby", "100"],
  ["Alex", "223"],
  ["Alex", "-23"],
  ["Bobby", "723"],
];

const bestAvgGrade = (marksList) => {
  let mp = new Map();
  marksList.reduce((preVal, currVal) => {
    preVal[currVal[0]] = preVal[currVal[0]]
      ? (preVal[currVal[0]] + parseInt(currVal[1])) / 2
      : parseInt(currVal[1]);
    return preVal;
  }, mp);

  let maxAvg = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of Object.entries(mp)) {
    if (value > maxAvg) maxAvg = value;
  }
  return maxAvg;
};

console.log("bestAvgGrade", bestAvgGrade(input));
