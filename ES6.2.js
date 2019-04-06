// ES6 - Create Strings using Template Literals
// A new feature of ES6 is the template literal. This is a special type of string that allows you to use string interpolation features to create strings.

const person = {
name: "Zodiac Hasbro",
age: 56
};

// string interpolation
const greeting = `Hello, my name is ${person.name}!

I am ${person.age} years old.`;

const greeting1 = `Heello my age is ${person.age}` ;

console.log(greeting); // prints
console.log(greeting1); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.



const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  var resultDisplayArray = null;
  // change code above this line
  for ( var i=0; i< arr.length ; i ++) {
    console.log(arr[i]);
     arr[i] = `<li class="text-warning">${arr[i]}</li>`;
}
  console.log(resultDisplayArray=arr);
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);


// ES6 - Write Concise Object Literal Declarations Using Simple Fields

const getMousePosition = (x, y) => ({
x: x,
y: y
});

// ES 6 

const getMousePosition1 = (x, y) => ({ x, y });

console.log(getMousePosition1(10,20).x);



const createPerson = (name, age, gender) => ({    name,    age,    gender, 
  sayName()  {return this.name} })  ;
  cp = createPerson("Zodiac Hasbro", 56, "male");
console.log(test =createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
console.log(test); // returns a proper object
console.log(test.sayName());


// ES6 - Use class Syntax to Define a Constructor Function

var SpaceShuttle = function(name) { //constructo
  this.name = name;
}


var zeuz = new SpaceShuttle('Jupiter');
console.log(zeuz);

// The class syntax simply replaces the constructor function creation:

class SpaceShuttles {

  constructor(targetPlanet) {
    this.targetPlanet;
  }
  
}

const mars  = new SpaceShuttles('Mars');
console.log(mars.getPlanet());

