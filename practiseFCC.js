//The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects with only title and rating keys to the ratings variable. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.
{

  'use strict';

const watchList = [
   {
     "Title": "Inception",
     "Year": "2010",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
     "imdbRating": "8.8"
   },
   {
     "Title": "Interstellar",
     "Year": "2014",
     "Genre": "Adventure, Drama, Sci-Fi",
     "Director": "Christopher Nolan",
     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
     "imdbRating": "8.6"
   },
   {
     "Title": "The Dark Knight",
     "Year": "2008",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
     "imdbRating": "9.0"
   },
   {
     "Title": "Batman Begins",
     "Year": "2005",
     "Genre": "Action, Adventure",
     "Director": "Christopher Nolan",
     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
     "imdbRating": "8.3"
    }
];
  // Old code
//  var ratings = [];
//  for(var i=0; i < watchList.length; i++){
//    ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
//  }

// refactored code
 const ratings = watchList.map( movie=> ({
    title: movie["Title"],
    rating: movie["imdbRating"]
 }) );

console.log(JSON.stringify(ratings));
 
}// end of block

//# 7
//The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

{
   'use strict';
   
   const watchList = [
      {
        "Title": "Inception",
        "Year": "2010",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "imdbRating": "8.8"
      },
      {
        "Title": "Interstellar",
        "Year": "2014",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "imdbRating": "8.4"
      },
      {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "imdbRating": "9.0"
      },
      {
       "Title": "Avatar",
       "Year": "2009",
       "Genre": "Action, Adventure, Fantasy",
       "Director": "James Cameron",
       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
       "imdbRating": "7.9"
      }
   ];

// Only change code below this line
 //  const filteredList;
// Only change code above this line

// solution
 const  filteredList = watchList.map( movie=> ({
   title: movie["Title"],
   rating: movie["imdbRating"]
}) ).filter(movie=> movie.rating >= parseFloat("8.5"));

// test
 console.log(filteredList);
 
}

// 8
// Rewrite the function "nonMutatingSplice" by using "slice" instead of "splice".
// It should limit the provided 'cities' array to a length of 3, and return a new array with only the first three items.

// Do not mutate the original array provided to the function

{
   'use strict';

   function nonMutatingSplice(cities) {
      // Only change code below this line
        return cities.slice(0,3);
      // Only change code above this line
    }
    const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];    
    console.log(nonMutatingSplice(inputCities));
}

// #9
//The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

{
   'use strict';
   const watchList = [
      {
        "Title": "Inception",
        "Year": "2010",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "imdbRating": "8.8"
      },
      {
        "Title": "Interstellar",
        "Year": "2014",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "imdbRating": "8.4"
      },
      {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "imdbRating": "9.0"
      },
      {
       "Title": "Avatar",
       "Year": "2009",
       "Genre": "Action, Adventure, Fantasy",
       "Director": "James Cameron",
       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
       "imdbRating": "7.9"
      }
   ];

   function getRating(watchList){
      // Only change code below this line
      const selectRatings = watchList.map( movie=> ({
         director: movie["Director"],
         rating: movie["imdbRating"]
      })).filter(movie=> movie.director === "Christopher Nolan"); // 
      
     const sumRating = selectRatings.map(movie=> parseFloat(movie.rating)).reduce((accumulator, movie)=> accumulator + movie);
      const averageRating = sumRating/selectRatings.length;
      // Only change code above this line
      return averageRating;
    }
    console.log(getRating(watchList));
   
}

// Sort method
/* 
  The sort method sorts the elements of an array according to a callback function.

  When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to return value of the compareFunction: if compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. if compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
  If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
*/

{
  'use strict';

  let numArr = [2, 1, 7, 3];

  function ascendingOrder(arr){
    return arr.sort(function(a,b){
      return a-b;
    });
  }
    console.log(ascendingOrder(numArr)); // [1,2,3,7];

  function descendingOrder(arr){
    return arr.sort(function(a,b){
      return b-a;
    });
  }
  console.log(descendingOrder(numArr)); // [6,3,2,1];
  
 let strArr = ['w', 's', 'a', 'b'];

 function reverseStr(arr){
   return arr.sort(function(a,b){
     return a === b ? 0 : a < b ? 1 : -1;
   });
  } // end of reversStr
  console.log(reverseStr(strArr));// ['w', 's' , 'b', 'a'];

 function straightStr(arr){
   return arr.sort(function(a,b){
     return a === b ? 0 : a > b? 1 : -1;
   });
 } // end of straightStr 

 console.log(straightStr(strArr)); // ['a', 'b', 's', 'w'];

}// end of block


{
// The global variable
const globalTitle = "Winter Is      Coming!";

// Only change code below this line
function urlSlug(title) {
 const titleWords = title.split(" ");
 const titleWordsGleaned = titleWords.map(word=> word.toLowerCase()).filter(word=> word !== "");
 const hyphenated = titleWordsGleaned.join("-");

 return hyphenated;
}
// Only change code above this line
  console.log(urlSlug(globalTitle));
}// end of block