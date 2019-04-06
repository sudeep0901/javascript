//Creating objects using object Literal
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {

        alert("Hi!, I am " + this.name);
    };

    return obj;
}

var sudeep = createNewPerson("Mansavi");
console.log(sudeep);

// Create objects using constructuor function
function Person(name) {
    this.name = name;
    this.greeting = function () {
        console.log("Hi!, My name is:" + this.name);
    };
}

var person1 = new Person('Bob');
var person2 = new Person('Sarah');


console.log(person1);
console.log(person2);

console.log(person1.name);
person1.greeting();

var func = person1.greeting;

console.log(person2.name);
person2.greeting();


function FinalPerson(first, last, age, gender, interests) {

    this.name = {
        'first': first,
        'last': last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {

        alert(this.name.first + ' ' + this.name.last + ' is');
    };

    this.greeting = function () {
        alert(this.bio());
    };
}

var personFinal = new FinalPerson('sudeep', 'patel', 34, 'Male', ['Music', 'Reading']);

console.log(personFinal);


// Other ways to create object instances

var objectPerson = new Object({});
console.log(objectPerson);

objectPerson.name = "Create object using Object() Method";
console.log(objectPerson);


var objectPerson1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function () {
        console.log("I am created using object literal");
    }

});
console.log(objectPerson1);



// Using the create() method

var createPerson = Object.create(personFinal);

console.log(createPerson);


console.log(createPerson.name);
console.log(person1 === createPerson);
console.log(person1 == createPerson);

var copyPerson = createPerson;
console.log(copyPerson === createPerson);

var newPersonObject = new Object(createPerson);
console.log(newPersonObject === createPerson);

var copyCreatePerson = Object.create(createPerson);
console.log(copyCreatePerson === createPerson);
// One limitation of create() is that IE8 does not support it. So constructors may be more effective if you want to support older browsers.