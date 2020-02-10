/* 
   The 'call()' method allows a function to be called by an object that is provided as the first arg.
   Inside the body function, the keyword 'this' is used to refer to the object function is called on.
*/

function sayHi(){
   return "Hi "+ this.name;
}

const man = {name:"Theophilos"};
const woman = {name: "Theodora"};

console.log(sayHi.call(woman)); // Hi Theodora
console.log(sayHi.call(man));  // Hi Theophilos

// If the function has arguments, these arguments are given in the same order "after" the first argument

function greet(greeting) {
   return greeting + " " + this.name;
}

console.log(greet.call(woman, "Hello")); // Hello Theodora
