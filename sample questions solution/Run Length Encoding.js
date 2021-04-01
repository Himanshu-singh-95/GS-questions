/*
 * Implement a run length encoding function.
 * For a string input the function returns output encoded as follows:
 *
 * "a"     -> "a1"
 * "aa"    -> "a2"
 * "aabbb" -> "a2b3"
 */

const rle = (str) => {
  if (str.length == 0) {
    return "";
  }
  let pre = str[0];
  let count = 0;
  let resStr = "";
  for (const char of [...str]) {
    if (char === pre) {
      count++;
    } else {
      resStr += pre + count;
      pre = char;
      count = 1;
    }
  }
  resStr += pre + count;

  return resStr;
};

console.log(rle("aabbbccbbbdd"));
