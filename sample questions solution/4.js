/**
 * Set of anagrams of list of words.
 * 06_Group Anagram
 * The output should be words which are anagrams from the list should be grouped together.
 */
//  Words to match

const group_anagram = (wordList) => {
  let anagram = new Map();

  for (const word of wordList) {
    const alphabetical_sort = word.split("").sort().join("");

    if (anagram.has(alphabetical_sort)) {
      anagram.set(alphabetical_sort, [...anagram.get(alphabetical_sort), word]);
    } else {
      anagram.set(alphabetical_sort, [word]);
    }
  }

  // Output result
  for (const [key, value] of anagram) {
    let output = "";
    let sep = " ";
    for (const word of value) {
      output += sep + word;
    }
    console.log(output + "\n");
  }
};

var words = ["dell", "ledl", "abc", "cba", "cat", "dog", "tac", "god", "act"];
group_anagram(words);
