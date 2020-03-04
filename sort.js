// Returning a Sorted Array Without Changing the Original Array
// Sort method in javascript
/* 
  The sort method sorts the elements of an array according to callback function
  Javascript's default sorting method is by string Unicode point value, which may return unexpected results. Therefor it is encouraged to provide a callback function to specify how to sort the array items. 
  When such a callback function, normally called 'compareFunction', is supplied, the array elements are sorted according to the return value of the 'compareFunction': 
  if 'compareFunction(a,b)' returns a value LESS than 0 for two elements a, and b, then a will come before b.
  if 'compareFunction(a,b)' returns a value GREATER than 0 for two elements a, and b, then b will come before a.
  if 'compareFunction(a,b)' returns a value equal to 0 for two elements a and b, then a and b will remain unchained.
  Example:
  Use the 'sort' method in the 'alphabeticalOrder' function to sort the elements of arr in alphabetical order.
*/
(function(){
  'use strict';
  function alphabeticalOrder(arr){
   // add your code below
     return arr.sort();
   // add your code above
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); //["a", "a", "c", "d", "g", "z"]


}());//end wrapper iife
/* 
  A side effect of the 'sort' method is that it mutates the original array.
  One way to avoid this is to first concatenate an empty array to the one being sort (remember that 'slice' and 'concat' methods return a new array, copy of the original one) and then run the sort method to the copied array.
EXERCISE:
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
The function should return a new array, and not mutate the old one.
*/
(function(){
   'use strict';
  var globalArr = [4,27,111,17];
  function nonMutatingSort(arr){
     // add code below
      const newArr = arr.slice();
      newArr.sort((a,b)=> a-b);
      return newArr;
     // add code above
  }
    nonMutatingSort(globalArr); // [4, 17, 27, 111]

}());//end wrapper iife
