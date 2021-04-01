/**
 * A group of students are sitting in a circle. The teacher is electing a new class president.
 * The teacher does this by singing a song while walking around the circle. After the song is
 * finished the student at which the teacher stopped is removed from the circle.
 *
 * Starting at the student next to the one that was just removed, 
 * the teacher resumes singing and walking around the circle.
 * After the teacher is done singing, the next student is removed. 
 * The teacher repeats this until only one student is left.
 *
 * A song of length k will result in the teacher walking past k students on each round. 
 * The students are numbered 1 to n. 
 * The teacher starts at student 1.
 *
 * For example, suppose the song length is two (k=2). And there are four students to start with (1,2,3,4). 
 * The first student to go would be `2`, after that `4`, and after that `3`.
 *  Student `1` would be the next president in this example.
 *
 * @param n the number of students sitting in a circle.
 * @param k the length (in students) of each song.
 * @return the number of the student that is elected.
 */
const whoIsElected = (n, k) => {
  const arr = [...Array(n)].map((elem, _idx) => _idx + 1);
  let index = 0;
  let count = 0;
  while (arr.length !== 1) {
    index = index + 1;
    count = count + 1;
    if (count == k) {
      arr.splice(index - 1, 1);
      count = 0;
      index -= 1;
    }

    if (index === arr.length) {
      index = 0;
    }
  }
  return arr.toString();
};

console.log(whoIsElected(100, 2));
