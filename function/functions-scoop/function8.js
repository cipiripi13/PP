// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

 var result = (function replaceLastAndFirst (a){
 
var element = a[0];
a[0] = a[a.length-1];
a[a.length-1] = element;
return a;

}) ([4, 5, 11, 9]);
console.log(result);


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

var resultRectangle = (function surface (a, b) {
    var p = a*b;
    return p;
}
)(4, 5);

console.log(resultRectangle);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

 function appearances(string) {
    var counter = 0;
    var newstr = '';
    
for(i=0; i<string.length; i++){
    if(string[i] !== 'm' && string[i] !== 'M'){
        newstr += string[i];
    }
    else {
        newstr +='*';
        counter = counter + 1;
    }
    
}  
return ("Niz je " + newstr + " brojac se javlja " + counter);
}   
    console.log(appearances('programmm'));

    // 4. Write a function with parameters name and surname that returns a function that
    // suggests an email in the form name.surname@gmail.com.
    // Input: pera peric
    // Output: pera.peric@gmail.com

    var resultEmail = (function mail (name, surname){
       
        return (name + '.' + surname + '@gmail.com');
    } ) ('pera', 'peric');

    console.log(resultEmail);

//     5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28

var a = 034;
console.log(a);

var resultoctal = (function toOctalNumb(a){
    // console.log(a);
    return  a;
})(034);
console.log(resultoctal);


/******************************************************/ 
var result4 = (function returnFunction (){
    function decimalValue (a) {
        return (a)
    }
    return decimalValue(034);
}) ();
console.log(result4);

// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

// var resultValid = (function validPassword(string){
//     var isConditionTrue = ( function successCallback(string) {
//         var result = 'false';
//         if(string.length >= 6){
//             for(i=0; i<string.length; i++){
//                 if(isFinite(string[i])){
//                     result = 'is true';
//                 }
//             }
//         } return result;
//     }
//     )('kaca');

//     // var isconditionFalse = ( function errorCallback(string));
//     // if(isConditionTrue){
//         return "Your password is invalid!";
//     } else {
//         return "Your password is cool!";
//     }

// })();


// var isConditionTrue = ( function successCallback (string) {
//     var result = 'false';
//     if(string.length >= 6){
//         for(i=0; i<string.length; i++){
//             if(isFinite(string[i])){
//                 result = 'is true';
//             }
//         }
//     } return result;
// }
// )('kaca');
// console.log(isConditionTrue);

// var isconditionFalse = (function errorCallback(string) {
//     var result = false;

// } )();


// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var resultFilerOdd = (function odd (array){
    var arrayOdd = [];
    for(i=0; i<array.length; i++){
        if(array[i]%2 == 1){
            arrayOdd[arrayOdd.length] = array[i];
        }
    } return arrayOdd;
}) ([2, 8, 11, 4, 9, 3]);

console.log(resultFilerOdd);

