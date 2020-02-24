// Use the Map Method to Extract Data from an Array

/* 
      Functional programming is centered around a theory of functions.
      Functions are considered first class objects in javascript, which means they can be used like any other object. 
      They can be saved as variables, stored in an object, or passed as function arguments.
      They are able to pass them as arguments to other functions, and return a function from another function.
      In this exercise we are looking at 'Array.prototype.map()' or more simply 'map'.
      The 'map' method  iterates over each argument in the array and returns a new array containing the results of calling the callback function on each element.    
      It does this without mutating the original array.
      When the callback is used it passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the 'map' method was called.
      
      Exercise:
      The 'watchList' array holds objects with information on several movies. Use 'map' on 'watchList' to assign a new array of object with only 'title' and 'rating' keys to the 'ratings' variable. 
      The code in the editor currently use a for loop to do this, you should replace it with a 'map' expression.

*/

(function(){
   'use strict';

    var watchList =[ {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },{
      "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
    }];

   // add your code below this line
      var ratings = [];
      for(var i=0; i<=watchList.length; i++ ){
            ratings.push({title: watchList[i]['Title'], rating: wathchList[i]["imbdRating"]});
      }

      /* 
        SOLUTION:
      var ratings = watchList.map(movie => ({ 
          title: movie["title"],
          rating: movie["imdbRating"]
       }))    */

   // add your code above this line
    
   console.log(JSON.stringify(ratings));

}());//end wrapper iife