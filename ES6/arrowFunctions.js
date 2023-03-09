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

//primeri sa prezentacije
const ar = [1, 2, 3, 4];
const double = ar.map(x=> x*2);
console.log(double);