 // Apply Functional Programming to covert strings to URL slugs

 /* 
   The problem:
   Many Content Management Sites (CMS) have the titles of a post added to part of the URL for bookmarking purposes. 
   For example if you write a Medium post named "Stop Using Reduce", it is likely the URL would have some form of the title string in it (../stop-using-reduce). 
   You may have already noticed this on the FCC site.
   EXERCISE:
   Fill in the function so it converts string title and returns the hyphenated version of the URL.
   You can use any of the methods covered in this section. 
   But do not use 'replace'.
   Here are the requirements:
     -- The input is a string with spaces and title-cased words
     -- The output is a string with the spaces between words replaced by a hyphen
     -- The output should be all lower-cased letters
     -- The output should not have any spaces


 */

 (function(){
  'use strict';

  // The global variable
  var globalTitle = "Winter Is Coming";
  // add code below this line
      function urlSlug(title){
         
      }
  // add code above this line
  var winterComing = urlSlug(globalTitle); // should be : "winter-is-coming"

 }());//end wrapper iife