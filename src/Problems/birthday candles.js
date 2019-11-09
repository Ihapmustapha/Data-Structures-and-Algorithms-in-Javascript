/*
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

const birthdayCakeCandles = array => {
  let maxOfArray = Math.max(...array);
  let numOfMaxs = 0;

  array.forEach(element => {
    if (element === maxOfArray) numOfMaxs++;
  });

  return numOfMaxs;
};

/*************Tests*************/
console.log(birthdayCakeCandles([3, 2, 1, 3]));
