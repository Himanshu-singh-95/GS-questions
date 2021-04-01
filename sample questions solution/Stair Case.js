/*

** There is a staircase with 'n' number of steps. A child
** walks by and wants to climb up the stairs, starting at
** the bottom step and ascending to the top.instead
** of taking 1 step at a time, it will vary between taking
** either 1, 2 or 3 steps at a time.
** Given 'n' number of steps below method should find
** number of
** unique combinations the child could traverse.
** An example would be countSteps(3) == 4:
** 1 1 1
** 2 1
** 1 2
** 3
*/

const countSteps = (n) => {
  if (n == 0 || n == 1) return 1;
  if (n == 2) return 2;

  let num_ways = Array(n + 1);

  num_ways[0] = 1;
  num_ways[1] = 1;
  num_ways[2] = 2;
  for (let i = 3; i < num_ways.length; i++) {
    num_ways[i] = num_ways[i - 3] + num_ways[i - 2] + num_ways[i - 1];
  }

  return num_ways[n];
};

console.log(countSteps(3));
// Output 4
console.log(countSteps(4));
// Output 7;
