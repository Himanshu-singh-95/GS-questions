// Given a a string of letters and a dictionary, the function longestWord should
// find the longest word or words in the dictionary that can be made from the letters

const longestWord = (dict, input) => {
  let length = 0;
  let res = [];

  for (const word of dict) {
    if (word.length >= length && isPresentInDict(word, input)) {
      length = word.length;
      res.push({ word, length });
    }
  }
  return res.filter((item) => item.length == length);
};

function isPresentInDict(word, input) {
  const n = word.length;
  const inputArr = input.split("");
  let i = 0;
  while (inputArr.length && i < n) {
    const index = inputArr.indexOf(word[i]);

    if (index > -1) {
      inputArr.splice(index, 1);
    } else {
      return false;
    }
    i++;
  }

  return i == n;
}

const dict = ["to", "toe", "toes", "banana", "dogs", "gods"];

const input = "oetsdg";
const input2 = "banananssss";
const input3 = "";

console.log("longestWord", longestWord(dict, input));
console.log("longestWord2", longestWord(dict, input2));
console.log("longestWord3", longestWord(dict, input3));
