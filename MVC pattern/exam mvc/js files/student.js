class Student {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getStudentData(){
        var firstLetterName = this.name[0].toUpperCase() + this.name.slice(1);
        var firstLetterSurname = this.surname[0].toUpperCase() + this.surname.slice(1);
        return firstLetterName + " " +  firstLetterSurname;
    }
}


//Testing
var kacaK = new Student('katarina', 'Krstic');
console.log(kacaK.getStudentData());