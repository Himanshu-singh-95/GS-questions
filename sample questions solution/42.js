/**
 * Given a sentence, task is to remove spaces from the sentence and rewrite in Camel case.
 * It is a style of writing where we don’t have spaces and all words begin with capital
 */

// Efficient solution : We traverse given string,
// while traversing we copy non space character to result
// and whenever we encounter space, we ignore it and change next letter to capital.

const convertToCamel = (str) => {
  let tempArr = str.split(" ");
  const ch_arr = [];
  for (let i = 0; i < tempArr.length; i++)
    ch_arr.push(tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1));

  console.log(ch_arr.join(""));
};

var str = "I get intern at geeksforgeeks";

convertToCamel(str);
// OutPut : IGetInternAtGeeksforgeeks

/**
 * Diff between slice and substring
 * Both give same results in the given cases.

If start == stop, both returns an empty string
If stop is omitted, both extracts characters till the end of the string
If any argument is greater than the string’s length, the string’s length will be used in that case.

substring()
Separate results of substring()

If start > stop, then function swaps both arguments.
If any argument is negative or is NaN, it is treated as 0.

slice()
Separate results of slice()

If start > stop, This function will return an empty string. (“”)
If start is negative, It sets char from the end of string, like substr().
If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)
 */
