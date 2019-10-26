function sort(array) {
    for(let i = 0; i < array.length; i++) {
        let smallest = i;
        for(let j = i; j < array.length; j++) {
            if(array[j] < array[smallest]) {
                smallest = j;
            }
        }
        if(smallest !== i) swap(array, smallest, i);
        console.log(array);
    }
    return array;
}

function swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
    return array;
}

/***************Tests***************/
console.log(sort([2,69,5,12,44,0,7,44,120,3,98]));