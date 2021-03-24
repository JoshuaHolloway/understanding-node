// Create object with an Object Literal
let person = {
  first_name: 'John',
  last_name: 'Doe',
  greet: function() {
    console.log('Hello, ' + this.first_name + ' ' + this.last_name);
  }
};
person.greet();
console.log(person['first_name']);
