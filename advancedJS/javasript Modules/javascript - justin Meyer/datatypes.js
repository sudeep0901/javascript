un = undefined;
var Null = null;
var str = 'a';

console.log(un);


console.log(un == undefined);
console.log(un === undefined);
console.log(un === null);
console.log(isNaN(str));
str = 4;
console.log(isNaN(str));

// object

var me = {
        name: {
            first: "Sudeep"
        }
    },
    fname = me.name;

// /fname = me.name;
console.log("Before Delete:" + fname);
console.log(fname);
console.log(fname.first);

delete me.name; // delete only removes references and not the value
console.log("After Delete:" + fname.first);

delete me; //do not do anything

console.log(delete me); //return false and not allowed variabels shoudl not be deleted

console.log("arguments" + typeof arguments);
console.log(fname);

// console.log(me);
// console.log(me.name);
// console.log(me.name.first);
// console.log(typeof me);
// console.log(typeof me.name);
// console.log(typeof me.__proto__);
// console.log(Object.getPrototypeOf(me));

str = "Sudeep";

for (var ch in str) {
    console.log(ch + str[ch]);
}
var arr = new Array(str);


console.log(21 == "21"); //true
console.log({} === {}); // false
console.log(isNaN(NaN)); //false
console.log(undefined === null); //false
console.log(undefined == null); //true


var a = [];

for (var i = 0; i < 3; i++) {

    a[i] = function () {
        alert(i);
    };
}

console.log(a);
a[0]();
a[1]();
a[2]();

// closures 
var counter = function () {
    var count = 0;
    return function () {
        return ++count;
    };
};


// closures 
var c1 = counter();

console.log(c1());
// console.log(c1().count);
console.log(c1());

var c2 = counter();
console.log(c2());
console.log(c2());




arr.forEach(function (item, index, str) {
    console.log(item, index, str);
});
