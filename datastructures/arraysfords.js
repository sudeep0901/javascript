let simpleArray = ["one", 2, true, NaN, null, undefined];

for(var i =0 ; i <simpleArray.length; i++) {
    console.log(simpleArray[i] + " type is: " + typeof simpleArray[i]);
}

let complexArray = [

    {
        fname:"Sudeep",
        lname:"Patel"
    },
    {
        fname:"manasvi",
        lname:"Patel",
        
    },
    

];

let propArray = ['fname', 'lname'];

for(i =0 ; i <complexArray.length; i++) {
    console.log(complexArray[i] + " type is: " + typeof complexArray[i]);
    console.log(complexArray[i].hasOwnProperty('fname'));

    //inlcudes method for look up in  array in JS
    console.log((propArray.includes('fname')));
    }

    
    let array = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    deleteElem = array.splice(array.length,-10,"new elemnt");
    deleteElem = array.splice(array.length,-10,"new elemnt1");
    console.log("array elements: " + array);
    deleteElem = array.splice(-3,0,"new elemnt2"); //left shift array
    console.log("array elements: " + array);
    // console.log(deleteElem);


    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    deleteElem = weatherConditions.splice(2,2);
    console.log("weather elements: " + weatherConditions);
    
// Basic Data Structures: Copy Array Items Using slice()

let weatherConditions1 = ['rain', 'snow', 'sleet', 'hail', 'clear'];
console.log(weatherConditions1.slice(1,2));
console.log(weatherConditions1);

// let todaysWeather1 = weatherConditions.slice(0, array.length);

// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
// console.log(todaysWeather);
// console.log(todaysWeather1);


let weatherConditions2 = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather2 = weatherConditions2.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
console.log(weatherConditions2);
console.log(todaysWeather2);

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
if(thisArray === thatArray) {
    console.log(true);
}
else {
    console.log(false);
}
console.log(thisArray);
console.log(thatArray);
// thisArray remains unchanged, and is identical to thatArray
thisArray1 = [true, true, undefined, false, null];
thatArray1 = thisArray1;

if(thisArray1 === thatArray1) {
    console.log(true);
}



// Basic Data Structures: Combine Arrays with the Spread Operator

let thisArray3 = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray3 = ['basil', 'cilantro', ...thisArray3, 'coriander'];

console.log("array combile using spread operator:" + thatArray3);


// Basic Data Structures: Check For The Presence of an Element With indexOf()
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

idx = fruits.indexOf('apples');
console.log("elemnt found is :" +idx);
idx = fruits.indexOf('apples');
console.log("elemnt not found is :" +idx);



// Basic Data Structures: Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.apples;
console.log("property removed using delete keyworkd:" +  foods);
console.log(foods);


const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1)); //only enumbrable properties
console.log([Object.keys(object1)]);
// expected output: Array ["a", "b", "c"]


console.log(Object.getOwnPropertyNames(object1)); // enumrables and non-enumerable
// expected output: Array ["a", "b", "c"]
