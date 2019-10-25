// to take an array in some order and reverse it using recursion
function reverse(arr) {
    let reversedArray = [];

    function addItems(orderedArray) {
        if(orderedArray.length === 0) return; 
        reversedArray.push(orderedArray.pop());
        addItems(orderedArray);
    }
    
    addItems(arr);
    return reversedArray;
}

/***********Tests**************/
console.log(reverse([1,2,3,4,5,6]));