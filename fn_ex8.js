// FP: Use the filter method to extract data from an area.

/* 
    Another useful array function is the filter() or Array.prototype.filter() function.
    'filter' calls a function on each element of an array and return a new array containing ONLY the elements for which that function returns true.
    In other words, it filters the array, based on the function passed to it.
    Like 'map' it does this without the need to modify the original array.
    The callback function accepts three arguments. 
    The first argument is the current element being passed.
   The second argument is the index of that element, 
   and the third argument is the array uppon which the 'filter' method was called.

*/

(function(){
   'use strict';
   const users = [
      {
         name: 'John',
         age: 45
      },
      {
         name: 'Maria',
         age: 25
      },
      {
         name: 'Orestis',
         age: 38
      },
      {
         name: 'Demetris',
         age:28
      }
   ]

   const userUnder30 = users.filter(user => user.age <= 30);
   console.log(userUnder30);

}());//end wrapper iife 

// Exercise:
/* 
      The variable 'watchList' holds an array of objects with information on several movies. 
      Use a combination of 'filter' and 'map' on watchList to assign a new array of objects with only 
      'title' and 'rating' keys. 
      The new array should only includes objects where 'imbdRating' is greater than or equal to 8.0.
      Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operation on them. 
*/

(function(){
   'use strict';

   var watchList = [
      {
         "Title": "Inception",
         "Year": "2010",
         "Rated": "PG-13",
         "Released": "16 Jul 2010",
         "Runtime": "148 min",
         "Genre": "Action, Adventure, Crime",
         "Director": "Christopher Nolan",
         "Writer": "Christopher Nolan"
      },
      {
         "Title": "Interstellar",
         "Year": "2014",
         "Rated": "PG-13",
         "Released": "07 Nov 2014",
         "Runtime": "169 min",
         "Genre": "Adventure, Drama, Sci-Fi",
         "Director": "Christopher Nolan",
         "Writer": "Jonathan Nolan, Christopher Nolan",
   },
   {
        "Title": "The Dark Knight",
         "Year": "2008",
         "Rated": "PG-13",
         "Released": "18 Jul 2008",
         "Runtime": "152 min",
         "Genre": "Action, Adventure, Crime",
         "Director": "Christopher Nolan",
         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay)
   }
]; // end of array   

    // add your code below this line

         var filteredList;
    // add your code above this line

    console.log(filteredLIst);

}());//end wrapper iife