class Stack {
    constructor() {
        this.count = 0;
        this.storage = {}; 
    }
    // Adds a value to the top of the stack
    push(value) {
        this.storage[this.count] = value;
        this.count ++; 
    }
    // Removes a value from the top of the stack
    pop() {
        if(this.count === 0) return undefined;

        this.count--;
        let value = this.storage[this.count];
        delete this.storage[this.count];
        return value
    }
    // Returns stack's size
    size() {
        return this.count;
    }
    // Returns the value of the top of the stack without removing it
    peek() {
        return this.storage[this.count-1];
    }

}

//*************Tests*******************//
let myStack = new Stack(); 
myStack.push(5);
myStack.push(6);
myStack.push(3);
myStack.push(2);
console.log("Stack Size is " + myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log("Stack Size is " + myStack.size());
