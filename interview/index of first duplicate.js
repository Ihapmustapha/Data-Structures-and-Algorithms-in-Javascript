function index_of_first_duplicate(array) {
  let indexOfDuplicate = null;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        indexOfDuplicate = j;
        break;
      }
    }
    if (indexOfDuplicate) break;
  }
  return indexOfDuplicate;
}

// time O(N^2)
// space O(1)
/***********Tests***********/
console.log(index_of_first_duplicate([5, 17, 3, 17, 4, -1]));
console.log(index_of_first_duplicate([5, 5, 3, 17, 4, -1]));
console.log(index_of_first_duplicate([5, 5, 3, 17, 4, 17, 4]));
