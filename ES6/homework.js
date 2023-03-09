
//DOMACI
// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: [&#39;hello&#39;, &#39;there&#39;, &#39;ES&#39;, 6]
// Output: [&#39;Hello&#39;, &#39;There&#39;, &#39;ES&#39;]
function capitalizeStrings(...args) {
  return args
    .filter((arg) => typeof arg === 'string')
    .map((arg) => arg.charAt(0).toUpperCase() + arg.slice(1));
}
const strings = capitalizeStrings('hello', 'there', 'ES', 6);
console.log(strings);

//prima proizvoljan br argumenta ...args
//filtriramo sve sto nije string
//mapiramo niz stringova koji ispunjavaju uslov i gde 



// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only
const taxRate = 20;
let articles = [
  {
    name: 'Banana',
    price: 120
  },
  {
    name: 'Orange',
    price: 100
  }];

 for(var i=0; i<articles.length; i++){
  //console.log(articles[i]);
  for(var j=0; j<articles[i].length; i++){
    console.log(j);
  }
 }


//  3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

let input = [4, 6, 11, -9, 2.1];
let increasedInput = input.map(i => i + 2);
console.log(increasedInput);

// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

let a = [6, 11, 9, 0, 3];
let filterEven = a.filter(e => e%2 ===0);
console.log(filterEven);

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: [&#39;compiler&#39;, &#39;transpiler&#39;, &#39;babel.js&#39;, &#39;JS standard&#39;, &#39;linter&#39;]
// Output: [&#39;babel.js, &#39;JS standard&#39;]

let inputArr = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'inter'];
let filterJs = inputArr.filter(a => a.includes('JS') || a.includes('js'));
console.log(filterJs);

//function expresion
function filterStrings(array){
  var arrNew = [];
  return (
    arrNew = array.filter(a => a.includes('JS') || a.includes('js'))
  )
}
console.log(filterStrings(inputArr));


//6.
// Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
//Output: [7, 8]
let arr = [1.6, 11.34, 9.23, 7, 3.11, 8];
let filterA = arr.filter(x => Number.isInteger(x));
console.log(filterA);

// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
// Output: [45, 553]

function filterIntegerAndNumber (...args){
  return(
    args.filter(a => Number.isInteger(a) && a.toString().includes('5'))
  )
}
console.log(filterIntegerAndNumber(23, 11.5, 9, 'abc', 45, 28, 553));

// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

function getIndexesGreaterThanTen(array){
  var arrayNew = [];
  for(var i=0; i< array.length; i++)
    if(array[i] > 10){
      arrayNew.push(i);
    }
    return arrayNew;
  
};
console.log(getIndexesGreaterThanTen([1.6, 11.34, 29.23, 7, 3.11, 18]));

// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
let x = [3, 11, 9, 5, 6];
let positive = x.every(x => x>0);
console.log(positive);

let y = [3, -12, 4, 11];
function chekPositive(array){
  return(
    array.every(a => a>0)
  )
};
console.log(chekPositive(y));

// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48
function productOfArray(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}
let o = productOfArray([2, 8, 3]);
console.log(o);

// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

let g = [2, 7, 3, 8, 5.4];

let maxN = args => Math.max(...args);
console.log(maxN(g));