/**
 * Return the fraction output in the following way Examples: If after decimal,
 * repeating numbers are there in the output . eg. 1/3=0.333333333, this should
 * be represented as 0.(3) 6/11=0.54545454, this should be represented as 0.(54)
 * fractionRepresentation(1,2)=0.5 fractionRepresentation(1,3)=0.(3)
 * fractionRepresentation(6,11)=0.(54)
 */
const fractionToDecimal = (num, den) => {
  if (den == 0) {
    return undefined;
  }

  if (num == 0) {
    return 0;
  }

  let result = "";

  if ((num < 0 && den > 0) || (num > 0 && den < 0)) {
    result += "-";
  }

  let quotient = Math.floor(num / den);
  result += quotient;

  let remainder = (num % den) * 10;
  if (remainder == 0) {
    return result;
  }
  result += ".";
  let mp = new Map();
  while (remainder !== 0) {
    if (mp.has(remainder)) {
      const separator = mp.get(remainder);
      const part1 = result.substring(0, separator);
      const part2 = result.substring(separator, result.length);
      return `${part1}(${part2})`;
    } else {
      mp.set(remainder, result.length);

      quotient = Math.floor(remainder / den);
      result += quotient;
      remainder = (remainder % den) * 10;
    }
  }
};

console.log(fractionToDecimal(6, 11));
