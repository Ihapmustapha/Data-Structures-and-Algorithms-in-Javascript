class PriorityQueue {
    constructor() {
        this.collection = [];
    }
    // prints the queue
    printCollection() {
        console.log(this.collection);
    }
    // adding element to the end of the queue
    enqueue(element) {
        if(this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for(let i=0; i<this.collection.length; i++) {
                if(element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.collection.push(element);
            }
        }
    }
    // removes element from the front of the queue 
    dequeue() {
        return this.collection.shift();
    }
    front() {
        return this.collection[0];
    }
    // checks if the queue is empty
    isEmpty() {
        return (this.collection.length === 0);
    }
    // returns queue size
    size() {
        this.collection.length; 
    }
}

/*************Tests*****************/
let pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
console.log("front of the queue " + pq.front());
pq.dequeue();
console.log("front of the queue " + pq.front());
pq.printCollection();