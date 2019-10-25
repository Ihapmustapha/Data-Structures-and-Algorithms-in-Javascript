// O(Log N)
// Searching in a sorted array
function search(array, seekElement) {
    let startIndex = 0; 
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if(seekElement === array[middleIndex]) return middleIndex; 
        if(seekElement < array[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
}

/*************Test****************/
console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13], 14) || "Search result is not found");
console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13], 10) || "Search result is not found");