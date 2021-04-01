// Find if a given number is Armstrong number -
// An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal to the number itself.
// For example, 371 is an Armstrong number since 3*3*3 + 7*7*7 + 1*1*1 = 371.

// program to check an Armstrong number of n digits

const n_digit_armstrong_number = (number) => {
  const numberOfDigits = number.toString().length;
  let sum = 0;

  // create a temporary variable
  let temp = number;

  while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }

  if (sum == number) {
    return `${number} is an Armstrong number`;
  } else {
    return `${number} is not an Armstrong number.`;
  }
};

console.log("n_digit_armstrong_number", n_digit_armstrong_number(371));
