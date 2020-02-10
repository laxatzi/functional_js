// example of a random() function returning a random integer between two parameters, a and b.
// if only one argument is supplied it will return a random number between 1 and that argument's value

function random(a,b){
   if(b===undefined)b=a, a=1; // if only one argument is supplied, assume the lower limit to be 1, and the argument be the upper limit

   return Math.floor((b-a+1)*Math.random())+a;
}

console.log(random(4));

// The above function is an example of an abstraction, as it wraps all the logic inside the function

// functions should not only be abstract but also non-altering regarding the underlying data they deal with.

function reverseStr(str){
   var arrFromStr = str.split("");
   arrFromStr.reverse();
   return arrFromStr.join("");
}

// the above function does NOT change the value of the provided as an argument string
var string = "Thessaloniki";
console.log(reverseStr(string));
console.log(string);