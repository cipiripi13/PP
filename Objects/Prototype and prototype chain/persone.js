class Persone {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    sayHi(){
        console.log('Hi');
    }
    getInfo(){
        return `Hi, I am ${this.name}`;
    }
}

class Programmer extends Persone {
    constructor(name, surname, age, position, experience, language){
        super(name, surname, age)
        this.position = position;
        this.experience = experience;
        this.language = language;
    }
    getInfo(){
        var personInfo = super.getInfo();
        console.log(personInfo + ' ' + ' and I work in ' + this.language);
    }
    writeCode(){
        console.log(`Typing ${this.language} code`);
    }
}

var programerKaca = new Programmer('Katarina', 'Krstic', 33, 'Developer', 'Beginner', 'JS');
console.log(programerKaca);
programerKaca.getInfo();
programerKaca.writeCode();

class Tester extends Persone{
    constructor(name, surname, age, position, experience){
        super(name, surname, age);
        this.position = position;
        this.experience = experience;
    }
    test(){
        console.log(this.position, 'Bug detected do it again');
    }
    getInfo(){
        console.log(super.getInfo() + ' and I work in ' + this.position);
    }
}

var radmilaProgramer = new Tester('Radmila', 'Bijelovic', 35, 'Accounting', '10 years');
console.log(radmilaProgramer);
radmilaProgramer.test();
radmilaProgramer.getInfo();