// Object Oriented Programming: Create a Basic JavaScript Object

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName : function() {
      return "name of the duck is :" + this.name;
  },
    sayName1 : function(name1) {
      this.name = name1;
      return "name of the duck is :" + name1;
  }
};

console.log(duck.sayName);
console.log(duck.sayName());
console.log(duck.sayName1("Sudeep"));
console.log(duck.name);


// Object Oriented Programming: Define a Constructor Function

function Bird() {
  this.name ="constructure function";
  this.createdby="Sudeep";
  this.title = "Developer";
}

function Bird(name, createdby) {
  this.name =name;
  this.createdby=createdby;
  this.title = "Developer";
}

// Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

var bird = new Bird();
console.log(bird);

var bird1 = new Bird("Manasvi", "SudeepPatel");
console.log(bird1);

// Object Oriented Programming: Verify an Object's Constructor with instanceof

// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

let crow = new Bird("Crow", "nature");

console.log(crow);
console.log(crow instanceof Bird);


// If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

console.log(canary instanceof Bird); // => false


function Bird1(name) {
  this.name = name;
  this.numLegs = 2;
}

// Object Oriented Programming: Understand Own Properties

let duck1 = new Bird1("Donald");
let canary1 = new Bird1("Tweety");

let ownProps = [];

for (let property in duck1) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.
// A better way is to use Bird’s prototype. The prototype is an object that is shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:
// A better way is to use Bird’s prototype. The prototype is an object that is shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:


Bird.prototype.numlegs = 2;

console.log(duck1.numLegs);
console.log(canary1.numLegs);
canary1.numLegs = 4;

console.log(duck1.numLegs);
console.log(canary1.numLegs);



Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:


Bird.prototype = {
constructor: Bird, // define the constructor property,

  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


console.log(duck1.constructur);
// Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype


alert(Bird.prototype.isPrototypeOf(duck1));
