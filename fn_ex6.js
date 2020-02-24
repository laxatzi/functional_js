// Pass arguments to avoid external dependencies in a function

/* 
   A main principle of functional programming is to always declare your dependencies explicitly. 
   This means that if a function depends of a variable or object being present, then pass that variable or object directly into the function as argument.
   This principle let us exactly what is the input the function takes, the function is easier to be tested and it won't depend on anything else on your program.

   This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.
   Finally the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

  EXERCISE:
  Let's update the increment() function so that it clearly declare its dependencies.
  Write the increment() function so it takes an argument, and then increases the value by one.

*/
(function(){
   'use strict';
   var fixedVal = 4;
   function incrementer(){
      // code goes here
   }
   var newValue = incrementer(fixedVal); // should equals 5
   console.log(fixedVal); // 4


   
}());//end wrapper iife

// EXERCISE 2 : REFACTOR GLOBAL VARIABLES OUT OF FUNCTIONS

/* 
   We have seen two distinct principles for functional programming:

   1) Do not alter a variable or object -- create new ones and return them from a function if there is need for that.
   2) Declare function arguments  -- any computation inside a function depends only on the arguments, nad NOT on any global object or variable.

   EXERCISE:

   Rewrite the code so the global array 'bookList' is not changed inside either function. The 'add' function should add the given 'bookName' to the end of an array. 
   The 'remove' function should remove the given 'bookName' from an array. Both functions should return an array, and any new parameters should be added before the 'bookName' parameter. 
*/

(function(){
  'use strict';
      let bookList = ["The Hound of the Baskervilles", "On the Electrodynamics of Moving Bodies"]

      // this function should add a book to the list and return the list
      // new parameters should come before bookName

              // Add your code below this line
                  function add (bookName) {

                     bookList.push(bookName);
                     return bookList;
                     
                     // Add your code above this line
                  }

      // this function should remove a book from the list and return the list
      // new parameters should come before the bookName one

            // Add your code below this line
               function remove (bookName) {
                  var book_index = bookList.indexOf(bookName);
                  if (book_index >= 0) {
               
                  bookList.splice(book_index, 1);
                  return bookList;
               
                  // Add your code above this line
                  }
               }
   var newBookList = add(bookList, 'A Brief History of Time');
   var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
   var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
             
   console.log(bookList); // 
             
}());//end wrapper iife


