// giving an array of strings and we want to find the longest common prefix of the array elements
// the array contains 3 strings
function lcp(array) {
    let sortedArray = array.sort();
    let element1 = sortedArray[0];
    let element2 = sortedArray[1];
    let element3 = sortedArray[2];
    let sequence = 0;

    for(let i = 0; i < element1.length; i++) {
        if(element1.charAt(i) === element2.charAt(i) && element2.charAt(i) === element3.charAt(i)) {
            sequence++;
        }
    }
    
    if(sequence === 0) return "no common prefix";
    return element1.substring(0, sequence);
}


console.log(lcp(["go", "gooseeeeee", "google"]));
console.log(lcp(["car", "dog", "do"]));