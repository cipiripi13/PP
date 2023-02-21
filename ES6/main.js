//Promene u ES6
// 1. uvodnje let
// 2. arrow fje
// 3. nov nacin pisanja strigova


function test (){
    let a = 10;
}
//console.log(a);  //a is not defined

var array = [111, 222, 333, 444, 555];

for(let i=0; i< array.length; i++){
    let currentEl = array[i];
}
//console.log(currentEl);  //currentEl is not defined
//console.log(i);   // ne mozemo citati promenljivu van bloka
// to je taj block scoope

//Sa var je bilo moguce --- ima taj funkcionalni tj. global scoope
for(var i=0; i< array.length; i++){
    var currentEl = array[i];
}

console.log(currentEl);  ///555
console.log(i);           //5


const b = 5;
//b = 3;    //TypeError: Assignment to constant variable.
// odmah dolazi do greske i do pucanja koda

// dodavanje clanova kod referentnih tipova vrednost moguce
const c = [1, 2, 3];
c.push(4);
console.log(c);   //  [ 1, 2, 3, 4 ]   // ovo je isti niz gde je samo doslo do ubacivanja vrednosti, ima istu referencu

//c = [4, 5, 6];
// console.log(c);   //TypeError: Assignment to constant variable.


const user = {
    name: 'Kaca',
    lastName: 'Krstic'
}
user.id = 1;
console.log(user);   //{ name: 'Kaca', lastName: 'Krstic', id: 1 }

Object.freeze(user); // ne mozemo vise ubacivati keys u objekat
user.age = 33;
console.log(user);  //{ name: 'Kaca', lastName: 'Krstic', id: 1 } objekat je nepromenjen

const user1 = {
    name: 'Kaca',
    lastName: 'Krstic',
    sayHello: function(greeting){
       // return greeting + ' ' + this.name + ' ' + this.lastName;
       return `${greeting} ${this.name} ${this.lastName}`
    }
}
console.log(user1.sayHello('Pozdrav'));   //Pozdrav Kaca Krstic


//konkatenacija
console.log(user1.lastName + ", " + user1.name); 

// pisanje uz BACKTICKS
console.log(`${user1.lastName}, ${user1.name} `);

let templateString = `
naslov
naslov br 2
podrzava prelzak u novii red`;
console.log(templateString);  // sve ce se ovako prikazati u konzoli


/*******************************************************************************************************************/ 
//DEFAULT PARAMETERS

function sumTwoN(a,b){
    return a + b;
}
sumTwoN(22, 33); // kada prolsedimo vrednosti

//medjutim
//nacin setovanja unutar fje ako ne posaljemo parametre, da imamo kao neke default vrednosti
function sum (a,b){
     a = a || 0;  // a ce uzeti truthy vrednost - to je vred koju joj prolsedimo, ako ne bice falsy vred
     b = b || 0;
    return a+b;
}
console.log(sum());  // vratice nula
// zato sto ce a i b biti undefined to su falsey vrednosti i samim tim uzimaju nulu iz uslova

//pisanje u es6

function sum2 (a=0, b=0){ // untar same fje tj.njenih parametara postavljamo default vrednosti
    return a + b;
}
console.log(sum2());  //0
console.log(sum2(2, 3)); //5

//primer 2

function logActivity (name ='blaBla', activity = 'running'){
    console.log(`${name} loves ${activity}`);
}
logActivity();  //blaBla loves running