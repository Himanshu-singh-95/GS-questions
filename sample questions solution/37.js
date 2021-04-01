// Find the first repeated word in a string.

const firstRepeatedWord = (string) => {
  const arr = string.split(" ");
  let storage = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (storage[element]) return element;

    storage[element] = true;
  }
};

const input = "Ravi had been saying that he had been there";
// Output : had

console.log("firstRepeatedWord", firstRepeatedWord(input));
