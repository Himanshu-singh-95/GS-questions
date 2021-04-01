// First unique character of a string. E.g. aabdcce . Output : b

function firstNoneRepeating(str) {
  const res = str.split("").reduce((preVal, currVal) => {
    preVal[currVal] = (preVal[currVal] || 0) + 1;
    return preVal;
  }, {});

  for (const [key, value] of Object.entries(res)) {
    if (value === 1) {
      return key;
    }
  }
}
console.log(firstNoneRepeating("aabdcce"));
