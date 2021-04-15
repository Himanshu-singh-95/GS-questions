/*
 **  Instructions:
 **
 **  Given a forest ( one or more disconnected trees ), find the root of largest tree
 **  and return its Id. If there are multiple such roots, return the smallest Id of them.
 **
 **  Complete the largestTree function in the editor below.
 **  It has one parameter, immediateParent, which is a map containing key-value pair indicating
 **  child -> parent relationship. The key is child and value is the corresponding
 **  immediate parent.
 **  Constraints
 **    - Child cannot have more than one immediate parent.
 **    - Parent can have more than one immediate child.
 **    - The given key-value pair forms a well-formed forest ( a tree of n nodes will have n-1 edges )
 **
 **  Example:
 **
 **  In:
 **  { { 1 -> 2 }, { 3 -> 4} }
 **
 **  Expected out: 2
 **  Explanation: There are two trees one having root of Id 2 and another having root of Id 4.
 **  Both trees have size 2. The smaller number of 2 and 4 is 2. Hence the answer is 2.
 */

/**
 * Function to return the  size of the largest tree in the forest using the adjacency list
 * @param {Map<number, number>} immediateParent
 * @returns
 */
const largestTree = (immediateParent) => {
  let size = 0;
  let largestParentNode = undefined;
  // to maintain edges from parent to child vertex
  const adjList = new Map();
  for (const [key, value] of immediateParent.entries()) {
    adjList.set(value, (adjList.get(value) || []).concat(key));
    // uncomment below for undirected graph
    // adjList.set(key, (adjList.get(key) || []).concat(value));
  }

  console.log(adjList);

  // to maintain visited vertexes
  const arrFromNodes = [...adjList.keys()].map((item) => [item, false]);
  const visited = new Map(arrFromNodes);

  for (const [key, value] of visited.entries()) {
    // uncomment below for undirected graph
    // if not visited
    // if (!value) {
    const currTreeSize = DFSUtil(key, adjList, visited);
    largestParentNode = size < currTreeSize ? key : largestParentNode;
    size = Math.max(size, currTreeSize);
    // }
  }

  return largestParentNode;
};

/**
 * A utility function to perform DFS of a graph recursively from a given vertex key
 *  and returns the size of the tree formed by key
 * @param {Number} key
 * @param {Map} adjList
 * @param {Map} visited
 */
function DFSUtil(key, adjList, visited) {
  // uncomment below for undirected graph
  // visited.set(key, true);

  let size = 1;

  const currNodeChilds = adjList.has(key) ? adjList.get(key) : undefined;
  if (currNodeChilds) {
    for (let i = 0; i < currNodeChilds.length; i++) {
      // uncomment below for undirected graph
      // if (visited.get(currNodeChilds[i]) == false) {
      size += DFSUtil(currNodeChilds[i], adjList, visited);
      // }
    }
  }

  return size;
}

// More than two trees
const testCaseTwoKey = new Map([
  [2, 3],
  [7, 8],
  [12, 15],
  [3, 1],
  [13, 15],
  [11, 15],
  [9, 8],
  [5, 12],
]);

// More than two trees
const testCaseThreeKey = new Map([
  [200000000, 300000000],
  [500000000, 200000000],
  [700000000, 300000000],
  [600000000, 700000000],
  [900000000, 400000000],
  [100000000, 400000000],
  [800000000, 400000000],
  [1000000000, 400000000],
]);

console.log(largestTree(testCaseTwoKey));
