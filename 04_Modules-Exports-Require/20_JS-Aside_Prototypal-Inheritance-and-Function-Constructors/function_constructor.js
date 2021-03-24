// function constructor
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

let john = new Person('John', 'Doe');
console.log(john);
