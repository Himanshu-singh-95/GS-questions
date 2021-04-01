// Given a set of numbers identify pairs such that a^b = b^a

const countPairsBruteForce = (arrX, arrY) => {
  let ans = 0;
  for (let i = 0; i < arrX.length; i++) {
    const elementX = arrX[i];
    for (let j = 0; j < arrY.length; j++) {
      const elementY = arrY[j];
      if (elementX ** elementY > elementY ** elementX) ans++;
    }
  }

  return ans;
};

X = [2, 1, 6];
Y = [1, 5];
console.log(countPairsBruteForce(X, Y));
