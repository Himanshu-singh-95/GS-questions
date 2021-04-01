/* Problem Name is &&& Snowpack &&& PLEASE DO NOT REMOVE THIS LINE. */

/*
 ** Instructions to candidate.
 **  1) Given an array of non-negative integers representing the elevations
 **     from the vertical cross section of a range of hills, determine how
 **     many units of snow could be captured between the hills.
 **
 **     See the example array and elevation map below.
 **                                 ___
 **             ___                |   |        ___
 **            |   |        ___    |   |___    |   |
 **         ___|   |    ___|   |   |   |   |   |   |
 **     ___|___|___|___|___|___|___|___|___|___|___|___
 **     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
 **                                 ___
 **             ___                |   |        ___
 **            |   | *   *  _*_  * |   |_*_  * |   |
 **         ___|   | *  _*_|   | * |   |   | * |   |
 **     ___|___|___|_*_|___|___|_*_|___|___|_*_|___|___
 **     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
 **
 **     Solution: In this example 13 units of snow (*) could be captured.
 **
 **  2) Consider adding some additional tests in doTestsPass().
 **  3) Implement computeSnowpack() correctly.
 */
const computeSnowpack = (arr) => {
  // To store the maximum snow
  // that can be stored
  let total_snow = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    const left_highest = Math.max(...arr.slice(0, i + 1));
    const right_highest = Math.max(...arr.slice(i));
    total_snow += Math.min(left_highest, right_highest) - arr[i];
  }

  return total_snow;
};

console.log(
  "computeSnowpack",
  computeSnowpack([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);
