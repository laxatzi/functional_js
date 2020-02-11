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
<<<<<<< HEAD
=======


// Consider the following examples
// function Constructor

/* 
   When you use the 'new' keyword, it creates an instance of a constructor function or constructor class. 
*/

function Country(name, symbol, color){
   this.name = name;
   this.symbol = symbol;
   this.color = color;
   this.describe = function(){
      console.log(`${this.name} has a flag that is ${this.color} with a ${this.symbol} as a symbol`);
   }
}

const greece = new Country('Greece', 'white cross', "blue");
greece.describe();

// instead of a function constructor, we can use a class constructor

class Republic {
   constructor(name, year, flagColor){
      this.name = name; 
      this.year = year;
      this.flagColor = flagColor;
   } // end of constructor

      describe(){
         console.log(`${this.name} republic, founded in ${this.year} and has a ${this.flagColor} flag.`);
      }
   
}

const hellas = new Republic("Greece", 1821, "blue and white");
hellas.describe();

// This in DOM 
// there is a special 'this' context for event handlers. If an event handler is called by an eventListener, 'this' will refer to 'event.currentTarget'.
// Usually devs will simply use 'event.target' or 'event.currentTarget' to access elements in the DOM, but 'this' would also do.

// example:

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.append(button);

button.addEventListener('click', function(e){
   console.log(this);
})

// the above is the same as 
/* 
   button.addEventListener("click", function(e){
      console.log(this);
   })
*/

// Explicit Context
/* 
   In the prev examples the value of 'this' is determined by its context (global, in obj, in constructor, in DOM event handler).
   However, using 'apply' and 'call' we can EXPLICITLY determine 'this' reference.
   When to choose using 'call' over 'apply' and vice versa is not easy to define. It depends on the context of program.
   They are very similar-- they invoke a function with specified 'this' context, and optional args.
   The only difference between 'call' and 'apply' is that 'call' requires the args to be passed in one-by-one, and 'apply' takes the args as an array.

   example:
*/

const book = {
   title: "Aivaly, my homeland",
   writer: "Fotis Kontoglou",
}

function summary(){
   console.log(`${this.title} was written by ${this.writer}`);
}

summary(); // undefined was written by undefined

// as we see since 'book' object and 'summary' function have no connection, invoking 'summary' by itself will only print undefined.
// ** in 'use strict' (strict mode) this would print 'Uncaught Error: Cannot read property 'title' of 'undefined' 

// by using 'call' and 'apply' 

summary.call(book); // Aivaly, my homeland was written by Fotis Kontoglou

summary.apply(book); // Aivaly, my homeland was written by Fotis Kontoglou

// in addition to being able to pass the 'this' context as the first argument, you can also pass ADDITIONAL arguments .

function longerSummer(genre, year){
   console.log(`${this.title} was written by ${this.writer}. It is a ${genre} written in ${year}`);
}

// with 'call' you pass additional values that are sent as additional arguments

longerSummer.call(book, 'narrative', 1949); // Aivaly, my homeland was written by Fotis Kontoglou. It is a narrative written in 1949

// lets try do the same with 'apply'

//longerSummer.apply(book, "narrative", 1949); // Uncaught TypeError: CreateListFromArrayLike called on non-object at <anonymous>:1:15

// that is happening coz with apply you have to pass every arg in an array

longerSummer.apply(book, ["narrative", 1949]); // Aivaly, my homeland was written by Fotis Kontoglou. it is a narrative written in 1949.
>>>>>>> 40e32826ffad247a74ef7b94c7a5d16d318978d7
