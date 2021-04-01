// Write a method for ATOI functionality (ASCII to Integer conversion
// 23_atoi

const myParseInt = (str) => {
  let sign = 1;
  let base = 0;
  let i = 0;

  // if whitespaces then ignore.
  while (str[i] == " ") {
    i++;
  }

  // sign of number
  if (str[i] == "-" || str[i] == "+") {
    sign = 1 - 2 * (str[i++] == "-" ? 1 : 0);
  }

  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    base = base * 10 + (str[i++] - "0");
  }

  return base ? base * sign : "invalid input";
};

console.log("myParseInt", myParseInt("    -134"));
