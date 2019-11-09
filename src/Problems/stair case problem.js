/*
 * https://www.hackerrank.com/challenges/staircase/problem
 */

const printStairCase = n => {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }
    for (let x = 0; x < i; x++) {
      line += "#";
    }
    console.log(line);
  }
};

/************Tests**************/
printStairCase(6);
