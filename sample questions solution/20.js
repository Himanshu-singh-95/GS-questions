// Write a method for ATOI functionality (ASCII to Integer conversion
// 23_atoi

const myParseInt = (s) => {
  let MAX_INT = Math.pow(2, 31) - 1;
  let MIN_INT = -1 * Math.pow(2, 31);
  let result = 0;
  let i = 0;
  while (s[i] === " ") {
    i++;
  }

  let sign = 1;
  if (s[i] === "-" || s[i] === "+") {
    sign = 1 - 2 * (s[i++] === "-" ? 1 : 0);
  }

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - 0);
    i++;
    if (result * sign > MAX_INT) {
      return MAX_INT;
    }

    if (result * sign < MIN_INT) {
      return MIN_INT;
    }
  }

  return result * sign;
};

console.log("myParseInt", myParseInt("42"));
console.log("myParseInt", myParseInt("   -42"));
console.log("myParseInt", myParseInt("4193 with words"));
console.log("myParseInt", myParseInt("words and 987"));
console.log("myParseInt", myParseInt("-91283472332"));
console.log("myParseInt", myParseInt("21474836460"));
