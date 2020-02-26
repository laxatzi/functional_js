// Return part of an array using the slice method
/* 
   The 'slice' method returns a COPY of certain elements of an array.
   It can take two args, the first gives the index of where to begin the slice, the second is the index for where to end the slice (it is non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array all the way through the end of it. 
   This is an easy way to create a copy of an entire array.
   The 'slice' method does not mutate the original array, but it return a new one.
*/
(function(){
   'use strict';

   var arr = ["Cat", "Dog", "Tiger", "Zebra"];
   var newArr = arr.slice(1,3);
   // Sets newArray to ["Dog", "Tiger"]

}());//end wrapper iife

/* 
   Use the 'slice' method in the 'sliceArray' function to return part of the 'anim' array given the provided 'beginSlice' and 'endSlice' indices.(plural of index)
   The function should return an array.
   Exercise:    
*/ 
(function(){
    'use strict';
    function sliceArray(anim, beginSlice, endSlice){
         // add your code below this line
             var  sliceArray = [];
             slicedArray = anim.slice(beginSlice, endSlice);
             return slicedArray;
         
         // add your code above this line
    }
    
    var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);

}());//end wrapper iife

// REMOVE ELEMENTS FROM AN ARRAY USING SLICE INSTEAD OF SPLICE

/* 
    A common pattern when working with arrays is when you want to remove items and keep the rest of an array. Javascript offers the 'splice' method for this, which takes arguments for the index of where to start removing items, THEN the number of items to remove. If the second item is not provided, the default is to remove items through the end. 
    However the 'splice' method mutates the original array it is called on. Here is an example:
*/

(function(){
    'use strict';
    var cities = ["Chicago", "Athens", "Rome", "Istanbul"];
    cities.splice(2,1)//returns Rome and delete it
    console.log(cities); // ["Chicago", "Athens", "Istanbul"] 

}());//end wrapper iife

/* 
    As we saw in the last challenge, the 'slice' method does not mutate the original array, but returns an new one which can be saved into a variable. 
    Recall that the 'slice' method takes two arguments for the indices to begin and end the slice(the end is non-inclusive), and returns those items in a new array. Using the 'slice' method instead of 'splice' helps to avoid any array-mutating side effects.

    Exercise: 
    Rewrite the function 'nonMutatingSpace' by using 'slice' instead of 'splice'. 
    It should limit the provided 'cities' array to a length of 3, and return a new array
    with only the first three items.
    Do not mutate the original array provided to the function.
*/

(function(){
  "use strict";
  function nonMutatingSplice(cities){
     // add your code below this line
         return cities.slice(0,3);
     // add your code above this line
  }
  var inputCities = [
     "Chicago", "Delhi", "Islamabad", "London", "Berlin"
  ];

  console.log(nonMutatingSplice(inputCities);



}());//end wrapper iife