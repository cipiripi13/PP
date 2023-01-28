class Student {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getStudentData(){
        if (this.name[0] !== this.name[0].toUpperCase()) {
            return 'First name should start with capital letter';

        }
        if (this.surname[0] !== this.surname[0].toUpperCase()) {
            return 'Last name should start with capital letter';
            
     }
    return this.name + " " + this.surname;
}
}



//Testing
var kacaK = new Student('Katarina', 'krstic');
console.log(kacaK.getStudentData());