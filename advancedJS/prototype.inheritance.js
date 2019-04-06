function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.greeting = function () {
  alert('Hi! I\'m ' + this.name.first + '.');
};

var person = new Person('Sudeep', 'patel', 34, 'Male', ['reading', 'programming', 'learning']);

console.log(person);

//inheriting Person object in Teacher object
function Teacher(first, last, age, gender, interests, subject) {

  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

var teacher = new Teacher('Sudeep', 'patel', 34, 'Male', ['reading', 'programming', 'learning'], "Electronics");
console.log(teacher);
console.log("No Methods inherited: " + Object.getOwnPropertyNames(Teacher.prototype));
console.log(Object.getOwnPropertyNames(Teacher.prototype));


// We need to get Teacher() to inherit the methods defined on Person()'s prototype. 
// So how do we do that?
// Add the following line below your previous addition:

Teacher.prototype = Object.create(Person.prototype);

// below reurns person object but we need techer object
console.log(Object.getOwnPropertyNames(Teacher.prototype));
console.log(Teacher.prototype.constructor);

//below is solution to set constructor properly
Teacher.prototype.constructor = Teacher;
console.log(Teacher.prototype.constructor);

// Giving Teacher() a new greeting() function
Teacher.prototype.greeting = function () {

  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};



// console.log(teacher.greeting());

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

console.log(teacher1.name.first);
console.log(teacher1.interests[0]);
// teacher1.bio();
console.log(teacher1.subject);
teacher1.greeting();
// teacher1.farewell();


function Brick() {
  this.width = 10;
  this.height = 20;
}


function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}

var brick = new Brick();

console.log(brick);
//   Note that we've only specified this inside call() — no other parameters are required as we are not inheriting any properties from the parent that are set via parameters.

function add(a, b) {
  return a + b;
}

add.nam = "sudeep";

console.log(add.name);
console.log(add.nam);
console.log(add.length);

var parent = {

  get: function () {

    return this.val;
  },
  val: 42
};

var child = Object.create(parent);
child.val = 3.14;

var grandChild = Object.create(child);

console.log("Parent: " + parent.get());
console.log("Child:" + child.get());
console.log(child.val);
console.log("Grand Child:" + grandChild.val);
console.log("Grand Child:" + grandChild.get());
console.log(add.prototype);


var answer = {
  get: function fn1() {
    return this.val;
  },
  val: 42
};


var firmAnswer = Object.create(answer);

firmAnswer.get = function fn2() {
  // return answer.get() + "!!"; 42!! unexpected reuslt
  return answer.get.call(this);
};

firmAnswer.val = 3.14;
console.log(firmAnswer.get()); //42!! unexpected reuslt
console.log(firmAnswer.get());


//dont set data in the funciton prototype only set functions

var AnswerPrototype = { // called classes
  get: function fn1() {
    return this.val;
  }
};


var lifeAnswer = Object.create(AnswerPrototype); //instance

lifeAnswer.val = 42;
console.log(lifeAnswer.get());


var desertAnswer = Object.create(AnswerPrototype);
desertAnswer.val = 43;
console.log(desertAnswer.get());

//here variable member variables are duplicated when initialize and duplicateing codes
//solution is to use constructor funciton to initialize the member variables and constructore

var AnswerPrototype1 = { // called classes
  constructor: function fn0(value) {
    this._val = value;
  },
  get: function fn1() {
    return this.val;
  }
};


var lifeAnswer1 = Object.create(AnswerPrototype1); //instance
lifeAnswer.constructor(42);



// classial model

function Answer3(value) {
  this._val = value;
}

Answer3.prototype.get = function fn1() {
  return this._val;
};

var lifeAnswer3 = new Answer3(42);
console.log("classical Model:" + lifeAnswer3.get());

// http://www.objectplayground.com/