/*
 *   https://www.hackerrank.com/challenges/smart-number/problem
 *
 */

const isSmartNumber = number => {
  let factors = findFactors(number);
  console.log(factors);
  if (factors && factors.length % 2 !== 0) return `YES`;
  return `NO`;
};

const findFactors = number =>
  Array.from(Array(number + 1), (_, i) => i).filter(i => number % i === 0);

console.log(isSmartNumber(1)); // YES
console.log(isSmartNumber(2)); // NO
console.log(isSmartNumber(7)); // NO
console.log(isSmartNumber(169)); // YES
