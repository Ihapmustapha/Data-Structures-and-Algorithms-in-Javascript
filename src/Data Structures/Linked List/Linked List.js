// import Node from "./Node";

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
} 


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
    getHead() {
        return this.head.value;
    }
    // adding new node to linkedlist
    // O(N)
    add(element) {
        let node = new Node(element);
        if(this.head === null) {
            this.head = node;
        } 
        else {
            let currentNode = this.head; 
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        } 
        this.length++;
    }
    // Searchs and remove the element from the list
    remove(element) {
        var currentNode = this.head;
        var previousNode;
        if(currentNode.value === element){
            this.head = currentNode.next;
        } else {
        while(currentNode.value !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

        this.length --;
    }
    // checks if linked list is empty
    isEmpty() {
        return this.length === 0;
    }
    // returns index of item
    indexOf(element) {
        var currentNode = this.head;
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
    elementAt(index) {
        var currentNode = this.head;
        var count = 0;
        while (count < index){
            count ++;
            currentNode = currentNode.next
        }
        return currentNode;
    }
    // add element at specific index
    addAt(index) {
        var node = new Node(element);
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;

        if(index > this.length){
        return false;
        }

        if(index === 0){
            node.next = currentNode;
            this.head = node;
        } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
        }
        this.length++;
    }
    // removes element at specific index
    removeAt(index) {
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= this.length){
            return null;
        }
        if(index === 0){
            this.head = currentNode.next;
        } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
        }
        this.length--;
        return currentNode.element;
    }
}


/********************Tests*************************/
let myLinkedList = new LinkedList();
myLinkedList.add("kitten");
myLinkedList.add("puppy");
myLinkedList.add("dog");
myLinkedList.add("cat");
myLinkedList.add("fish");
console.log(myLinkedList.getHead());
console.log(myLinkedList.size());
myLinkedList.remove("kitten");
console.log(myLinkedList.getHead());
myLinkedList.removeAt(3);
console.log(myLinkedList.elementAt(3));