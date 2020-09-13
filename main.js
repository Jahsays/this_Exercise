// Part 1
// Question 1
// What is the value of the keyword this in the following example:
var data = this;
 console.log(data);

//  value of this is (object)window

//  Question 2
// What does this function output? Why?
function logThis(){
    return this;
}

logThis(); // ?

// (object)window. Because it is used in the global context (default binding).

// Question 3
// What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi() // ?

// Hello! Tim. Because this is attached to a parent object(implicit binding).

// Question 4
// What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo() // ?

// cat owner? undefined. Because this is not defined as a method of the closest parent object

// Question 5
// What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() // ?

"Oakland"

// Question 6
// What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here?
 //TypeError. Because logLocation is not a function

//  Part 2
// Question 1
// Fix the following code:
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

var obj = {
    fullName: "Harry Potter",
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
}

obj.sayHi();

// Question 2

// Question 3
function sumEvenArguments(){
    let array = [].slice.call(arguments)
    let sum = 0
    for(let i = 0; i <= array.length; i++){
        if(arr[i] % 2 ===0){
            sum += arr[i]
        }

    }
    return sum;
}

// Question 4
// yet to figure

// Question 5
function invokeMax(fn, maxAmount){
    let count = 0;
    return function () {
        let innerFn = [].slice.call(arguments);
        if(count >= maxAmount){
            return "Maxed Out";
        } else {
            return fn.apply(this, arguments);
            count;
        }
    }
}
function add(a,b){
    return a + b 
}

var addOnlyThreeTimes = invokeMax(add, 3);
// Question 6
function guessingGame(amount) {
    var result = Math.floor(Math.random() * 10);
    var guesses = 0;
    return function(guess) {
        guesses++;
       if(guesses > amount){
           return "Yoo're all done playing!";
       } else if (result < guess) {
           return "You're too high!";
       } else if (result > guess){
           return "You're too low!";
       } else if (result === guess) {
           return "You got it!";
       }
    }
}
var game = guessingGame(5);