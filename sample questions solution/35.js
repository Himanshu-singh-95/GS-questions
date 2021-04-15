/**
 * Find winner of an election where votes are represented as candidate names.
 * Given an array of names of candidates in an election.
 * A candidate name in array represents a vote casted to the candidate.
 * Print the name of candidates received Max vote.
 * If there is tie, print lexicographically smaller name.
 */

/**
 *  program to find winner in an election.
 * @param {Array} votes
 */
const findWinner = (votes) => {
  let winner = "";
  const totCount = votes.reduce((preval, currVal) => {
    preval[currVal] = (preval[currVal] || 0) + 1;
    return preval;
  }, new Map());

  let total = 0;
  for (const [key, value] of Object.entries(totCount)) {
    if (value > total) {
      total = value;
      winner = key;
    }

    /**
     * referenceStr.localeCompare(compareString)
     * A negative number if referenceStr occurs before compareString;
     * positive if the referenceStr occurs after compareString;
     * 0 if they are equivalent.
     */
    if (value == total && winner.localeCompare(key) > 0) {
      winner = key;
    }
  }
  return winner.slice(0, 1).toUpperCase().concat(...winner.slice(1));
};

const votes = [
  "john",
  "johnny",
  "jackie",
  "johnny",
  "john",
  "jackie",
  "jamie",
  "jamie",
  "john",
  "johnny",
  "jamie",
  "johnny",
  "john",
];

console.log(findWinner(votes));
