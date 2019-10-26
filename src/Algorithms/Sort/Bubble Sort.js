// O(N^2)
function sort(array) {
    let range = array.length;
    while(range > 0) {
        for(let i=0; i < range; ++i) {
            if(array[i] > array[i+1]) {
                array = swap(array, i, i+1); 
            }
        }
        range--;
    }
    return array;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
}

/***************Tests***************/
console.log(sort([2,69,5,12,0,7,44,120,3,98]));