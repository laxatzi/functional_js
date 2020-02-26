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
