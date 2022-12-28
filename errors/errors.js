console.log("test 1");
console.log("test 2");
console.log("test 3");

try{
    //console.log(b);
    var result = null;
    if(!result){
      //  throw new Error ("Something went wrong")
      throw {
        name : "Error",
        message: 'Something went wrong'

      }
    }
}
catch(error){

     console.log(error.message);
}


console.log("test 5");
console.log("test 6");
console.log("test 7");

/*********************************************************************************/
var error = new Error("Things happen o_O");

console.log(error.name); // Error

console.log(error.message); // Things happen 


/**********************************************************************************/

try {
    b ;
    console.log(b);
}
catch (error){

    console.log(error.message);

} 
finally {
    console.log("do it anyway");
}

/**************************************************************************************/

var error = new Error(message);

// or

var error = new SyntaxError(message);

var error = new ReferenceError(message);