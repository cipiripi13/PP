// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes


var i = 0; 
var e = 3; 
var a = [5, -4.2, 3, 7]; 
var result = "no";

for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
    
        result="yes";
        break;
    }
}-
console.log(result);

// II provera
var provera = [6, 7, 15, 8];
var result1 = "no";
for (i = 0; i < provera.length; i++) {
    if (provera[i] === e) {
        console.log(provera[i])
        result1="yes";
        break;
    }
}
console.log(result1)

///III provera

var provera3 = [15, 21, 7, 6, 14, 65];
var e3 = 114;
var result3 = "no";
for (var i = 0; i < provera3.length; i++) {
    if (provera3[i] === e3) {
        result3="yes";
        break;
    } else {
        result3 ="no";
        break;
    }
} console.log(result3);
console.log (provera3.includes(114, 0)); //vraca false


console.log (a.includes(3, 0));
console.log (a.includes(8, 0));


// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var niz = [-3, 11, 5, 3.4, -8];
var noviNiz = [];

//u noi niz upisala uvecane elemente
for(var i=0; i<niz.length; i++){
    if(niz[i]>0) {
        noviNiz[i] = niz[i]*2;
        noviNiz[noviNiz.length] = niz[i+1];
        
        console.log(noviNiz);
        
    }
} 
console.log(noviNiz);


//isti niz uvecani samo pozitivni elementi
var niz1 = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < niz1.length; i++) {
    if (niz1[i] > 0) {
        niz1[i] = 2*niz1[i];
    } 
}

console.log(niz1);



// 3. Write a program that finds the minimum of a given array and prints out its value and
//     index.
//     Input array: [4, 2, 2, -1, 6]
//     Output: -1, 3
    
    var arrMin = [4, 2, 2, -1, 6];
    var min = arrMin[0];
    var indexOfArr = arrMin[0];
    for(i=0; i<arrMin.length; i++){
        if(min > arrMin[i]) {
            min = arrMin[i];
            indexOfArr = i;
            
        }
    }
    console.log(min, typeof(min), indexOfArr);

//     4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var arrL = [4, 2, 2, -1, 6];
    min = arrL[0];  //postavljamo uslov da je minimum prvi clan i to proveravamo
    var newMin = arrL[0]; //promenljiva za novi minimum u drugoj for petlji
    for(i=0; i<arrL.length; i++){
        if(min > arrL[i]) {
            min = arrL[i]
        }
    } for(j=0; j<arrL.length; j++){
        if(min!==arrL[j] && arrL[j]<newMin) {
            newMin = arrL[j];
        }
    }
    console.log(`The minimum number after -1 is ${newMin}`);


    
//     5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var nizZaSum = [3, 11, -5, -3, 2];
var sumNiz = 0;
for(i=0; i<nizZaSum.length; i++) {
    if(nizZaSum[i] > 0){
        sumNiz += nizZaSum[i];
    }
} console.log(sumNiz);

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var arr6 =  [2, 4, -2, 7, -2, 4, 2];
var result6 = [];

for(i=0; i<arr6.length; i++){
    if(arr6[i] === arr6[arr6.length-1]-i){
        result6 = "The array is symetric";
    } else { 
        answer = "The array isn't symetric";
        break;
    }
    
}

console.log(result6);
   

// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

var arr6a = [3, 4, 12, 8];
var result6a =[];
for(i=0; i<arr6a.length; i++){
    if(arr6a[i] === arr6a[arr6a.length-1]-i){
        result6a = "The array is symetric";
    } else { 
        result6a = "The array isn't symetric";
        break;
    }
    
}

console.log(result6a);


 // 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
    // length.
    // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    // Output array: [4, 3, 5, 8, 6, 11, 2, 9]



     var a = [4, 5, 6, 2];
    var b =  [3, 8, 11, 9];
    var c = [];

    if(a.lenght == b.lenght){
        for (var i =0; i<a.length; i++){
            c[c.length] = a[i];
            c[c.length] = b[i];
         }
    }
    
    console.log(c);

//     8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var aa = [4, 5, 6, 2];
var bb = [3, 8, 11, 9];
var cc = [];

for(i=0; i<aa.length-1; i++){
         for(j=0; j<bb.length-1; j++) {
        cc = aa + "," + bb;
    }
}
 console.log(cc);

 // 9. Write a program that deletes a given element e from the array a.
    // Input: e = 2, a = [4, 6, 2, 8, 2, 2]

    var m9 = 2;
    var a0 = [4, 6, 2, 8, 2, 2];
 var nov = [];
    for( i=0; i<a0.length; i++){
        if(m9 === a0[i]){
            delete a0[i];
            nov = a0;
        }
    } console.log(nov);

    var a = [4, 6, 2, 8, 2, 2];
    var e = 2;
    var n = [];
    
    for (var i = 0; i < a.length; i++) {
        if (a[i]!== e) {
            n[n.length] = a[i];
    }
    }
    
    console.log(n);



    // 10. Write a program that inserts a given element e on the given position p in the array a. If
    // the value of the position is greater than the array length, print the error message.
    // Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    // Output: [2, -2, 33, 78, 12, 5, 8]
var eeeee = 78;
var p=3;
var a9 = [2, -2, 33, 12, 5, 8];
var result9=[];


for (var i=0; i < a9.length; i++) {
  if(p > a9.length) {
    console.log('Error');
    break;
  }
  if(i === p) {
    result9[result9.length] = eeeee;
  }
  result9[result9.length] = a9[i];
}
console.log(result9);





    
    