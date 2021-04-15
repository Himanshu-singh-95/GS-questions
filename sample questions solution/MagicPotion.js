/*
Question: 
Combine ingredients in a specific order, any of which may be repeated

As an example, consider the following  
(A,B,C,D) in 11 steps: A, B, A, B, C, A, B, A, B, C, D

Encode the string above using only 6 characters: A,B,*,C,*,D

Implement function that takes as input an un-encoded potion and returns the 
minimum number of characters required to encode

*/

const magicPotion = (str) => {
  const n = str.length;
  if (n == 0) {
    return 0;
  }
  const arr = [...str];
  magicPotionArr = [arr[0]];
  for (let i = 1; i < n; i++) {
    if (i * 2 <= n) {
      if (str.substring(0, i) == str.substring(i, 2 * i)) {
        magicPotionArr.push("*");
        i = 2 * i - 1; // -1 here as there is already a ++i in for loop
      } else {
        magicPotionArr.push(arr[i]);
      }
    } else {
      magicPotionArr.push(arr[i]);
    }
  }

  return `Magic Potion String: ${magicPotionArr.join()} "\n" Length: ${
    magicPotionArr.length
  }`;
};

console.log(magicPotion("ABABCABABCE"));
