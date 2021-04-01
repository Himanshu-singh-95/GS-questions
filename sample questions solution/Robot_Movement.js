//Implement the 'walk' method.
//Assume robot inital position is (0,0).
//walk method take path where each character corresponds to a movement of the robot.
// The robot moves up, down, left, and right represented by the characters 'U', 'D', 'L', and 'R'
// Ignore other characters.

const walk = (str) => {
  let x = 0;
  let y = 0;
  for (const c of [...str]) {
    switch (c) {
      case "U":
        y += 1;
        break;
      case "D":
        y -= 1;
        break;
      case "L":
        x -= 1;
        break;
      case "R":
        x += 1;
        break;

      default:
        break;
    }
  }

  return [x, y];
};

console.log(walk("ULDR"));
