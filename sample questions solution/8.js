var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const spiralTraversal = (matrix) => {
  const results = [];
  let n = matrix.length;
  if (n == 0) {
    return results;
  }

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results.push(matrix[startRow][i]);
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results.push(matrix[i][endColumn]);
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results.push(matrix[endRow][i]);
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results.push(matrix[i][startColumn]);
    }
    startColumn++;
  }
  return results;
};

var spiralTraversalRec = function (matriks) {
  var result = [];
  var goAround = function (matrix) {
    if (matrix.length == 0) {
      return;
    }

    // right
    result = result.concat(matrix.shift());

    // down
    for (var j = 1; j < matrix.length - 1; j++) {
      result.push(matrix[j].pop());
    }

    // bottom
    result = result.concat(matrix.pop().reverse());

    // up
    for (var k = matrix.length - 2; k > 0; k--) {
      result.push(matrix[k].shift());
    }

    return goAround(matrix);
  };

  goAround(matriks);

  return result;
};

var result = spiralTraversal(input);

var resultRec = spiralTraversalRec(input);

console.log("result", result);
console.log("resultRec", resultRec);
