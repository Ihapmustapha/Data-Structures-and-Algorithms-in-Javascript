function sort(array) {
    for(let i = 1; i < array.length; i++) {
        let extractedElement = array[i];
        for(var j = i-1; j >= 0 && array[j] > extractedElement; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = extractedElement;

        // for tracing: 
        // console.log("at iteration: " + i);
        // console.log(array);
    }
    return array;
}


/***************Tests***************/
// console.log(sort([2,69,5,12,0,7,44,120,3,98]));
let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);

console.log(sort(data));






