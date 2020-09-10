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