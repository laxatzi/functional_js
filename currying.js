// Intro to Currying and Partial Application
/* 
    The 'arity' of a function is the number of arguments it requires. 
    Currying a function means to convert a function of N arity into N functions of arity 1(one)
    In other words, it restructures a function so it takes one argument, then returns another function
    that takes the next argument, and so on.
    Below is an example:
*/
(function(){
   'use strict';
   // un-curried function
   function uncurried(x,y) {
      return x * y;
   }

   // curried function
   function curried(x){
      return function(y){
         return x * y;
      }
   }

   // alt using ES6
   const curried = (x)=> (y)=> x*y;

   console.log(curried(5)(4)); // 20

}());//end wrapper iife

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it is available.

// An example using the curried function in the example above:
/* 
  var funcForY = curried(3);
  console.log(funcForY(2)); // prints 6

  Similarly, 'Partial Application' can be described as applying a few arguments to a 
  function at a time and returning another function that is applied to more arguments.
  An example below:
  
  // Impartial function
  function impartial(x,y,z){
     return x + y + z;
  }
  var partialFn = impartial.bind(this, 1, 2);
  partialFn(10); // 13


*/

// Exercise:
// Fill in the body of the 'add' function so it uses Currying to add parameters x ,y, z

(function(){
   'use strict';
    function add(x){
       // add code below this line
          
       // add code above this line
    }

    console.log(add(10)(20)(30)); // 60
}());//end wrapper iife
