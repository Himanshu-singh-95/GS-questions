// Largest substring with unique characters e.g. aaabcbdeaf Output : cbdeaf
// Time Complexity O(N)
const findLongestSubstring = (str) => {
  let storage = new Map();
  // Last occurrence of first
  // character is index 0;
  storage.set(str[0], 0);
  let i = 0;
  // Starting point
  // of current substring.
  let st = 0;
  // starting index of
  // maximum length substring.
  let start = 0;
  // length of
  // current substring.
  let curr_len = 0;
  // maximum length
  // substring without
  // repeating characters.
  let max_len = 0;
  const n = str.length;
  for (i = 1; i < n; i++) {
    // If this character is not present in map,
    // then this is first occurrence of this
    // character, store this in map.
    if (!storage.has(str[i])) {
      storage.set(str[i], i);
    } else {
      if (storage.get(str[i]) >= st) {
        curr_len = i - st;
        if (curr_len > max_len) {
          max_len = curr_len;
          start = st;
        }
        st = storage.get(str[i]) + 1;
      }
      // Update last occurrence of
      // current character.
      storage.set(str[i], i);
    }
  }

  // Compare length of last
  // substring with maxlen and
  // update maxlen and start
  // accordingly.
  if (max_len < i - st) {
    max_len = i - st;
    start = st;
  }
  return str.substr(start, max_len);
};

const str = "GEEKSFORGEEKS";
console.log(findLongestSubstring(str));


// Time Complexity O(N^2)
const longestUniqueSubStr = (str) => {
  const arr = [...str];
  let mp = new Map();
  let maxLen = 0;
  let subStringIndex = 0;

  for (let i = 0; i < arr.length; ) {
    const startIndex = i;
    let currLen = 0;
    while (i < arr.length && !mp.has(arr[i])) {
      mp.set(arr[i], i);
      i++;
      currLen++;
    }

    if (currLen > maxLen) {
      maxLen = currLen;
      subStringIndex = startIndex;
    }

    if (i < arr.length) {
      i = mp.get(arr[i]) + 1;
    }
    mp.clear();
  }

  return str.substring(subStringIndex, subStringIndex + maxLen);
};

console.log(longestUniqueSubStr("GEEKSFORGEEKS"));
