var month = 3;
var result = '';

switch (month) {
    case 1:
        result = 'januar';
        break;
    case 2:
        result = 'februar';
        break;
    case 3:
         result = 'mart';
         break;
    default:
        result = 'not supported!!!'
}
console.log(result);

// Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. Print output in console.
// For input 1, output should be “Monday”.

var dayOfweek = 3;
result = '';

switch (dayOfweek){
    case 1:
        result = 'Ponedeljak';
        break;
    case 2:
        result = 'Utorak';
        break;
    case 3:
        result = 'Sreda';
        break;
    case 4:
        result = 'Cetvrtak';
        break;
    case 5:
        result = 'Petak';
        break;
    case 6:
        result = 'Subota';
        break;
    case 7:
        result = 'Nedelja';
        break;
}
console.log(result);

// Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

dayOfweek = 10;
switch (dayOfweek) {
    case 1:
        result = 'Ponedeljak';
        break;
    case 2:
        result = 'Utorak';
        break;
    case 3:
        result = 'Sreda';
        break;
    case 4:
        result = 'Cetvrtak';
        break;
    case 5:
        result = 'Petak';
        break;
    case 6:
        result = 'Subota';
        break;
    case 7:
        result = 'Nedelja';
        break;

    default:
        result = 'Input mora biti izmedju 1 i 7';
}
console.log(result);

// 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

dayOfweek = 6;

switch(dayOfweek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'radni dan';
        break;
    case 6:
    case 7:
        result = 'Vikend je';
        break;
    default:
        result = 'Broj mora biti izmedju 1 i 7';
        break;
}
console.log (result);

dayOfweek = 11;

switch(dayOfweek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'radni dan';
        break;
    case 6:
    case 7:
        result = 'Vikend je';
        break;
    default:
        result = 'Broj mora biti izmedju 1 i 7';
        break;
}
console.log (result);

// 4. Write a program that for a 1-12 number input (representing a month in a year) shows that
// month’s name. All other cases output a message explaining that input must be a number
// between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

 month = 2;

switch (month) {
    case 1:
        result = 'januar';
        break;
    case 2:
        result = 'februar';
        break;
    case 3:
        result = 'mart';
        break;
    case 4:
        result = 'april';
        break;
    case 5:
         result = 'maj';
         break;
    case 6:
         result = 'jun';
         break;
    case 7:
         result = 'jul';
         break;
    case 8:
         result = 'avgust';
         break;
    case 9:
         result = 'septembar';
         break;
    case 10:
         result = 'oktobar';
         break;
    case 11:
         result = 'novembar';
         break;
    case 12:
         result = 'decembar';
         break;
        
    default:
        result = 'Input must be a number between 1 and 12!!!'
}
console.log(result);
 month = 13;
 switch (month) {
    case 1:
        result = 'januar';
        break;
    case 2:
        result = 'februar';
        break;
    case 3:
        result = 'mart';
        break;
    case 4:
        result = 'april';
        break;
    case 5:
         result = 'maj';
         break;
    case 6:
         result = 'jun';
         break;
    case 7:
         result = 'jul';
         break;
    case 8:
         result = 'avgust';
         break;
    case 9:
         result = 'septembar';
         break;
    case 10:
         result = 'oktobar';
         break;
    case 11:
         result = 'novembar';
         break;
    case 12:
         result = 'decembar';
         break;
        
    default:
        result = 'Input must be a number between 1 and 12!!!'
}

 console.log(result);

//  5. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var monthOfYear = 5;
 switch (monthOfYear) {
    case 1:
    case 2:
    case 12:
        result = 'Godisnje doba - zima';
        break;
    case 3:
    case 4:
    case 5:
        result = 'Godisnje doba - prolece';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Godisnje doba - leto';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Godisnje doba - jesen';
        break;
                            
 }
 console.log(monthOfYear);

 monthOfYear = 12;
 switch (monthOfYear) {
    case 1:
    case 2:
    case 12:
        result = 'Godisnje doba - zima';
        break;
    case 3:
    case 4:
    case 5:
        result = 'Godisnje doba - prolece';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Godisnje doba - leto';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Godisnje doba - jesen';
        break;
                            
 }
 console.log(result);

//  6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
// message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
// &quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
// &quot;Unknown grade&quot;.
var grade = "B";
var resultGrade = " ";
switch(grade) {
    case "A":
        resultGrade = "Good job";
        break;
    case "B":
        resultGrade = "Pretty good";
        break;
    case "C":
        resultGrade = "Passed";
        break;
    case "D":
        resultGrade = "Not so good";
        break;
    case "F":
        resultGrade = "Failed";
        break;
    default:
        resultGrade = "Unknown grade";
        break;
}
console.log(resultGrade);

grade = "M";

switch(grade) {
    case "A":
        resultGrade = "Good job";
        break;
    case "B":
        resultGrade = "Pretty good";
        break;
    case "C":
        resultGrade = "Passed";
        break;
    case "D":
        resultGrade = "Not so good";
        break;
    case "F":
        resultGrade = "Failed";
        break;
    default:
        resultGrade = "Unknown grade";
        break;
}
console.log(resultGrade);

// 7. Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has
// to be at least 5 countries and 15 cities. Note that each country must have a different
// number of cities. Input different from the listed cities should output a message&quot;Please
// choose a different city&quot;.

var city = 'Nis';
switch(city) {
    case 'Rijeka':
    case 'Pula':
    case 'Rovinj':
        result = 'Hrvatska';
        break;
    case 'Zvornik':
    case 'Sarajevo':
    case 'Trebinje':
        result = 'Bosna'
        break;
    case 'Nis':
    case 'Beograd':
    case 'Loznica':
        result = 'Srbija';
        break;
    default:
        result = 'Grad nije na listi';
        break;
}
console.log(result);

city = 'Novi Sad';
switch(city) {
    case 'Rijeka':
    case 'Pula':
    case 'Rovinj':
        result = 'Hrvatska';
        break;
    case 'Zvornik':
    case 'Sarajevo':
    case 'Trebinje':
        result = 'Bosna'
        break;
    case 'Nis':
    case 'Beograd':
    case 'Loznica':
        result = 'Srbija';
        break;
    default:
        result = 'Grad nije na listi';
        break;
}
console.log(result);


// 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//     ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 10;
var b = 15;


switch(a + b){
 case a + b:
    result = a + b;
    break;
 case a - b:
    result = a - b;
    break;
 case a / b:
    result = a / b;
    break;

}
console.log(result);

switch(a / b){
    case a + b:
       result = a + b;
       break;
    case a - b:
       result = a - b;
       break;
    case a / b:
       result = a / b;
       break;
   
   }
   console.log(result);

   a = 0;
   switch(a / b){
    case a + b:
       result = a + b;
       break;
    case a - b:
       result = a - b;
       break;
    case a / b:
       result = a / b;
       break;
   
   }
   console.log(result);
   a = 100;
   b = 0;
   switch(a / b){
    case a + b:
       result = a + b;
       break;
    case a - b:
       result = a - b;
       break;
    case a / b:
       result = a / b;
       break;
   
   }
   console.log(result);

