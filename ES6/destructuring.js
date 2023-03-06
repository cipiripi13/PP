let originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let firstEl = originalArr[0];
let secondEl = originalArr[1];
let thiedEl = originalArr[2];

console.log(firstEl, secondEl, thiedEl); //1, 2, 3
//sve ovo se moze skratiti i uraditi u jednoj liniji koda

//destruktuiranje niza
 const [first, second, third]  = originalArr;
 console.log(first, second, third);
 //prati indekse niza
 // da smo samo stavili ovako on bi citao prvi clan niza
 const[four] = originalArr;
 console.log(four); //1

 //za preskakanje clanova niza koristimo zapetu onoliko puta koliko nam je do potrebno
 const[,,,,five] = originalArr;
 console.log(five); //5


 //primer 2
 const[firstCompany] = ['Apple', 'Microsoft', 'Samsung'];
 console.log(firstCompany); //apple

 const [,,thirdC] = ['Apple', 'Microsoft', 'Samsung'];
 console.log(thirdC); //samsung

 //pr 3 --- destr.objects
 const user = {
  firstName: 'Pera',
  lastName: 'Peric',
  age: 44,
  id: 3456,
 };

//  const firstName = user.firstName;
//  const lastName = user.lastName;
//  const age = user.age;
//  const id = user.id;
//  console.log(firstName, lastName, age, id);

//leva str varijable ------------   = desna objekat koji destruktuiramo
//BITNO
//nisu bitni indeksi, bitni su key-evi
//unutar { } ne moze sta mi hocemo
 const{firstName, lastName, age, id} = user;
 console.log(firstName, lastName, age, id);
