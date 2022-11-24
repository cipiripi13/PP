// 1. Write a program to insert a string within a string at a particular position (default is 1,
//     beginning of a string).
//     &quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
//     &quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;

function inserStr (str, insStr, pos){
    if(!pos){  //proveravamo da li smo poslali vrednost, ako nismo kreni od prvog parametra
        pos=1;  
    }
    var res = '';
    for(i=0; i<str.length; i++){
        if(i=== pos-1){  //napoziciji pos-1 insertuj tekst koji zelimo
            res +=insStr;
        }
        res +=str[i]; // u svim ostalim slucajevima samoprepisi ono sto smo vec dali u stringu
    }
    return res;
}
console.log(inserStr('neki mali tekst', 'js', 5));
// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
 
function joinNumb (array) {
    var string = '';
    for(i=0; i<array.length; i++){
        // if(!!(array[i]) == true)
        if (isFinite(array[i]) && array[i] !== null){  //potpunije resenje
            string += ' ' + array[i];
        
    } 
   
 }
 return string;
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



function lastElement (array, number) {
    if(!number){
        return array[array.length-1];
    }
    var arrayNew = [];
    for(i=(array.length-number); i<array.length;  i++){
        arrayNew[arrayNew.length] = array[i];
    }
    return arrayNew;
    
}
console.log(lastElement([7, 9, 0, -2],3));


//  var array = [7, 9, 0, -2];
// for(i=0; i<array.length-1; i++){
//     console.log( array[array.length-1]);
// }




// Write a function to create a specified number of elements with pre-filled numeric value
// array.
// 6, 0 -&gt; [0, 0, 0, 0, 0, 0]
// 2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
// 2 -&gt; [null, null]

function preFilled (numb, number) {
    var array = [];
    for (i=0; i<numb; i++){
        array.push(number);
    }
    return array;
}
console.log(preFilled(0,6))