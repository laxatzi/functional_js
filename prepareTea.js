// Learn about functional programming
/* 
   Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

   INPUT -> PROCESS -> OUTPUT

   Functional programming is about: 
   
   1) Isolated functions -- there is no dependence on the state of program (global variable).
   2) Pure functions -- same input always gives the same output
   3) Functions with limited side effects -- any changes, mutations, to the state of the program outside the function are carefully controlled
*/
// Exercise: 
/* 
   The members of freeCodeCamp happen to love tea:

   In the code editor, the 'prepareTea' and 'getTea' functions are already defined for you. Call the 'getTea' function go get 40 cups of tea for them, and store them in the 'tea4TeamFCC' variable
*/

const prepareTea = ()=> 'green tea';

const getTea = (numOfCups) => {
   const teaCups = [];
   // loop through number of cups
   for(let cups = 1; cups<=numOfCups; cups++){
      const teaCupGenre = prepareTea();
      teaCups.push(teaCupGenre);
   }
   return teaCups;
}
 // insert your code below this line

 // insert your code above this line
console.log(tea4TeamFCC);
