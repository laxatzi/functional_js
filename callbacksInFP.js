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

    // another Exercise
    // lets create a function called 'sum()' that takes an array as an argument as well as a callback. the callback is used to transform the value of each arr item using the 'map()' method, and then using the 'reduce()' method to find the sum of all items in the array

    function sum(arr, callback){
       if(typeof callback === "function"){
          arr = arr.map(callback);
       }
       return arr.reduce(function(a,b){return a + b});
    }

    // the callback makes the function more flexible, it allows a transformation to be performed on all the numbers in the array before finding the sum. This means it can be used to find the sum of a set of numbers:
    function square(n){
       return n*n;
    }
    console.log(sum([3,4,5], square)); // 50

    // create a function by using other functions
function mean(arr){
   return sum(arr)/arr.length;
}
   function standardDeviation(arr){
      return sum(arr, square)/arr.length - square(mean(arr));
   }
  const anArr = [44,55,64]
   console.log(standardDeviation(anArr));//68.8


// Functions that return functions
// functions ara first class objects so they can accept a function as an argument and return another function.

// lets create power() function

function power(n){
   return function(power){
      return Math.pow(n, power);
   }
}

// we can now create new more specific functions that use the above generic one

const powerToExp = power(2);
console.log(powerToExp(5)); // 25

// if a function returns another function it can be immediately invoked by using double parenthesis

console.log(power(2)(4));// 16