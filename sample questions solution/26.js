// Given a program to reverse a string which is incorrect
// 14_Reverse String
// 15_Reverse String Bug Fix
// reverse string usng recursion

const reverseStringRecursivley = (str) => {
  return str ? reverseStringRecursivley(str.substr(1)) + str[0] : str;
};

const str = "geeks for geeks";
console.log("reverseStringRecursivley", reverseStringRecursivley(str));

// You need to split the text into separate words, and then reverse each word individually.
function wordsReverser(string) {
  let words = string.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(reverseStringRecursivley(words[i]));
  }
  return result.join(" ");
}

console.log(wordsReverser("New string, same results."));
