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

