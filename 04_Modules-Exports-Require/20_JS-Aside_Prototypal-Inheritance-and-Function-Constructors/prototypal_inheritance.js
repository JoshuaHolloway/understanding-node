// function constructor
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

// -Recall, functions are special types of objects.
// -prototype is an object that is a property of all function objects
// -We can attach a function property to prototype:
Person.prototype.greet = function() {
  console.log('Hello ' + this.first_name + ' ' + this.last_name);
};

// When you use a function-constructor, any object created from the function constructor
// has a prototype that will point to the prototype property
// of the function that was used to construct the object.

const john = new Person('John', 'Doe');
console.log(john);

// greet can be used now
john.greet();

const jane = new Person('Jane', 'Doe');
jane.greet();

// Look at the prototype
console.log(john.__proto__);
console.log(jane.__proto__);

// both jane and john have access to the exact same protype
console.log(john.__proto__ === jane.__proto__);
