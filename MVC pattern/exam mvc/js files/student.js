class Student {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getStudentData(){
        return this.name + " " +  this.surname;
    }
}


//Testing
// var kacaK = new Student('Katarina', 'Krstic');
// console.log(kacaK.getStudentData());