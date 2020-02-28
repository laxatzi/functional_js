// Combine Two Arrays Using the Concat Method
/* 
    Concatenation means to join items end to end. 
    Javascript offers the 'concat' method for both strings and arrays that work in the same way.
    For arrays, the method is called on one, then another array is provided as the argument to 'concat', which is added to the end of the first array. It returns a new array and does not 
    mutate either of the original arrays. Here is an example:
    [1,2,3].concat([4,5,6]); // returns a new array: [1,2,3,4,5,6]
    Exercise:
    Use the 'concat' method in the 'nonMutatingConcat' function to concatenate 'attach' to the end of
    'original'. The function should return the concatenated array.

*/

(function(){
  'use strict';
  function nonMutatingConcat(original, attach){
     // add code below this line
         return original.concat(attach);

     // add code above this line

     var first = [1,2,3];
     var second = [4,5];

     console.log(nonMutatingConcat(first, second));
  }

}());//end wrapper iife

// Add Elements to the End of an Array Using concat Instead of push
/* 
    Functional programming is all about creating and using non-mutating functions.

    The last challenge introduced the 'concat' method as a way to combine arrays into a new one
    without mutating the original arrays. Compare 'concat' to the 'push' method. 'Push' adds an item 
    to the end of the same array it is called on, which mutates that arrays. 
    Here is an example: 

*/

(function(){
  'use strict';
  var arr = [1,2,3];
  arr.push([4,5,6]);

}());//end wrapper iife

/* 
  Change the 'nonMutatingPush' function so it uses 'concat' to add 'newItem' to the end of 'original' instead of 'push'. The function should return an array
*/

(function(){
  'use strict';
  function nonMutatingPush(original, newItem){
     // add code below this line
        
     // add code above this line
  }

  var first = [1,2,3];
  var second = [4,5];
  console.log(nonMutatingPush(first, second));
}());//end wrapper iife