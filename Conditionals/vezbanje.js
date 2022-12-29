// Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

var number = -7;

if (number < 0) {
    console.log  ("The sign is -");
} else {
    console.log ("The sign is +");
};

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
// console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

if ( -5 > 0) {
    console.log ('-5');
} else if ( -2 > 0) {
    console.log ('-2');
} else if (-6 > 0) {
    console.log ('-6')
} else {
    console.log ('O');
};

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1



// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X

if ( 10%2 ===0){
    console.log ("The number is divede by 2, the result is 5");
} else {
    console.log ("Show x");
};

if ( 7%2 ===0){
    console.log ("The number is divede by 2" );
} else {
    console.log ("Show x");
};

//Task 5. Write a program that compares two numbers and displays the larger. Display the result in
//the console.

var c = 88;
var d = 95;
if (c>d){
    console.log(c);
} else {
    console.log(d);
};

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F
var c=60; 
var f=0;
var result="";
if (f=(9*c/5) +32) {
    result= c +"°C is " + f + "°F"
}
console.log(result) 

// Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11           Sample Input: 32
// Output : 2                       Output : 38

var firstNumb = 11;
var secondNumb = 32;
var givenNumb = 13;
if(firstNumb>givenNumb){
    console.log((firstNumb-givenNumb)*2);
} else{
    console.log(2);
};

if(secondNumb>givenNumb){
    console.log((secondNumb-givenNumb)*2);
} else{
    console.log("13 is not bigger than 32");
};

a=11;
b=32;
if(a <= 13) {
  console.log(13- a);
}else if( a >= 13) {
  console.log((a-13) *2);
}
if(b <= 13) {
  console.log(13- b);
}else if( b >= 13) {
  console.log((b-13) *2);
}

// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5       Sample Input: 8,8
// Output : 17         Output : 48

var first = 12;
var second = 5;
if(first == second) {
    console.log((first + second)*3);
} else {
    console.log(first + second);
};

var treciBr = 8;
var cetBr = 8;

if(treciBr == cetBr) {
    console.log((treciBr + cetBr)*3);
} else {
    console.log(treciBr + cetBr);
};

function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));

//   Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
// Output : -             Output : true           Output : true

var m = 5;
var n = 54;
if (m == 50 || n == 50 || (m + n == 50)) {
    console.log(true);
} else {
    console.log('-');
};

m = 6;
n = 50;
if (m == 50 || n == 50 || (m + n == 50)) {
    console.log(true);
} else {
    console.log('-');
};

m = 40;
n = 10;
if (m == 50 || n == 50 || (m + n == 50)) {
    console.log(true);
} else {
    console.log('-');
};


// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13                 Sample Input: 34                 Sample Input: 256
// Output : -                     Output : 20 ⇔ 100                  Output : 100 ⇔ 400
 
a = 13;
b = 34;
c = 256;
  
if ( a>20 && a<100) {
    console.log("20 ⇔ 100 ");
} else {
    console.log("-");
};

if ( b>20 && b<100) {
    console.log("20 ⇔ 100 ");
} else {
    console.log("-");
};

if ( c>100 && c<400) {
    console.log("100 ⇔ 400");
} else {
    console.log("-");
};
