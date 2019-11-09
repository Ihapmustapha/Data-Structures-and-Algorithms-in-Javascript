/*
 *   https://www.hackerrank.com/challenges/mini-max-sum/
 */

const miniMaxSum = array => {
  let maxOfArray = Math.max(...array);
  let minOfArray = Math.min(...array);

  let numOfRemovedFromMin = 0;
  let numOfRemovedFromMax = 0;

  const canBeFilteredFromMin = element => {
    if (element !== maxOfArray) return element;
    if (element === maxOfArray && numOfRemovedFromMin < 1) {
      numOfRemovedFromMin++;
      return;
    } else return element;
  };

  const canBeFilteredFromMax = element => {
    if (element !== minOfArray) return element;
    if (element === minOfArray && numOfRemovedFromMax < 1) {
      numOfRemovedFromMax++;
      return;
    } else return element;
  };

  let arrayOfMin = array.filter(canBeFilteredFromMin);
  let arrayOfMax = array.filter(canBeFilteredFromMax);

  let sumOfArrayOfMin = sum(arrayOfMin);
  let sumOfArrayOfMax = sum(arrayOfMax);

  return sumOfArrayOfMin + " " + sumOfArrayOfMax;
};

const sum = array => array.reduce((a, b) => a + b, 0);

/*************Tests***************/
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([5, 5, 5, 5, 5]);
