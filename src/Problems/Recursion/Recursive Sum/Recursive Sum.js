// summation of an array using recursion
function recursiveSum(arr) {
    if(arr.length === 1) return arr[0];
    return arr.pop() + recursiveSum(arr);
}


/***********Tests*************/
console.log(recursiveSum([1,2,3,4,5]));  //15