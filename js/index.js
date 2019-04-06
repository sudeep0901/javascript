/**
 * 
 */

let user = {
	name : "sudeep1"
}

console.log(user);

admin = user;

console.log(user);
console.log(user);

console.log(admin);
user = null;

function marry(man, woman) {

	woman.husband = man;
	man.wife = woman;

	return {

		father : man,
		mother : woman
	}

}

let family = marry({

	name : "sudeep"
}, {
	name : "renu"
});

console.log(family);

delete family.father;
delete family.mother.husband;
console.log(family);
console.log(family);

let User = {
	name : "sudeep",
	sayHi : function() {
		alert('hello' + User.name);
	},
	sayHiShort() {
		alert('short Hello');
	}
};

sayHiExternal = function() {
	
	alert('exeternal Function' + this.name);
}


User.sayHiExternal = sayHiExternal;

//console.log(User.sayHi());

let Admin = User;
//User = null;
console.log(Admin);
//Admin.sayHi();
console.log(Admin);


User.f =sayHiExternal;

User.f();
User['f']();

let descripter = Object.getOwnPropertyDescriptor(User, 'name');
console.log(descripter);

let useArrow = {
		
		name:"Sudee Patel",
		sayHi() {
			let arrow = () => alert(this.name);
			arrow();
		}
}

alert((useArrow.sayHi || useArrows.stop)()); 

console.log(useArrow.sayHi());

describe("pow", function() {

	  it("raises to n-th power", function() {
	    assert.equal(pow(2, 3), 8);
	  });

	  it("2 raised to power 3 is 8", function() {
		    assert.equal(pow(2, 3), 8);
		  });

		  it("3 raised to power 3 is 27", function() {
		    assert.equal(pow(3, 3), 27);
		  });
	});

let user1 ={};

Object.defineProperties(user1, {
	  name: { value: "John", writable: false },
	  surname: { value: "Smith", writable: false },
	  // ...
	});

console.log(user1);

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user1));

console.log("Clone:" );
console.log(clone);
console.log(Object.isExtensible(clone));
console.log(Object.isFrozen(clone));

let getterSetter = {
		
		getter:"getter",
		setter:"setter",
		
		get getter() {
			return `${this.getter} ${this.setter}`;
		},
set setter(value) {
	
	[this.getter, this.setter] = value.split(" ");
}
};
console.log(getterSetter.getter);

getterSetter.setter ("Sudeep Patel");
console.log(getterSetter.getter);
