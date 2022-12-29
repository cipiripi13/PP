// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -&gt; 54321

function reverseNumber (number){
    var number = number + ''; // prvo ga konvertujemo u string jer ovo je metoda koja radi sa stringom
    var reverseN = parseInt(number.split('').reverse().join(''))
                        // u split broj postaje ['1', '2' itd]
                                  //reverse okrece clanove niza od poslednjeg ka prvom
                                  // i join niz vraca u string
                                  // ParseInt string i dobijamo broj
    return reverseN;
}
console.log(reverseNumber(12345));

/**************************************************************************************************
 * ************************************************************************************************/
// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”

function alphabeticalString(string){
    var newString = string.toLowerCase(); //prebacujemo u mala slova sve
    var array = newString.split(''); // sada rec postaje deo niza
    var sortedA = array.sort();  //sortira array
    return(sortedA.join('')); // prevodimo sve u string
 
}
console.log(alphabeticalString('Webmaster'));

/****************************************************************************************************
 * **************************************************************************************************/

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;
function alphabetizeWord(string) {
    var array = string.split(' '); //podelilo recenicu na tri clana niza "Republic" "Of" "Serbia"
    //console.log(array);
    for (var i = 0; i < array.length; i++) { // prolazimo kroz celu rec i ponovo delimo na slovo unutar stringa
        var subArray = array[i].split('');   
        //     'R', 'e', 'p',
        //     'u', 'b', 'l',
        //     'i', 'c'
        //   ]
        //   [ 'O', 'f' ]
        //   [ 'S', 'e', 'r', 'b', 'i', 'a' ]
        
        var sortedSub = subArray.sort(); // zatim sortiramo gde velika slova ostaju na pocetku
       // console.log(sortedSub);
        var result = subArray.join(""); //join nam niz vraca u string
        console.log(result);
    }   
}

alphabetizeWord('Republic Of Serbia')

/***********************************************************************************************************
 * *********************************************************************************************************/

// 4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]

function stringToArray ( string){
    var array = string.split(' ');  // bitno je da bude razmak izmedju navodnika
    return array;
}
console.log(stringToArray('John Snow')); //vrati ['John', 'Snow']

// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;


function abbreviatedString (string){
    var newString = '';
    newString = string.slice(0,6);  // slice - isece sve nakon indeksa 6, a pocinje od 0
    console.log(newString + '.');  
}
abbreviatedString('John Snow')

/***********************************************************************************************************
 * **********************************************************************************************************/
/* 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
'0000', ‘123’, 'l' -> '0123'
'00000000', ‘123’, 'r' -> '12300000' */

function addString (string1, string2, sideToAdd){
    var result = '';
    if(sideToAdd === 'l'){
        i = string1.length - string2.length;
        result = string1.slice(0,i) + string2;
    }
    if(sideToAdd === 'r'){
        i = string1.length - string2.length;
        result = string2 + string1.slice(0,i);
    }
    return result;
}
console.log(addString('0000', '123', 'l'));
console.log(addString('00000000', '123', 'r'));

/****************************************************************************************************************
 * **************************************************************************************************************/
// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;

function firstLtoUp (string){
    var result = '';
   for(var i =0; i< string.length; i++){
    if(i === 0){
        result = string[i].toUpperCase();
    } else {
       result +=  string[i];
    }
   }
   return result;
}
console.log(firstLtoUp('js string exercise'));

// II nacin bez petlje
 function capitalizeFirst ( string){
    var firstLetter = string.charAt(0);
    var converted = firstLetter.toUpperCase() + string.slice(1);
    return converted;
 }
  console.log(capitalizeFirst('js string exercise'));

/*****************************************************************************************************************
 * ***************************************************************************************************************/
// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot; 


function hideAdress (){
    var string = 'somerandomaddress@example.com';
    stringNew = string.replace('omaddress', '...')
    console.log(stringNew);
}
hideAdress();

/******************************************************************************************************************
 * *****************************************************************************************************************/

// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;

function convertString(string){
    var resultString = '';
   for(var i=0; i<string.length; i++){
    if(string[i] === string[i].toLowerCase()){
        resultString += string[i].toUpperCase();
    } else{
        resultString += string[i].toLowerCase();
    }
   }
   return resultString;
}
console.log(convertString('The Quick Brown Fox'));