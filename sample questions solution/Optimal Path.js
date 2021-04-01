/* Problem Name is &&& Optimal Path &&& PLEASE DO NOT REMOVE THIS LINE. */

/*
 ** Instructions to candidate.
 **  1) You are an avid rock collector who lives in southern California. Some rare
 **     and desirable rocks just became available in New York, so you are planning
 **     a cross-country road trip. There are several other rare rocks that you could
 **     pick up along the way.
 **
 **     You have been given a grid filled with numbers, representing the number of
 **     rare rocks available in various cities across the country.  Your objective
 **     is to find the optimal path from So_Cal to New_York that would allow you to
 **     accumulate the most rocks along the way.
 **
 **     Note: You can only travel either north (up) or east (right).
 **  2) Consider adding some additional tests in doTestsPass().
 **  3) Implement optimalPath() correctly.
 **  4) Here is an example:
 **                                                           ^
 **                 {{0,0,0,0,5}, New_York (finish)           N
 **                  {0,1,1,1,0},                         < W   E >
 **   So_Cal (start) {2,0,0,0,0}}                             S
 **                                                           v
 **   The total for this example would be 10 (2+0+1+1+1+0+5).
 */
const optimalPath = (grid) => {
  result = 0;
  if (grid.length > 0) {
    result = optimalPathIterUtil(grid);
  }
  return result;
};

function optimalPathIterUtil(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const sum_grid = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  const path_matrix = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  sum_grid[m - 1][0] = grid[m - 1][0];
  path_matrix[m - 1][0] = grid[m - 1][0];

  // travel towards east (right) and fill all the columns with sum of previous cell and current cell
  for (let i = 1; i < n; i++) {
    sum_grid[m - 1][i] = sum_grid[m - 1][i - 1] + grid[m - 1][i];
    path_matrix[m - 1][i] = [].concat(
      `${path_matrix[m - 1][i - 1]} -> ${grid[m - 1][i]}`
    );
  }

  // travel towards north (up) and fill all the rows with sum of previous cell and current cell
  for (let j = m - 2; j >= 0; j--) {
    sum_grid[j][0] = sum_grid[j + 1][0] + grid[j][0];
    path_matrix[j][0] = [].concat(`${path_matrix[j + 1][0]} -> ${grid[j][0]}`);
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      sum_grid[i][j] =
        Math.max(sum_grid[i][j - 1], sum_grid[i + 1][j]) + grid[i][j];

      path_matrix[i][j] = [].concat(
        path_matrix[i][j - 1].map((item) => `${item} -> ${grid[i][j]}`),
        path_matrix[i + 1][j].map((item) => `${item} -> ${grid[i][j]}`)
      );
    }
  }

  let output = "";
  path_matrix[0][grid[0].length - 1].forEach((element) => {
    output += element + "\n";
  });
  return `All possible Path: ${path_matrix[0][grid[0].length - 1].length} \n${output} \nCost : ${
    sum_grid[0][grid[0].length - 1]
  }`;
}

const grid = [
  [0, 6, 0, 0, 5],
  [0, 1, 1, 1, 0],
  [2, 0, 0, 0, 0],
];
console.log(optimalPath(grid));
