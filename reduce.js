// Use the reduce method to analyze data

/* 
  'Array.prototype.reduce()', or simply 'reduce()', is the most general of all array operations in JS.
  You can solve almost any array processing problem using the 'reduce' method. 

  The 'reduce' method allows for more general forms of array processing, and it's possible to show that both 'filter' and 'map' can be derived as special applications of 'reduce'.
  The 'reduce' method iterates over each item in an array and returns a single value (string, number, object, array). This is achieved via a callback function that is called on each iteration.

  The callback function accepts four arguments. The first arg is known as the accumulator, which gets
  assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which 'reduce' is called.

  In addition to the callback function, 'reduce' has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

  See below for an example using 'reduce' on the 'users' array to return the sum of all the user's ages.
  For simplicity, the example only uses the first and second arguments.
  Example:
*/
(function(){
  'use strict';
  const users = [
     {name: "John", age: 45},
     {name: "Mike", age: 32},
     {name: "Bryan", age: 27}
  ]
  const sumOfAges = users.reduce((aggragetor, user)=>aggragetor+user.age, 0);
  console.log(sumOfAges); //104

}());//end wrapper iife

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

(function(){
  'use strict';
      const name = [
         {name: "John", age: 46},
         {name: "Kyle", age: 57},
         {name: "Jason", age: 56}
      ];

      const usersObj = users.reduce((obj, user) => {
         obj[user.name] = user.age;
         return obj;
      }, {});
      
      console.log(usersObj); //{ John: 34, Amy: 20, camperCat: 10 }

}());//end wrapper iife