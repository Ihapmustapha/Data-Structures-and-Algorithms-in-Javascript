/*
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

const breakingRecords = scores => {
  let minScore = scores[0];
  let maxScore = scores[0];
  let timesOfBreakingMin = 0;
  let timesOfBreakingMax = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
      timesOfBreakingMin++;
    } else if (scores[i] > maxScore) {
      maxScore = scores[i];
      timesOfBreakingMax++;
    }
  }

  return [timesOfBreakingMax, timesOfBreakingMin];
};

/************Tests*************/
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // [4, 0]
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2, 4]
