// Use strict at global level
"use strict";

var variable = "Testing varialbe in strict mode"; //gives error becaue of strict use at global level because var is not used to declare variable

function manasviTalks() {
    "use strict";

    alert("Hello i am Manasvi, I am sudeep");
    common = "";
}

window.name = "Sudeep";
//   var name ="Manasvi";

let name = "Manasvi";

console.log(window.name);
console.log(name);
console.log(variable);

// let is used to declare variable and scope is limited to where it used in scope


// const keyword 0 variable declared with const are read-only

const constVar = "constant variable";
// constVar ="cannot change variable values"; // error produced

// ES6 - Mutate an Array Declared with const
// arrays and function assigned with const are mutable

const s = [5, 6, 7]; //declaratni prevents reassigment
console.log(s);

s[0] = 25;
console.log(s);
s.push(30, 40, 50);
console.log(s);

// s = [10,20,30]; //generate error as array is immutable but elements are mutable

// ES6 - Prevent Object Mutation


let objImmutate = { "name": "Sudeep" };

console.log(objImmutate)
objImmutate.name = "Manasvi";
console.log(objImmutate)
Object.freeze(objImmutate);
console.log(objImmutate)
//  objImmutate.name ="Engineering"; //error 
console.log(objImmutate);
console.log(Object.isFrozen(objImmutate));

//  ES6 - Use Arrow Functions to Write Concise Anonymous Functions

const myFunction = function () {

    const myVar = "Value";
    return myVar;
}


const myFunc = () => {
    const myVar = "Value";
    return myVar;
}

console.log(myFunc);
console.log(myFunc());
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc1 = () => "value"
console.log(myFunc1());


const magic = () => {
    "use strict";
    return new Date();
  }

console.log(magic());
console.log(magic + magic.toString());

// ES6 Passing parameters to Arrow functions

const doubler =  (item) => {
    return item * 2
}
console.log(doubler(10));


const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));
//   ES6 - Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
let positiveNumbersCount =   squaredIntegers.filter(v  => v > 0 && v % 1 === 0).map((function(elem, index,arr)
{   
    arr[index] = elem * elem;   
    return arr[index];
    })) ;

    positiveNumbersCount =   squaredIntegers.filter(v  => v > 0 && v % 1 === 0).map(x => x * x) ;
console.log("Positive numbs" + positiveNumbersCount);
() => {

    console.log("annonymous functoions");
}

  // change code above this line
  return positiveNumbersCount;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);





// ES6 - Use the "Rest Operator" with Function Parameters

function howMany(...args) {
    return "you passed" + args + " , and " + args.length + " arguments";
}

console.log(howMany(1 , 2 ,3));


// ES6 - Write code to sum array values

// ES6 - Use the "Spread Operator" to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(...arr1) {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
//ECMA5
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

//ECMA6
var maxi = Math.max(...arr);
console.log(maxi);