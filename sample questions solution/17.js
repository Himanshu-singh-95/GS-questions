// Given Input,print the following input: “SSSSSTTPPQ” Output:“5S2T2P1Q”.

const betterCompression = (str) => {
  let result = "";
  const res = str.split("").reduce((preVal, currVal) => {
    preVal[currVal] = (preVal[currVal] || 0) + 1;
    return preVal;
  }, {});

  for (const [key, value] of Object.entries(res)) {
    result += value + key;
  }
  return result;
};

const input = "SSSSSTTPPQ";
console.log('betterCompression', betterCompression(input));
// Output: 5S2T2P1Q
