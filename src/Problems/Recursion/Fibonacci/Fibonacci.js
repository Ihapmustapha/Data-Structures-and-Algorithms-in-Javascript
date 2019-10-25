// calculate the nth number of fibbonacci sequence
// O(2^N) -> very bad
function fibonacci(nth) {
    if(nth === 2 || nth === 1) return 1;
    return fibonacci(nth - 1) + fibonacci(nth - 2);
}

// enhanced time complexity to 
// O(N)
function enhancedFibonacci(nth) {
    let fibSequence = [1, 1];
    for(let i = 2; i < nth; i++) {
        fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
    }
    return fibSequence[nth-1];
}


// print fibonacci sequence to the nth element
// --> solution using dynamic programming
// O(N)
function printFibonacciSeq(toNth) {
    let fibSequence = [1, 1];
    for(let i=2; i < toNth; i++) {
        fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
    }
    return fibSequence;
}

/*****************Tests*********************/
console.log(fibonacci(15));
console.log(enhancedFibonacci(15));
console.log(printFibonacciSeq(7));