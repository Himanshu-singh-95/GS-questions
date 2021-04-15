/**
 *
 * You have an integer array.
 * Starting from arr[startIndex], follow each element to the index it points to.
 * Continue to do this until you find a cycle.
 * Return the length of the cycle. If no cycle is found return -1
 *
 */

const countLengthOfCycle = (arr, startIndex) => {
  let slow = startIndex;
  let fast = startIndex;

  const isCyclePresent = (arr) => {
    let index = 0;
    const n = arr.length;
    while (index < n) {
      // If at any moment the current fast /slow index value points to an index outOfBound of array size
      // then there can't be any cycle
      if (slow < 0 || fast < 0 || slow >= n || fast >= n) {
        return false;
      }
      index++;

      /**
       * Floyd's Tortoise and Hare Algorithm.
       * The idea behind the algorithm is that, if you have two pointers in a array list,
       * one moving twice as fast (the hare) than the other (the tortoise), then if they intersect,
       * there is a cycle in the array list. If they don't intersect, then there is no cycle.
       */

      // first increment of fast pointer
      fast = arr[fast];
      if (slow == fast) {
        return true;
      }

      if (fast < 0 || fast >= n) {
        return false;
      }

      // second increment of fast pointer
      fast = arr[fast];
      if (slow == fast) {
        return true;
      }

      // first increment of slow pointer
      slow = arr[slow];
      if (slow == fast) {
        return true;
      }
    }
    return false;
  };

  if (isCyclePresent(arr)) {
    const findCount = (arr, slow) => {
      let count = 1;
      let index = arr[slow];
      while (index !== slow) {
        index = arr[index];
        count++;
      }
      return count;
    };

    return findCount(arr, slow);
  }
};

console.log(countLengthOfCycle([1, 0], 0));
console.log(countLengthOfCycle([1, 2, 0], 0));
