// O(N)
function search(array, seekElement) {
    let found = [];
    array.forEach((element, index) => {
        if(element === seekElement) found.push({ index: index, value: element })    
    });
    return found;
}

/************Tests***************/
console.log(...search([2, 5, 87, 23, 13, 7, 87], 87));