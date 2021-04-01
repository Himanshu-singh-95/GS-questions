/**
 * "Program to check Strength of Password. 
 * A password is said to be strong if it satisfies the following criteria: 
 * It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters
are: !@#$%^&*(
Its length is at least 8.
It contains at least one digit.
Given a string, find its strength. Let a strong password is
one that satisfies all above conditions. A moderate password is one
that satisfies first three conditions and has length at
least 6. Otherwise password is week.

*/

function isLowerCase(c) {
  return c == c.toLowerCase() && c != c.toUpperCase();
}

function isUpperCase(c) {
  return c == c.toUpperCase() && c != c.toLowerCase();
}

function isDigit(c) {
  return c >= "0" && c <= "9";
}

const printStrongPass = (input) => {
  // Checking lower alphabet in string
  const n = input.length;
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let specialChar = false;
  const set = new Set([
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ]);

  for (let char of [...input]) {
    if (isLowerCase(char)) hasLower = true;
    if (isUpperCase(char)) hasUpper = true;
    if (isDigit(char)) hasDigit = true;
    if (set.has(char)) specialChar = true;
  }

  if (hasDigit && hasLower && hasUpper && specialChar && n >= 8)
    console.log(" Strong");
  else if ((hasLower || hasUpper || specialChar) && n >= 6)
    console.log(" Moderate");
  else console.log(" Weak");
};

// const input = "gfg!@12";
// Output : Moderate
const input = "SapientGlobalMarkets!@12";
// Output : Strong"
printStrongPass(input);
