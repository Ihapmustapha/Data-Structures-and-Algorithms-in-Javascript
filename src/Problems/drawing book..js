/*
 * https://www.hackerrank.com/challenges/drawing-book/problem
 */

//  solution could be better
const pageCount = (numberOfPages, pageIndex) => {
  let numberOfCounts = 0;
  let wayFromIdxToEnd = numberOfPages - pageIndex;

  if (wayFromIdxToEnd < pageIndex) {
    if (numberOfPages % 2 !== 0 && wayFromIdxToEnd === 1)
      numberOfCounts = Math.floor(wayFromIdxToEnd / 2);
    else if (numberOfPages % 2 === 0 && wayFromIdxToEnd === 1)
      numberOfCounts = Math.floor(wayFromIdxToEnd / 2) + 1;
    else numberOfCounts = Math.floor(wayFromIdxToEnd / 2);
  } else {
    numberOfCounts = Math.floor(pageIndex / 2);
  }

  return numberOfCounts;
};

/************Tests************/
console.log(pageCount(6, 2)); // 1
console.log(pageCount(5, 4)); // 0
console.log(pageCount(6, 5)); // 1
