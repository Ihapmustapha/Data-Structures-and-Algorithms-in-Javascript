/*
 *   https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

const compareTriplets = (aliceRate, bobRate) => {
  let score = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (aliceRate[i] > bobRate[i]) score[0] = score[0] + 1;
    if (bobRate[i] > aliceRate[i]) score[1] = score[1] + 1;
  }
  return score;
};

console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // [2, 1]
console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [1, 1]
