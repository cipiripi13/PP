// 1. Write a program to insert a string within a string at a particular position (default is 1,
//     beginning of a string).
//     &quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
//     &quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;



// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
 
function joinNumb (array) {
    var string = '';
    for(i=0; i<array.length; i++){
        if(!!(array[i]) == true){
            string += array[i];
        } 
    } return string;
   
 }
 console.log(joinNumb([NaN, 0, 15, false, -22, undefined, 47, null]));
 console.log(typeof(joinNumb([NaN, 0, 15, false, -22, undefined, 47, null])));  //string

//  console.log(typeof undefined);
//  console.log(typeof NaN);
//  console.log(typeof null);
//  console.log(!!3);


// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]

function filter (array) {
    var newArr = [ ];
    for(i=0; i<array.length; i++){
        if(!!(array[i]) == true){
            newArr.push(array[i]) ;
            
        } 
    } return newArr;
   
 }
 console.log(filter([NaN, 0, 15, false, -22, undefined, 47, null]));
 console.log(typeof(filter([NaN, 0, 15, false, -22, undefined, 47, null]))); //object


//  4. Write a function that reverses a number. The result must be a number.
// 12345 -&gt; 54321 // Output must be a number


function reverseNumber(number) {
    var revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      console.log(revNumber);
      number = Math.floor(number / 10);
      console.log(number);
     
   
    }
    return revNumber;
  }
  console.log(reverseNumber(1876));
  console.log(reverseNumber(1234));

//   5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
// last &#39;n&#39; elements of the array.
// [7, 9, 0, -2] -&gt; -2
// [7, 9, 0, -2], 2 -&gt; [0, -2]

// function lastElement (array) {
//     var array = [];
//     for(i=0; i<array.length; i++){
//         console.log( array[array.length-1]);
//     }
//     return;
// }
// console.log(lastElement([7, 9, 0, -2]));
 var array = [7, 9, 0, -2];
for(i=0; i<array.length-1; i++){
    console.log( array[array.length-1]);
}

