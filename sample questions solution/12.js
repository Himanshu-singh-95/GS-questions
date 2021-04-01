/**
 * Given a String “aabbbbddcc” find the longest first repeating index and its length.
 * 01_Longest Uniform String
 * (Input: “aabbbbddcc” Output: [2,4] 2 is the index and 4 is the length
 */
const longest_repeating = (str) => {
  let max_len = 0;
  let repeating_char_index = -1;
  const n = str.length;
  for (let i = 0; i < n; ) {
    const char = str[i];
    const start = i;
    let end = start;
    while (end < n && str[end] === char) {
      end++;
    }
    if (end - start > max_len) {
      repeating_char_index = i;
      max_len = end - start;
    }
    i = end;
  }

  console.log(
    "repeating_char_index",
    repeating_char_index,
    "\n max_len:",
    max_len
  );
};

longest_repeating("aabbbbdddddddccbb");
