// 1. Write a function to check whether the `input` is a string or not.
// &quot;My random string&quot; -&gt; true
// 12 -&gt; false

function chekForInput (rec) {
    if(typeof rec == 'number'){
        return 'Molimo Vas unesite rec';
    } if (typeof rec == 'string') {
        return "This input is true";
    }
}
console.log(chekForInput('macka'));
console.log((chekForInput(123)));


// 2. Write a function to check whether a string is blank or not.
// &quot;My random string&quot; -&gt; false
// &quot; &quot; -&gt; true
// 12 -&gt; false
// false -&gt; false

function chekForBlankInput (rec1) {
    if(typeof rec1 == 'number'){
        return 'false, unesite rec';
    } else if (typeof rec1 == 'string' && rec1 == '') {
        return 'true';
    } else {
        return 'false';
    }
    return;
}
console.log(chekForBlankInput(''));
console.log(chekForBlankInput(56));
console.log(chekForBlankInput('car'));

// Write a function that concatenates a given string n times (default is 1).
// &quot;Ha&quot; -&gt; &quot;Ha&quot;
// &quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot;

function novarec (stringRec, ponovi) {
    
    if(typeof (stringRec) !== 'string')
        return 'Molimo Vas unesite rec';
    


    var novarec = '';
   
        for(i=0; i<ponovi; i++){
             novarec += stringRec;
        }
        return novarec;
    }
    
console.log((novarec('ha', 3)));
console.log((novarec(123, 4)));

// Write a function to count the number of letter occurrences in a string.
// &quot;My random string&quot;, &quot;n&quot; -&gt; 2

function countN (rec3, slovo){
    if(typeof rec3 === 'number'){
        return "Enter a word";
    }
   
    
    
    // var jednarec = rec3.split("");

    var count = 0;


    for(i=0; i<rec3.length; i++){
        // console.log(rec3[i]);
        if(rec3[i] === slovo){
            count +=1;
        }
    }
 return count;
 } 

console.log(countN('myrandomstring', 'n'));
// console.log(countN(6778890, 'n'));
// console.log(countN('pas', 'n'));
// console.log(countN('pas', 'a'));

// Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function positionOfFirstLetter (word, character){

    var indexOfWord = 0;
    for(i=0; i<word.length; i++){
        if( word[i] == character){
            indexOfWord = word.indexOf(character);
            return indexOfWord;

        } else if ( word[i] == 0){
            return indexOfWord = -1;
        }
    } 
    return indexOfWord;
}
console.log(positionOfFirstLetter('kamilica', 'a'));
console.log(positionOfFirstLetter('mis', 'a'));

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function positionOfLastCharacter (word, character){

    var indexOfWord = -1;
   
    for( i= word.length-1; i >= 0; i--){

        if( word[i] === character){
            indexOfWord = i ;
           
            break;

        } 
    } 
    return indexOfWord;
}
 console.log(positionOfLastCharacter('macka', 'a'));
 console.log(positionOfLastCharacter('45678', '5'));

// var rec = 'macka';
// console.log(rec[rec.length-1]);
// console.log(rec.length);

// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// &quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
// &quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]

var string = 'macka mala';
var niz = [];
 for (i=0; i<string.length; i++){
    if(string[i] === ' '){
        niz[i] = null;
    } else {
        niz[i] = string[i];
    }
    
 }
 console.log(niz);

 function convert (string) {
  
// var string = ' ';
 var niz = [];

for (i=0; i<string.length; i++){
    if(string[i] === ' '){
        niz[i] = null;
    } else {
        niz[i] = string[i];
    }
    
 }
 return niz;
 }
 console.log(convert('macka'));
 console.log(convert('macka mala'));


//  8. Write a function that accepts a number as a parameter and checks if the number is prime or
//  not.
//  Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
//  divisors other than 1 and itself.


// var a = 3;
// broj_je_prost = true
// delilac = 2;
// while ( delilac < a ) {
//   if ( a % delilac == 0 )  {
//     broj_je_prost = false
//   }
//   delilac = delilac + 1
// }
// console.log(broj_je_prost);

function prostBr(a){
    var broj_je_prost = true
 var delilac = 2;
while ( delilac < a ) {
  if ( a % delilac == 0 )  {
    broj_je_prost = false
  }
  delilac = delilac + 1
}
return broj_je_prost;
}
console.log(prostBr(3));
console.log(prostBr(6));

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// &quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
// &quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
// &quot;My random string&quot; -&gt; &quot;My-random-string&quot;

function separatorOfSpace(string) {
    
    for(i=0; i<string.length; i++){
        if(string[i] === ' '){
           
         string[i] = '+' ;
      
        }
        
    } return string;
}
console.log(separatorOfSpace('kaca k'));

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
// ["1, "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

//var nizz = ["1", "21", undefined, "42", "1e+3", Infinity];
function convertsToNumb (arr){
    var output =[];
    for(i=0; i<arr.length; i++){
       parseInt(i);
     // console.log(parseInt(arr[i]));
      output[i] = parseInt(arr[i])

    
            
        }
        return output; 
    } 
console.log(convertsToNumb(["1", "21", undefined, "42", "1e+3", Infinity]));


//II nacin, vraca potpunije resenje bez NaN u nizu
function onlyNumbers(arr) {
    let output = [];
    //  Now we try to parseInt() each element, 
    //  and push a new Number() created with e as an argument.
    arr.forEach(e => { if (parseInt(e)) { output.push(Number(e)) } })
    return output
}
console.log(onlyNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));


// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function yearsToretirement (number, sex) {
    var retired = 65;
    if(number<65 && sex =='m'){
       return (`${(retired - number)} years left until this male to retire` );
       
    } else if (number<60 && sex =='f'){
        return (`${(retired - number)} years left until this female to retire` );
       
    } else if(number>65 && sex == 'm') {
        return ('This male persone already retiered');
        
    } else if (number>60 && sex == 'f') {
        return ('This female persone already retiered');
       
    }
   // return;
}
console.log(yearsToretirement(38, 'm'));
console.log(yearsToretirement(35, 'f'));
console.log(yearsToretirement(66, 'm'));
console.log(yearsToretirement(67, 'f'));

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -&gt; 1st
// 11 -&gt; 11th

// var numbeR = 44;
// var str = '';
// var add = 'th';
// if(numbeR%10 ==4) {
//     str = numbeR+add;
   
// }
// console.log(str);

function humanizeNumb (number) {
    var str = '';
    var first ='st'
    var second = 'nd'
    var addRd = 'rd'
 var addFour = 'th';

 if(number%10 ==1) {
   return str = number+first;
   
} else if(number%10 ==2) {
    return str = number+second;
} else if(number%10 ==3) {
    return str = number+addRd;
} else if (number%10 ==4) {
    return str = number+addFour;
}
}

console.log(humanizeNumb(22));
console.log(humanizeNumb(28));//undefined, howto return correct string
console.log(humanizeNumb(31));
console.log(humanizeNumb(53));
console.log(humanizeNumb(4));