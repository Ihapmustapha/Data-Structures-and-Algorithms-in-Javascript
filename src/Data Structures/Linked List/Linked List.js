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
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

        length --;
    }
    // checks if linked list is empty
    isEmpty() {
        return length === 0;
    }
    // returns index of item
    indexOf() {
        var currentNode = head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };
    // returns element at specific index
    elementAt() {
        var currentNode = head;
    var count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return currentNode.element;
    }
    // add element at specific index
    addAt() {
        var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
    }
    // removes element at specific index
    removeAt() {
        var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
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