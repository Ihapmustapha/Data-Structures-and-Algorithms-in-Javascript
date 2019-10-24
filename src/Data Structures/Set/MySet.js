class MySet {
    constructor() {
        this.collection = [];
    }
    // checks if the set already has the element we're trying to add
    has(element) {
        return (this.collection.indexOf(element) !== -1);
        // same as
        // return (this.collection.includes(element));
    }
    // return sets values
    values() {
        return this.collection;
    }
    // adds new element to the set
    add(element) {
        if(!this.has(element)) {
            this.collection.push(element);
        } else {
            console.log("Element Already Exists");
        }
    }
    // removes an element from the set
    remove(element) {
        if(this.has(element)) {
            let elementIndex = this.collection.indexOf(element)
            this.collection.splice(elementIndex, 1);
        } else {
            console.log("Element Doesn't Exist");
        }
    }
    // returns size of the set
    size() {
        return this.collection.length;
    }
    // make a union of two sets
    union(otherSet) {
        let unionSet = new MySet(); 
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(element => {
            if(!unionSet.has(element)) {
                unionSet.add(element); 
            }
        });

        secondSet.forEach(element => {
            if(!unionSet.has(element)) {
                unionSet.add(element)
            }
        })

        return unionSet; 
    }
    // returns intersection of two sets
    intersection(otherSet) {
        let intersectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if(otherSet.has(element)) intersectionSet.add(element);
        })
        return intersectionSet
    }
}



/*************Tests**************/
let testSet = new MySet(); 
testSet.add(1);
testSet.add(2);
testSet.add(3);
testSet.add(5);

let secondTestSet = new MySet();
secondTestSet.add(2);
secondTestSet.add(4);
secondTestSet.add(5);

console.log(testSet.values());
console.log(secondTestSet.values());
let unionSet = testSet.union(secondTestSet);
console.log(unionSet.collection);
let intersectionSet = testSet.intersection(secondTestSet);
console.log(intersectionSet.collection);

// console.log(testSet.size());
// testSet.add(4);
// console.log(testSet.size());
// testSet.remove(3);
// console.log(testSet.size());



