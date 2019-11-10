/*
 * https://www.hackerrank.com/challenges/append-and-delete/problem
 */

const appendAndDelete = (initString, desiredString, appendDeleteTimes) => {
  let couldMatch = "";
  let numOfMatchedChars = 0;

  for (let i = 0; i < initString.length + desiredString.length; i++) {
    if (initString[i] === desiredString[i]) {
      numOfMatchedChars++;
    } else break;
  }

  let numOfRequiredDeletions = initString.length - numOfMatchedChars;
  let numOfRequiredAppends = desiredString.length - numOfMatchedChars;

  if (initString.length - desiredString.length >= 0) {
    if (
      numOfRequiredDeletions + numOfRequiredAppends - appendDeleteTimes <=
      0
    ) {
      couldMatch = "Yes";
    } else couldMatch = "No";
  } else if (
    initString.length < desiredString.length &&
    initString +
      desiredString.slice(
        initString.length,
        desiredString.length === desiredString
      )
  ) {
    couldMatch = "Yes";
  } else {
    couldMatch = "No";
  }

  return couldMatch;
};

/**********Tests************/

console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Yes
console.log(appendAndDelete("aba", "aba", 7)); // Yes
console.log(appendAndDelete("ashley", "ash", 2)); // No
console.log(appendAndDelete("qwerasdf", "qwerbsdf", 6)); // No
console.log(appendAndDelete("y", "yu", 2)); // No .... fails
console.log(appendAndDelete("zzzzz", "zzzzzzz", 4)); // Yes
