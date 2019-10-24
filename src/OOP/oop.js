// implicit binding of 'this'
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
let sillyRabbit = {type: "silly"};

whiteRabbit.speak("Hola bola");
hungryRabbit.speak("I'm very hungry");
// as same as the following 
let newObj = {
    type: "lion",
    speak: function(line) {
        console.log(`the ${this.type} says "${line}`)
    }
}

newObj.speak('roar'); 

// explicit binding can be done using call(), apply() or bind()
speak.call(sillyRabbit, 'Im silly');

// this in arrow functions is auto binded, for example 
let thisObj = {
    height: 15, 
    tellHeight: () => {
        // this.height = thisObj.height;
        // because here this is auto binded to the outer scope so it doesn't see height 
        console.log("my height is: " + this.height);
    }
}

thisObj.tellHeight();