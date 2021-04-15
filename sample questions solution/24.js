// Given an m*n matrix, print the matrix in reverse spiral form using recursion.

var spiralTraversalRec = (matrix, result = []) => {
  // logic for reversing an array elements
  if (matrix.length == 0) {
    let i = 0;
    while (i < result.length) {
      result.splice(i, 0, result.pop());
      i++;
    }
    return result;
  }
  // for top row
  result.push(...matrix.shift());

  // for last column
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].pop());
  }

  // for bottom row
  result.push(...matrix.pop().reverse());

  // for first column
  for (let i = matrix.length - 1; i >= 0; i--) {
    result.push(matrix[i].shift());
  }

  return spiralTraversalRec(matrix, result);
};

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var resultRec = spiralTraversalRec(matrix);
console.log("resultRec", resultRec);
