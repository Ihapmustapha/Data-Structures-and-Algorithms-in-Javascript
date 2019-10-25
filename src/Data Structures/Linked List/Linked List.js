import Node from "./Node";

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    // getting size of linkedlist
    size() {
        return this.length;
    }
    // getting head of linkedlist
    head() {
        return this.head;
    }
    // adding new node to linkedlist
    // O(N)
    add(element) {
        let node = new Node(element);
        if(this.head === null) {
            this.head = node;
        } 
        else {
            let currentNode = head; 
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        } 
        this.length++;
    }
    // Searchs and remove the element from the list
    remove(element) {
        let currentNode = head; 
        if(element === currentNode.value) {}
    }
    // checks if linked list is empty
    isEmpty() {

    }
    // returns index of item
    indexOf() {

    }
    // returns element at specific index
    elementAt() {

    }
    // add element at specific index
    addAt() {

    }
    // removes element at specific index
    removeAt() {

    }


}

/********************Tests*************************/
let conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());