// Callbacks in functional javascript

/* 
   'Callbacks' are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in 'filter', the callback functions tells javascript the criteria for how to  filter an array.
   Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In Javascript all functions are first class functions.

   The functions that take a function as an argument, or return a function as a return value are called 'higher order' functions.

   When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a 'lambda'.
   */
  // Exercise:
  /* 
    The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. 

    With that information, we'll need to revisit the 'getTea' function from last challenge to handle various tea request. We can modify 'getTea' to accept a function as a parameter to be able to change the type of tea it prepares.
    This makes 'getTea' more flexible, and gives the programmer control when client requests change.
  
    Prepare 27 cups of green and 13 cups of black tea and store them in the  'tea4GreenTeamFCC' and 'tea4BlackTeamFCC' variables, respectively.
   Note that the 'getTea' function has been modified so it now takes a function as the first argument.
  */
    const prepareGreenTea = ()=> "green tea";
    const prepareBlackTea = ()=> "black tea";

    const getTea = (prepareTea, numOfCups)=> {
         const teaCups = [];

         for(let cup = 1; cup<= numOfCups; cup++){
            const teaCup = prepareTea();
            teaCups.push(teaCup);
         }

         return teaCups;
    }
    // edit code below this line
      const tea4BlackTeamFCC = null; // <-- change 
      const tea4GreenTeamFCC = null; // <-- change
   // edit code above this line
    console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);