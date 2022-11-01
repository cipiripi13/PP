// Write a program that will iterate from 0 to 10 and display squares of numbers.
var square;
for (i = 0; i<=10; i++){
    square = i**2;
    console.log(square);
}
console.log(square); // van bloka samo prikaze 100, poslednji broj

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
for (i = 0; i<=15; i++){
    if(i%2==0){
        console.log(`The number ${i} is even`);
    } else {
        console.log(`the number ${i} is odd`);
    }
}

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
var mul3 = 0;
var mul5 = 0;

for(i=0; i<=1000; i++){
    if(i%3==0){
        mul3 = i;
        mul3 += mul3;
    }
    if(i%5==0){
        mul5 = i;
        mul5 += mul5;
}
sum = mul3 + mul5;
} console.log(sum);

// 4. Write a program which prints the elements of the following array as a single string.
// var x = [1&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];

var x = [ 1, 'A', 'B', 'c', 'r', true, NaN, undefined];
var string = '';
for (i =0; i<x.length; i++){
    string +=x[i] + [];
    console.log(string);
} console.log(string);

// 3. Write a program to compute the sum and product of an array of integers.

const arr = [1, 2, 3, 4, 5];
 sum = 0;
var product = 1;
for ( i = 0; i < arr.length; i++) {
  sum += arr[i];
  product *= arr[i];
}
console.log(sum, product);


// 6. Write a program that outputs the sum of squares of the first 20 numbers.

sum = 0;
for (i = 0; i<=20; i++) {
    sum = sum + i**2;
} console.log(sum);


//
var poeni = [80, 77, 88, 95, 68];
var sumaoOcena = 0;
var prosecna =0;


for(i=0; i<poeni.length; i++){
   sumaoOcena = sumaoOcena +poeni[i];
   prosecna = sumaoOcena/(poeni.length);
  
}
console.log(sumaoOcena);
console.log(prosecna);

if(prosecna<=100 && prosecna>90){

    console.log("A");
} else if (prosecna<=90 && prosecna>80){
    console.log("B");
} else if(prosecna<=80 && prosecna>70){
    console.log("C");
} else if (prosecna<=70 && prosecna>60){
    console.log("D");
} else {
    console.log("F");
}

// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for(i=1; i<=100; i++) {
    if(i%3==0 && i%5 !==0){
        console.log("Fizz");
    } if(i%5==0 && i%3 !==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//modifed code

for(i=1; i<=100; i++) {
    if(i%3==0 && i%5 !==0){
        console.log("Fizz - " +`${i}`);
    } if(i%5==0 && i%3 !==0) {
        console.log("Buzz - " +`${i}`);
    } else {
        console.log("FizzBuzz");
    }
}
