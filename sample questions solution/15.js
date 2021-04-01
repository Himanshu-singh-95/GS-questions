// Missing characters to make a string Pangram
// 02_Panagram

const checkPangram = (s) => {
  s = s.toLowerCase().split(" ").join("");
  let resAr = [];
  var exists = {};
  for (let i = 0; i < s.length; ++i) {
    exists[s[i]] = true;
  }

  // loop over all lowercase characters
  for (let j = 97; j <= 122; ++j) {
    c = String.fromCharCode(j);
    if (!exists[c]) {
      resAr.push(c);
    }
  }

  return resAr.length ? resAr.join(",") : undefined;
};

var s = "The quick brown fox jumps over the dog"; // the input string
console.log("characters missing", checkPangram(s));
