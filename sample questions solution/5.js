/**
 *
 * Minimum distance between 2 words counting the number of characters from middle of both words.
 * // 25_Distance between two word
 */

const distance = (s, w1, w2) => {
  if (w1 === w2) {
    return 0;
  }
  // get individual words in a list
  const words = s.split(" ");
  const n = words.length;
  let min_dist = n + 1;
  let prev = 0;
  let i = 0;
  for (; i < n; i++) {
    if (words[i] === w1 || words[i] === w2) {
      prev = i;
      break;
    }
  }

  while (i < n) {
    if (words[i] === w1 || words[i] === w2) {
      if (words[i] !== words[prev] && i - prev < min_dist) {
        min_dist = i - prev - 1;
        prev = i;
      } else {
        prev = i;
      }
    }
    i++;
  }

  return min_dist;
};

const s = "geeks for geeks contribute practice";
const w1 = "geeks";
const w2 = "practice";
console.log(distance(s, w1, w2));
