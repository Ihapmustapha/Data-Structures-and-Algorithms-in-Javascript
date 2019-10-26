// O(N log N)
function sort(array) {
    // recursion base case
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = sort(array.slice(0, mid));
    let right = sort(array.slice(mid));
    return merge(left, right); 
}

function merge(firstArray, secondArray) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while(i < firstArray.length && j < secondArray.length) {
        if(firstArray[i] < secondArray[j]) {
            mergedArray.push(firstArray[i]);
            i++;
        } else {
            mergedArray.push(secondArray[j]);
            j++;
        }
    }
    while(i < firstArray.length) {
        mergedArray.push(firstArray[i]);
        i++;
    }
    while(j < secondArray.length) {
        mergedArray.push(secondArray[j]);
        j++;
    }
    return mergedArray;
}


/***************Tests***************/
console.log(sort([2,69,5,12,0,7,44,120,3,98]));
// console.log(merge([2,7,44,98], [0,12,120,133]));