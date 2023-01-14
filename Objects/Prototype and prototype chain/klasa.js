class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    fullName(){
        return this.name + ' ' + this.surname;
    }
    printInfo(){
        console.log(this.fullName());
    }
}

var pera = new Person('Pera', 'Peric');
console.log(pera);  //Person { name: 'Pera', surname: 'Peric' }


// klasa programer nasledjuje persone
class Programmer extends Person {
    constructor(name, surname, favoriteLanguage){
        super(name, surname); //pozivamo konstruktorsku fju iz koje klasa nasledjuje
        //isto kao Person.call(this, name, surname);
        this.favoriteLanguage = favoriteLanguage;
    }
    printInfo(){
        console.log(
            super.fullName() + ' , favorite language: ' + this.favoriteLanguage
        );
    }
}
var programerPera = new Programmer('Pera', 'Peric', 'JS');
programerPera.printInfo();  //Pera Peric , favorite language: JS
console.log(programerPera.constructor); //[class Programmer extends Person]





