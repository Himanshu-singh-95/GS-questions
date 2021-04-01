/**
 * Returns true if x is a power-of-10.
 */

const isPowerOfTen = (x) => {
  if (x % 10 != 0 || x == 0) {
    return false;
  }

  if (x == 10) {
    return true;
  }

  return isPowerOfTen(x / 10);
};

console.log('isPowerOfTen', isPowerOfTen(1110));