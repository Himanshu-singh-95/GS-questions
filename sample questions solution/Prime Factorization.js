/**
 * Return an array containing prime numbers whose product is x
 * Examples:
 * primeFactorization( 6 ) == [2,3]
 * primeFactorization( 5 ) == [5]
 */

function* primeFactorizationGen(x) {
  const arr = [];
  if (x < 2) {
    yield arr;
    return;
  }
  if (x == 2) {
    arr.push(2);
    yield arr;
    return;
  }

  let divisor = 2;
  while (x >= 2) {
    if (x % divisor == 0) {
      yield divisor;
      x = x / divisor;
    } else {
      divisor++;
    }
  }
}

for (const val of primeFactorizationGen(10)) {
    console.log(val);
  }
