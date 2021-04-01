/**
 * Finds the first character that does not repeat anywhere in the input string
 * Given "apple", the answer is "a"
 * Given "racecars", the answer is "e"
 **/
const findFirst = (str) => {
  const map = new Map();
  const storage = [...str].reduce((preval, currVal) => {
    preval[currVal] = preval[currVal] ? false : true;
    return preval;
  }, map);

  // return storage
  // Destructure the key and value out of the Map item
  for (const [key, value] of Object.entries(storage)) {
    if (value) return key;
  }
};

console.log(findFirst("apple"));
console.log(findFirst("racecars"));
