//The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects with only title and rating keys to the ratings variable. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.
{

  'use strict';

const watchList = [
   {
     "Title": "Inception",
     "Year": "2010",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Writer": "Christopher Nolan",
     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
     "imdbRating": "8.8"
   },
   {
     "Title": "Interstellar",
     "Year": "2014",
     "Genre": "Adventure, Drama, Sci-Fi",
     "Director": "Christopher Nolan",
     "Writer": "Jonathan Nolan, Christopher Nolan",
     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
     "imdbRating": "8.6"
   },
   {
     "Title": "The Dark Knight",
     "Year": "2008",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
     "imdbRating": "9.0",
   },
   {
     "Title": "Batman Begins",
     "Year": "2005",
     "Genre": "Action, Adventure",
     "Director": "Christopher Nolan",
     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
     "imdbRating": "8.3",
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