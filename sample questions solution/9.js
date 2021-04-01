// Program to find Sum of fractions
// 08_AddFraction

const arr = [
  [12, 56],
  [3, 45],
  [23, 2],
  [2, 6],
  [2, 8],
];
const gcd = (a, b) => {
  if (a == 0 || b == 0) return 0; //as a and b are 0, the greatest divisior is also 0
  if (a == b) return b; //when both numbers are same

  let num = 2;
  let res = 1;
  while (num <= Math.min(a, b)) {
    if (a % num === 0 && b % num === 0) {
      res = num;
    }
    num++;
  }
  return res;
};

const sumFrac = (a, b) => {
  const aDenom = a[1];
  aNumer = a[0];
  const bDenom = b[1];
  bNumer = b[0];
  let resDenom = aDenom * bDenom;
  let resNumer = aDenom * bNumer + bDenom * aNumer;
  const greatestDivisor = gcd(resDenom, resNumer);
  return [resNumer / greatestDivisor, resDenom / greatestDivisor];
};
const sumArrayOfFractions = (arr) => {
  return arr.reduce((acc, val) => sumFrac(acc, val));
};

console.log("sumArrayOfFractions", sumArrayOfFractions(arr));
