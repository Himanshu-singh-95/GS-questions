/*
 **  Below formation is called Pascals Triangle.
 **
 **  Example:
 **               1
 **              1 1
 **             1 2 1
 **            1 3 3 1
 **           1 4 6 4 1
 **         1 5 10 10 5 1
 **        1 6 15 20 15 6 1
 **
 **  Complete the 'pascal' function below so that given a
 **  col and a row it will return the value in that positon.
 **
 **  Example, pascal(1,2) should return 2
 **
 */

/*
 *					******** IMPORTANT ********
 *
 * THIS IS SAMPLE SOLUTION. IF YOU FIND BETTER SOLUTION PLEASE CONSIDER USING SAME.
 * USE YOUR OWN VARIABLE NAMES - @@@ DO NOT COPY @@@ EXACT VARIABLE NAMES
 *
 */
// Return element from a Pascal Traingle - Given 5,2 as input return 2nd element from 5th row

let mp = new Map();
const pascal = (row, col) => {
  if (col > row) {
    return;
  }
  let p = [];
  p.push(row, col);

  if (mp.get(p)) {
    return mp.get(p);
  }

  if (col == 1 || col == row) {
    mp.set(p, 1);
  } else {
    mp.set(p, pascal(row - 1, col) + pascal(row - 1, col - 1));
  }

  return mp.get(p);
};

console.log(pascal(5, 2));
