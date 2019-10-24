class Rabbit {
    constructor(type) {
        this.type = type; 
    }

    speak(line) {
        console.log(`The ${this.type} Rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit('killer');
killerRabbit.speak("hello I'm killer");
let blackRabbit = new Rabbit('black');
blackRabbit.speak("hello I'm black");

// using prototype you can add a new property to class constructor (can be called overriding)
Rabbit.prototype.teeth = "small"; 
console.log(killerRabbit.teeth);
// small
killerRabbit.teeth = "sharp, small, and bloody";
console.log(killerRabbit.teeth);
// sharp, small, and bloody
console.log(blackRabbit.teeth);
// small

let a = {
    height: 5,
    b: function() {
        console.log(this.height);
    }
}

a.b();