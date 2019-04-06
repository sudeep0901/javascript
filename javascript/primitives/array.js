var arr = new Array(1, 2, 3, 4);
var arr1 = new Array(5, 2, 3, 4);

console.log(arr);
console.log(arr.length);
arr.length = 100;
console.log(arr.length);
console.log(arr);
arr = arr.concat(arr1);
console.log(arr);

arr1 = arr1.shift();
console.log(arr1);

var arr2 = new Array(1, 2, 3, 4);
arr2.shift();
console.log(arr2);
arr2.unshift(1);
console.log(arr2);

console.log(arr2.indexOf(4));

var removedItem = arr2.splice(2, 1);
console.log(removedItem);
console.log(arr2);

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

var shallowCopy = vegetables.slice();
console.log("shallow copy", shallowCopy);
console.log(vegetables == shallowCopy);

console.log(vegetables);
deletedVeggies = vegetables.splice(2, 1);
console.log(vegetables);
console.log(deletedVeggies);

var shallowCopy = vegetables.slice();
console.log(shallowCopy);


intializeBlankArray = new Array(10);

console.log(intializeBlankArray);

undefinedArray = new Array();
console.log(undefinedArray);

undefinedArray.length = 100;
console.log(undefinedArray);
console.log(arr2['2']);

var promise = {
    'var': 'text',
    'array': [1, 2, 3, 4]
};

console.log(promise['var']);
console.log(promise.var);



var fruits = [];
fruits.push('banana', 'apple', 'peach');
keys = Object.keys(fruits)
console.log(Object.keys(fruits));

keys.forEach(element => {
    console.log(element);
    console.log(fruits[element]);

});
keys = Object.keys(undefinedArray)
console.log(Object.keys(undefinedArray));

undefinedArray.forEach(element => {
    console.log(element);
    console.log(undefinedArray[element]);

});

fruits.length = 1;

console.log(fruits);

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');

console.log(myArray);

console.log(myArray.input);
console.log(myArray.index);

console.log(myArray[0], myArray[1], myArray);


console.log(myArray[0], myArray[1], myArray);

console.log(Symbol());

var myObj = {};

var fooSym = Symbol('foo');

var otherSym = Symbol('bar');

myObj[fooSym] = 'foo';
myObj[otherSym] = 'bar';

console.log(myObj);

console.log(Object.keys(myObj));

console.log(Object.getOwnPropertyNames(myObj));

let users = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];



let user = users.find(item => item.id < 3);
let userIdcx = users.findIndex(item => item.name = "John");

console.log(user);

console.log(userIdcx);

let users1 = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];

// returns array of the first two users
let someUsers = users1.filter(item => item.id < 3);

console.log(someUsers.length); // 2
console.log(someUsers); // 2

let userMap = users1.map(item => item.name);
console.log(userMap);

let arrSort = [1, 2, 15];
//   The items are sorted as strings by default.
console.log(arrSort.sort());

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(arrSort.sort(compareNumeric));

let names = 'sudeep manasvi, renu';

let arrNames = names.split(',');

console.log(arrNames);

var name = 'sudeep';

console.log(name.split(''));

let arrJoin = arrNames.join(',');

console.log(arrJoin);

let arrReduce = [1, 2, 3, 4, 5];

console.log(arrReduce.reduce((sum, current) => sum + current, 0));


function camelinz(str) {
    return str
    .split('-') // my-long-word -> ['my', 'long', 'word']
    .map( 
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
    .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}

console.log(camelinz('background-color'));