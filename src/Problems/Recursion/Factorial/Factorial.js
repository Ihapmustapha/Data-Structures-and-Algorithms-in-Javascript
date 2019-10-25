// O(n!)
function factorial(number) {
    if(number === 1) return 1;
    return number * factorial(number - 1);
}


/*********Tests***********/
console.log(factorial(5));