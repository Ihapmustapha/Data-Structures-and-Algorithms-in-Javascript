// stacks 
// functions: push, pop, peek, length

// Pallindrome word problem
var letters = [];
var word = "racecar";
var rword = "";

for (let i=0; i<word.length; ++i) {
  letters.push(word[i]);
}

for (let i=0; i<word.length; ++i) {
  rword+=letters.pop();
}

if(word === rword){
  console.log(word + " is Palindrome");
} else console.log(word + " is not Palindrome");
