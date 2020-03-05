// Every() Method
/* 
  The every method works with arrays to check if EVERY element passes a particular test.
  It returns a Boolean value -true if all values meat the criteria and -false if not.
  For example:
  var numbers = [2,4,8,0];

  numbers.every((currentValue)=> currentValue<10);  // true
*/
// Exercise
// Use the 'every' method inside the checkPositive function to check if every element in the arr is positive.

(function(){
   'use strict';
      function checkPositive(arr){
         // add code below this line
            return arr.every((currentValue)=> currentValue>0)
         // add code above this line
      }  
  console.log(checkPositive[1,2,3,-4,5]); // false 
}());//end wrapper iife

// Some Method
/* 
  The some method works with arrays to check if ANY element passes a particular test.
  It return a Boolean type value --true if any of the values meet the criteria and --false if not.
  For example: 
  The following code would check if any element in the numbers array is less than 10

  var numbers = [10, 29, 22, 100, 9];
  numbers.some((currentValue)=> currentValue<10); // true

  Exercise:
  Use the 'some' method inside the 'checkPositive' function to check if any element in 'arr' is positive. The function should return a Boolean value.
*/
(function(){
   'use strict';
    function checkPositive(arr) {
      // add code below this line
       return arr.some((currentValue)=> currentValue>0);
      // add code above this line
    }
    console.log(checkPositive([1,2,3,-4,5])); // true
    
}());//end wrapper iife