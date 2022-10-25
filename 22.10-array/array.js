var a = 3; // tip podataka broj
var arr = [2, 'cao', false, null] //tip podataka niz sa ralizicitim tipovima podataka unutar njega
console.log (arr);




// 1. Write an array of months in a year. Using console.log display June, October and January
// from the array.
var meseci = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
console.log(meseci);
console.log(meseci.length);
console.log(meseci[5], meseci[9], meseci[0] );

//2. Write an arrays of days in a week. Using console.log display Sunday from the array.
var days = ['Ponedeljak', 'utorak', 'sreda', 'Cetvrtak', 'Petak', 'Subota', 'Nedelja'];
console.log(days[6]);

//3. Print all negative elements from the array [2, -4, 5, -2, -11].
var g = [2, -4, 5, -2, -11]
console.log(g[1], g[3], g[4]);

// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
//     72, 14, 9].

var h = [5, 15, -5, 20, 12, 18, 72, 14, 9]
console.log(h[1], h[4], h[5], h[6], h[8]);

// 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
// 10, 26, 7]];
var ar = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];
console.log(ar[0][3]);

// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

console.log(ar[3]);
console.log(ar[3][3]);

 