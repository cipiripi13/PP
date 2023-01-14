//Prototype and Prototype chain
/******************************/

//primer
//INHERITANCE

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
    // this.printInfo = function(){
    //     console.log();
    //}  nekad ovako sada cemo preko prototype
}
Person.prototype.fullName = function(){
    return(this.name + " " +  this.surname);
}
Person.prototype.printInfo = function(){
    console.log(this.fullName());
}


var pera = new Person('Pera', 'Peric');
//console.log(pera);  //Person { name: 'Pera', surname: 'Peric' } dobijamo objekat nastao iz klase Persone
//ili
//pera.printInfo() // i dobicemo isto kao i gore -------- Pera Peric

/**********************************************************************/
//nasledjivanje potpuno u tri koraka


//I korak
// Programmer nadledjuje od persone neka svojstva
function Programmer (name, surname, favoriteLanguage){
    //konstruktor mora da dobije ime i prezime
    // stim da moze da ih nasledi od persone
    Person.call(this, name, surname);
    // call fja tj metoda koja se poziva nad odredjenim funkcijama
    //pozovi ovu fju stim da this se odnosi na njen sopstveni this koji ce povezati sa novom konstruk.fjom Programmer
    //ovim smo samo zapoceli proces nasledjivanja
    this.favoriteLanguage = favoriteLanguage;
}
//var programmerPera = new Programmer('Pera', 'Peric', 'JS');
//console.log(programmerPera);  //Programmer { name: 'Pera', surname: 'Peric', favoriteLanguage: 'JS' }
//programmerPera.printInfo() // vrati da nije fja cime vidimo da nasledjivanje nije potpuno

//yato radimo na ovaj nacin
//ovim se osiguravamo da da protip programmer nasledi protopip PaymentResponse, tj. sve u njemu

//II korak
Programmer.prototype = Object.create(Person.prototype)
//console.log(programmerPera.constructor);

//III korak
Programmer.prototype.constructor = Programmer;

var programmerPera = new Programmer('Pera', 'Peric', 'JS');
// sada trk mozemo da pozovemo sve metode
programmerPera.printInfo()
console.log(programmerPera.constructor);  //Pera Peric
                                          //Function: Programmer]


                                          
// ovo je ujedno i primer polimorfizma kako se jedna metoda ponasa razlicito u zavisnosti od kog objekta nasledjuje                                          