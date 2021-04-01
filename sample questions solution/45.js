/**
 * Given an array A[] of integers find sum of product of all pairs of array elements
 * Input : A[] = {1, 3, 4}
 * Output : 19
 * Possible Pairs : (1,3), (1,4), (3,4)
 * Sum of Product : 1*3 + 1*4 + 3*4 = 19"
 * Let say (a*b + b*c + c*a) = P (reuired Product)
 * Formula used here is (a + b + c)^2 =  a^2 + b^2 + c^2 + 2*(a*b + b*c + c*a)
 * (a + b + c)^2 -  (a^2 + b^2 + c^2) = 2*P
 * ((a + b + c)^2 -  (a^2 + b^2 + c^2)) / 2 = P
 */

// time Complexity : O(n)
const findProductSum = (arr) => {
  const array_sum_sqr = arr.reduce((preVal, currVal) => currVal + preVal) ** 2;
  const individual_sqr_sum = arr.reduce(
    (preVal, currVal) => preVal + currVal ** 2
  );

  const pair_product_sum = (array_sum_sqr - individual_sqr_sum) / 2;

  return pair_product_sum;
};

const arr = [1, 3, 4];
console.log("findProductSum", findProductSum(arr));
