function reverse (number) {
    let reversedString = number.toString().split("").reverse().join("");
    return parseInt(reversedString);
}

console.log(reverse(123));