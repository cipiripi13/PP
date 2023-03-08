//SPREAD operator
let a =[1, 2, 3, 4, 5, ];
let b =[ 6, 7, 8, 9, 10];

//nov nacin kako da psojimo ova dva niza 
let c = [...a, ...b];
console.log(c);

//prosipamo clanove u novom nizu redosledom kojim zelimo da se pojave
// i mozemo sami naknadno ubacivati clanove
let d = [...b, ...a, 55, 22];
console.log(d);

// spread oper. najlaksi nacin da se dobije niz sa novom referencom u memoriji
// niz ce izgledati isto kao, imace iste clanove ali novo mesto u memoriji
let aCopy = [...a];

//Spread on objects
let user = {
  name: 'Pera',
  lastName: 'Peric',
  age: 33,
  id: 333,
}

const extendedUser = {...user, street: 'TPO'};
console.log(extendedUser); //prosirili smo obj jos jednim propertijem

//REST operator
const aa = [1,2,3,4,5];
const bb = [6,7,8,9,10];
const [firstEl, ...ostalo] = aa;
console.log(firstEl);  //1
console.log(ostalo);  //2,3,4,5
const [first, , , ...rest] = aa;
console.log(rest); //4,5

//mozemo i skupiti objekat, da ima manje clanova
let user1 = {
  name: 'Pera',
  lastName: 'Peric',
  age: 33,
  id: 333,
};
let {name, ...restofUser} = user1;
console.log(restofUser); // stampace sve samo bez imena

