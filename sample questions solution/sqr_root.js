// Function to find the square root of n
function square(n, low, high) {
  mid = (low + high )/ 2;
  mid_sqr = mid * mid;
  // If mid_sqr itself is the square root,
  // return mid
  if (mid_sqr === n || Math.abs(mid_sqr - n) < 0.00001) {
    return mid.toFixed(5);
  } else if (mid_sqr > n) {
    // If mid_sqr is greater than n,
    // recur first half
    return square(n, low, mid);
  } else {
    // If mid_sqr is less than n,
    // recur second half
    return square(n, mid, high);
  }
}

const findSqrt = (n) => {
  if (n === 0) {
    return undefined;
  }

  if (n === 1) {
    return 1;
  }

  let i = 1;
  found = false;

  while (!found) {
    if (i * i === n) {
      return i;
    } else if (i * i > n) {
      const res = square(n, i - 1, i);
      found = true;
      return res;
    }
    i++;
  }
};

const n = 3;

console.log(findSqrt(n));
