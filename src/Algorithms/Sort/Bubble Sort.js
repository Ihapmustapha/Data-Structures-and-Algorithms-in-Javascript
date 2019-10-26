// O(N^2)
function sort(array) {
    // no swaps optimize the algorithm in case the array was already sorted 
    // so we don't have to loop again
    let noSwaps; 
    let range = array.length;
    while(range > 0) {
        noSwaps = true;
        for(let i=0; i < range; ++i) {
            if(array[i] > array[i+1]) {
                array = swap(array, i, i+1);
                noSwaps = false; 
            }
        }
        range--;
        if(noSwaps) break;
    }
    return array;
}

function swap(array, firstIndex, secondIndex) {
    // let temp = array[firstIndex];
    // array[firstIndex] = array[secondIndex];
    // array[secondIndex] = temp;
    
    // ES6 swapping
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
    return array;
}

/***************Tests***************/
// console.log(sort([2,69,5,12,0,7,44,120,3,98]));
// console.log(sort([0, 2, 3, 5, 7, 12, 44, 69, 98, 120]));

let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);

console.log(sort(data));
