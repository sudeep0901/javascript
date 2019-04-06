// Object Oriented Programming: Understand the Prototype Chain
// 
function Animal() {}

Animal.prototype = {
  constructor:Animal,
  describe:function() {
      console.log("My Name is : " + this.name);
  }
}

Bird.prototype = {
  constructor: Bird,
  
};

function Bird(name) {
  this.name = name;
  Animal.call(this);
}


typeof Bird.prototype; // => object

console.log(Object.prototype.isPrototypeOf(Bird.prototype));

//Inheritance

Bird.prototype = {
  constructor: Bird,
  
};



brd = new Bird("Sudeep");
// brd.Animal.describe("hello");
