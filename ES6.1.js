// ES6 - Use Destructuring Assignment to Assign Variables from Objects

// Consider the following ES5 code:

var voxel = {x: 3.6, y: 7.4, z: 6.54 };


var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

console.log(x, y ,z);


// Here's the same assignment statement with ES6 destructuring syntax:
// const {a, b , c} = voxel;
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54

console.log(a, b ,c);


function getLength(str) {
  "use strict";

  // change code below this line
  var length = 0; // change this
  // change code above this line
//   [st, length] =  str;

  
  var len = length;
  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));



const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
//   var maxOfTomorrow = undefined; // change this line
  // change code above this line
  var {tomorrow :{max:maxOfTomorrow}} = LOCAL_FORECAST;
  var {tomorrow :tmrw } = LOCAL_FORECAST;

  console.log(tmrw);
  var {tomorrow :{tmrw:max }} = LOCAL_FORECAST;
  console.log(max);
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6



// ES6 - Use Destructuring Assignment to Assign Variables from Arrays

const [e , f] = [1, 2 , 3 , 4];

console.log(e,f);


const [g, h,,, i] = [1, 2, 3, 4, 5, 6];
console.log(g, h, i); // 1, 2, 5

// swap using destructuring Array
let aa = 8, bb = 6;
(() => {
  "use strict";
  // change code below this line
   [bb, aa]   = [aa, bb];
  // change code above this line
})();
console.log(aa); // should be 6
console.log(bb); // should be 8

var [xx,yy, ...rest]  = [1,2,3,4];

console.log(xx, yy);
console.log(rest);

// Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  
  [,, ...rest] = list // change this
  var arrr = rest;
  // change code above this line
  return arrr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];



// ES6 - Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({max,min}) {
    // use function argument destructuring
    
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
console.log(stats);