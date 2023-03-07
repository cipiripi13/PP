//function declaration
const sum = function (a, b) {
  return a + b;
}

//arrow function
const sum1 = (a, b) => {
  return a + b;
};
//kod neke proste logike dodatno skracujemo kod -- ako imamo samo jedan izraz
// Izbacujemo {}, kao i return
//iza zavese js ubacuje sam return 
const sum2 = (a, b) => a + b;
console.log(sum2(22, 33));

const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

//map, filter --- kao arrow f-je
let oArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mappedArr = oArr.map((number) => number + 100);
console.log(mappedArr);

const filteredArr = oArr.filter((number) => number % 2 == 0);
console.log(filteredArr);

const isTrue = oArr.some(number => number % 10 === 0)
console.log(isTrue);

const isTrueCondition = oArr.every(number => number % 2 === 0);
console.log(isTrueCondition);

const str = 'flexiple';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);












/**********************************************************************/
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


//6.
// Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
//Output: [7, 8]
let arr = [1.6, 11.34, 9.23, 7, 3.11, 8];
let filterA = arr.filter(x => Number.isInteger(x));
console.log(filterA);