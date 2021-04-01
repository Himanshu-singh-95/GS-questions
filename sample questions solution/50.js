// Write a program that prints a staircase of size .

/**
 * The first row has n-1 spaces before the #,
 * the second row has n-2 spaces,
 * and the last row has zero spaces.
 * _ _ _ #
 * _ _ # #
 * _ # # #
 * # # # #
 */

// using  multiple for loops
function staircase_for(n) {
  let output = "";

  // outer for loop to keep track of the overall number of rows (n)
  for (let i = 1; i <= n; i++) {
    // inner for loop to keep track of the preceding spaces on each line
    for (let s = 0; s <= n - i; ++s) {
      output += " ";
    }

    // inner for loop to keep track of the #s on each line
    for (let h = 1; h <= i; h++) {
      output += "#";
    }
    // new line
    output += "\n";
  }
  // log the final result
  console.log(output);
}

// Using  String.prototype.repeat()
function staircase(n) {
  // the number of rows (i) should be less than or equal to n
  for (let i = 1; i <= n; i++) {
    // print out a " " n-i times and append a # i times
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

staircase(4);
