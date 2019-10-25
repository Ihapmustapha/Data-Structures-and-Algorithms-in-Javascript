function fibonacci(nth) {
    if(nth === 2 || nth === 1) return 1;
    return fibonacci(nth - 1) + fibonacci(nth - 2);
}


/*****************Tests*********************/
console.log(fibonacci(15));