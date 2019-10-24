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
    // returns difference of two sets
    difference(otherSet) {
        let differenceSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if(!otherSet.has(element)) differenceSet.add(element);
        })
        return differenceSet;
    }
    // tests if the second set is a subset of the first
    // every() checks if all of the array elements pass the test
    isSubset(otherSet) {
        let firstSet = this.values();
        return firstSet.every((element) => {
            return otherSet.has(element);
        })

    }
}



/*************Tests**************/
let setA = new MySet(); 
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);

let setB = new MySet();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
setB.add(7);
setB.add(8);

console.log(setA.values());
console.log(setB.values());

let unionSet = setA.union(setB);
console.log(unionSet.collection);

let intersectionSet = setA.intersection(setB);
console.log(intersectionSet.collection);

let differenceSet = setA.difference(setB);
console.log(differenceSet.collection);

console.log(setA.isSubset(setB) ? "is a subset" : "is not a subset");
// console.log(setA.size());
// setA.add(4);
// console.log(setA.size());
// setA.remove(3);
// console.log(setA.size());



