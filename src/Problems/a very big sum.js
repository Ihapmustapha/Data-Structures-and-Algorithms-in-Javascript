/*
 * https://www.hackerrank.com/challenges/a-very-big-sum/problem
 */

const aVeryBigSum = array => {
  if (array.length === 1) return array[0];
  return array.pop() + aVeryBigSum(array);
};

/**************Tests**************/
console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
