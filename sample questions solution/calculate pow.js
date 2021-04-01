/**
 * Given two integers x and n, write a function to compute xn.
 *  We may assume that x and n are small and overflow doesn’t happen.
 * 00_Power
 */
const power = (x, y) => {
  let temp = 0;
  if (y == 0) return 1;
  temp = power(x, Math.floor(y / 2));
  if (y % 2 == 0) return temp * temp;
  else return x * temp * temp;
};

console.log(power(7, 2));
