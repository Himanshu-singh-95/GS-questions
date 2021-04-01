// Given a string str and a character x, find last index of x in str.
// Traverse from right

const findLastIndex = (str, x) => {
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === x) return i;
  }
  return -1;
};

const str = "geeksforgeeks";
const x = "e";
const index = findLastIndex(str, x);
if (index == -1) console.log("Character not found");
else console.log("Last index is " + index);
