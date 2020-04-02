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
        "Title": "Batman Begins",
        "Year": "2005",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "imdbRating": "8.3"
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