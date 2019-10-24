class Queue {
    constructor() {
        this.collection = [];
    }

    // prints the queue
    print() {
        console.log(this.collection);
    }
    // adding element to the queue
    enqueue(element) {
        this.collection.push(element);
    }
    // removes an item from the queue
    dequeue() {
        if(!this.isEmpty()) {
            return this.collection.shift();
        } else {
            console.log("Queue is already empty");
        }
    }
    // return first item in the queue without removing it
    front() {
        return this.collection[0];
    }
    // return queue size
    size() {
        return this.collection.length;
    }
    // check if the queue is empty
    isEmpty() {
        return (this.collection.length === 0);
    }
}

/****************Tests******************/
let q = new Queue(); 
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.print();

console.log(q.size());

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.isEmpty());

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());