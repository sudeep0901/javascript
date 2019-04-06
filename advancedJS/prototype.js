//prototype
// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain how prototype chains work and look at how the prototype property can be used to add methods to existing constructors.
// JavaScript is often described as a prototype-based language — each object has a prototype object, which acts as a template object that it inherits methods and properties from. 
// An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.
// In JavaScript, a link is made between the object instance and its prototype (its __proto__ property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes.
// Note: It's important to understand that there is a distinction between an object's prototype (which is available via Object.getPrototypeOf(obj), or via the deprecated __proto__ property) and the prototype property on constructor functions. The former is the property on each instance, and the latter is the property on the constructor. That is, Object.getPrototypeOf(new Foobar()) refers to the same object as Foobar.prototype.

// Understanding prototype objects

function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests =interests;
    //...
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1);
console.log(person1.__proto__);
console.log(Object.getPrototypeOf(person1));

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
console.log(person3);

console.log(person1.constructor.name);

// Modifying prototypes
Person.prototype.farewell = function() {

    alert(this.name.first + ' has left thebuilding');

};
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person1.farewell();