/*
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */

const convertTime = _12hTime => {
  let PMAM = _12hTime.slice(-2);
  let arrayOfTimeValues = _12hTime.slice(0, -2).split(":");
  arrayOfTimeValues[0] =
    PMAM === "PM"
      ? parseInt(arrayOfTimeValues[0]) + 12
      : parseInt(arrayOfTimeValues[0]) === 12
      ? `00`
      : arrayOfTimeValues[0];
  let finalValue = arrayOfTimeValues.join(":");
  return finalValue;
};

/************Tests**************/
console.log(convertTime("07:05:45PM")); // 19:05:45
console.log(convertTime("12:05:39AM")); // 00:05:39
