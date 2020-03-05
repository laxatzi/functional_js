// SPLIT METHOD 
// Split a string into an array using the split method

/* 
  The 'split' method splits a string into an array of strings. 
  It takes an argument for the delimiter, which can be a character to use to break up the string
  or a regular expression. 
  For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
  Here are two examples that split one string by spaces, then another by digits using a regular expression:


   var str = "Hello World";
   var bySpace = str.split(" ");

   // sets bySpace to ["Hello", "World"];


   var otherString = "How9are7you2today";
   var byDigits = otherStrings.split(/\d/);

   // sets byDigits to ["How", "are", "you", "today"];

*/
// Since strings are immutable, the 'split' method makes it easier to work with them

/* 
  EXERCISE:
  Use the 'split' method inside the 'splitify' function
  to split 'str' into an array of words.
  The function should return the array.
  Note that the words are not always separated by spaces,
  and the array should not contain punctuation.
*/
(function(){
  'use strict';
  function splitify(str){
    // Add your code below this line
        const newStr = str.split(/\W/); 
        return newStr;
    // Add your code above this line
  }
  
  console.log(spitify("Hello World, I am Code")); // ["Hello", "World", "I", "am", "code"]

}());//end wrapper iife

// Convert an array into a string using the Join method
/* 
  The 'join' method is used to join the elements of an array together to create a string.
  It takes an argument for the delimiter that is used to separate the array elements in the string.
  EXAMPLE:
  var arr = ["Hello", "World"];
  var str = arr.join(" ");
  console.log(str); // "Hello World"; 
*/
// EXERCISE:
// Set the 'join' method (among others) inside the sentensify function to make a sentence from the words in the string 'str'.
// The function should return a string. For example "I-like-star-wars" would be converted to "I like star wars". For this challenge do not use the replace method.

(function(){
  'use strict';
  function sentensify(str){
    // add code below this line
      const newStr = str.split(/\W/); 
      return newStr.join(" ");
    // add code above this line
  }
                 
  console.log(sentensify("May-the-force-be-with-you"));// "May the force be with you"

}());//end wrapper iife