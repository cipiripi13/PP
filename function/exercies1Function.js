// 1. Write a program that calculates the maximum of two given numbers.

function maximum(a, b) {

    if (a>b){
        return `Vrednost a je ${a} i ona je veca od ${b}`;
    
    } else if (b>a) {
        return `${b} je vece od ${a}`;
    
    }
    return "Brojevi su jednaki";
}
var c = maximum(7,8);
console.log(c);
console.log(maximum(7, 8));
console.log(maximum(33, 33));
console.log(maximum(56, 15));
console.log(maximum(3, 2));
console.log(maximum(-5, 6));

// 2. Write a program that checks if a given number is odd.

function chekTheNumber (a) {
    if(typeof a !== 'number'){
        return `Molimo Vas unesite broj`;
    }
    if(a%2==0){
        return `Broj ${a} je paran broj`;
    } if(a%2==1) {
        return `Broj ${a} je neparan broj`;
    }
    return;
}
console.log(chekTheNumber(56));
console.log(chekTheNumber(111));
console.log(chekTheNumber(888));
console.log(chekTheNumber('zdravo'));

// 3. Write a program that checks if a given number is a three digit long number.
function threeDigitNumb(a) {
    if(typeof a !== 'number'){
        return `Molimo Vas unesite broj`;
    }

    if(a >= 100 && a <= 999){
        
        return `${a} je trocifreni broj`;
    } else {
        return `${a} nije trocifreni broj`;
     
    }

}
console.log(threeDigitNumb(2356));
console.log(threeDigitNumb(235));
console.log(threeDigitNumb(12356));
console.log(threeDigitNumb('pozdrav'));

// 4. Write a program that calculates an arithmetic mean of four numbers.

function arithmetics (a,b,c,d){

    var arsr = ((a+b+c+d)/4);
    
    return arsr;
}
console.log(arithmetics(1,8,10,11));
console.log(arithmetics(11,28,10,111));
console.log(arithmetics(21,8,120,11));

// 7. Write a program that calculates a number of digits of a given number.

function count (a) {
    var brojac = 0;
    var broj = 1000;

 
}


// var number = 3;
// console.log(typeof(number));

function digits_count(n) {
  var count = 0;
  if (n >= 1) 
  ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

console.log(digits_count(12112));

console.log(digits_count(457));

// II nacin prevedi u string...
function count (n) {
    var num = String((Math.abs(n))).length;
    return num;   
} 


console.log(count(123));  // ➞ 3
console.log(count(-45678)); // ➞ 5
console.log(count(89128765));  // ➞ 8

// 8. Write a program that calculates a number of appearances of a given number in a
// given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// function appearances (n) {
//     var niz = [2, 4, 7, 8, 7, 7, 1,];
// var e = 7;
// brojacUcestalosti = 0;
// for(i=0; i<niz.length;i++) {
//     if(niz[i]==e){
//         brojacUcestalosti +=1;
//         } 

// }
// return brojacUcestalosti;
// }

// console.log(appearances(7));
// console.log(appearances(11)); //naovaj nacin sta god radila vraca 7
   

function calculateNumberOfAppearances(a, e) {

    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            result+= 1;
        }
    }
    return result;

}

console.log(calculateNumberOfAppearances( [2, 4, 7, 8, 7, 7, 1,], 7));
console.log(calculateNumberOfAppearances( [2, 4, 5, 8, 9, 1,], 7));


// 9. Write a program that calculates the sum of odd elements of a given array.

function oddElemOfArr (a) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i]%2 == 1) {
            result+= 1;
        }
    }
    return result;
}
console.log(oddElemOfArr([3, 5, 8, 6, 9])); //3
console.log(oddElemOfArr([3, 5, 8, 6, 9, 11, 15, 22])); // 5
console.log(oddElemOfArr([13, 15, 18, 16, 19, 101, 122, 17])); //5

// 10. Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.

function appOfLetterA (rec){
    if(typeof(rec) !== 'string'){
        console.log('Molimo Vas unesite rec');
    } 
    var brojac = 0;
    for(i=0; i<rec.length; i++){
        if(rec[i] === 'a'){
            brojac +=1;
        }
    }
    return brojac;
}
console.log(appOfLetterA(('jabuka')));
console.log(appOfLetterA(('Katarinaaa')));
console.log(appOfLetterA(('jabuka66')));
console.log(appOfLetterA((67980)));


//Modifikovan program, slovo a i A
function appOfdoubleA (rec){
    if(typeof(rec) !== 'string'){
        console.log('Molimo Vas unesite rec');
    } 
    var brojac = 0;
    for(i=0; i<rec.length; i++){
        if(rec[i] === 'a' || rec[i] === 'A'){
            brojac +=1;
        }
    }
    return brojac;
}
console.log(appOfdoubleA(('jabukaAAAA')));
console.log(appOfdoubleA(('KatarinA')));


// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function spoji (rec, vrednost){
    if(typeof(rec) !== 'string') {
        return 'Unesite rec';
    }
    var novaRec = '';
    for(i=0; i<vrednost; i++){
        novaRec +=rec;
    }
    return novaRec;
}
console.log(spoji('abc', 4));
console.log(spoji('mac', 2));