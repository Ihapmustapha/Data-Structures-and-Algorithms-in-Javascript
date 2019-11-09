/*
 *   https://www.hackerrank.com/challenges/diagonal-difference/
 */

const diagonalDifference = matrix => {
  let absltDiff = 0;
  let leftToRightDiagSum = 0;
  let rightToLeftDiagSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    leftToRightDiagSum += matrix[i][i];
    rightToLeftDiagSum += matrix[matrix.length - 1 - i][i];
  }

  absltDiff = Math.abs(leftToRightDiagSum - rightToLeftDiagSum);

  return absltDiff;
};

/***********Tests***********/
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // 15
