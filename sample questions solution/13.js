/**
 * Arrange given numbers to form the biggest number.
 * Input- List of numbers : {1, 34, 3, 98, 9, 76, 45, 4} Output – 998764543431
 */

const printLargest = (arr) => {
  arr = arr.sort((a, b) => {
    const AB = "" + a + b;
    const BA = "" + b + a;
    if (parseInt(AB) > parseInt(BA)) {
      return -1;
    }
    if (parseInt(AB) < parseInt(BA)) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return arr.join("");
};

const arr = [1, 34, 3, 98, 9, 76, 45, 4];
console.log("the biggest number:", printLargest(arr));
