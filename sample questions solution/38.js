// Program to find Smallest and Largest Word in a String.

const max_min_word = (string) => {
  const array = string.split(" ");
  const storage = array.reduce((preVal, currVal) => {
    const len = currVal.length;
    preVal[len] = preVal[len] || currVal;
    return preVal;
  }, {});

  const min_word = Math.min(
    ...Object.keys(storage).map((item) => parseInt(item))
  );
  const max_word = Math.max(
    ...Object.keys(storage).map((item) => parseInt(item))
  );

  console.log(" Minimum length word is", storage[min_word]);
  console.log(" Maximum length word is", storage[max_word]);
};
const input = "This is a test string";
max_min_word(input);
// Output : Minimum length word: is Maximum length word: string
