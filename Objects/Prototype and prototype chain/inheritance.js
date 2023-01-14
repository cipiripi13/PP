// 1. Create constructor functions with properties representing the following:
// ○ Person: name, surname
// ○ Employee: inherits Person and has job and salary
// ○ Developer: inherits from Employee and has specialization
// ○ Manager: inherits from Employee and has department



function Persone (name, surname){
    this.name = name;
    this.surname = surname;
}
// var osobaMilos = new Persone ('Milos', 'Milosevic');
// console.log(osobaMilos);  //Persone { name: 'Milos', surname: 'Milosevic' }

// nasledjivanje Employee od Persone
function Employee (name, surname, job, salary){
    Persone.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Persone.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function(){
    return (`${this.name}, ${this.surname}, ${this.salary}`);
}
Employee.prototype.getSalary = function(){
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function(){
    return this.salary + this.salary*10/100;
}

// var marko = new Employee('Marko', 'Markovic', 'developer', 300);
// console.log(marko.getData());
// console.log(marko);

// var milosEmploye = new Employee ('Milos', 'Milosevic', 'accountant', 400);
// console.log(milosEmploye);
// console.log(milosEmploye.getData()); // vrati za ime  i prezime undefined jer jos nije doslo do nasledjivanja



// function Developer (specialization){
//     this.specialization = specialization;
//     this.getSpecialization = function(){
//         console.log(this.specialization);
//     }
// }

function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function(){
    console.log(this.specialization);
}

// var jovanDeveloper = new Developer('Jovan', 'Jovanovic', 'developer', 600, 'JS');
// console.log(jovanDeveloper);
// console.log(jovanDeveloper.getSpecialization);

// function Manager (department){
//     this.department = department; 
    
// }

function Manager(name, surname, job, salary, department){
    Employee.call(this, name,surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function(){
    console.log(`Department name is ${this.department}`);
};
Manager.prototype.changeDepartmet = function(x){
        this.department =x;
        console.log(`The new department is ${x}`);
    }
;

var persone = new Persone('Pero', 'Peric');
var jovanaEmploye = new Employee('Jovana', 'Jovanovic', 'accountant', 300);
var kacaDeveloper = new Developer('Kaca', 'K', 'developer', 800, 'js');
var djoleManager = new Manager('Djole', 'Z', 'manager', 2000, 'construction');

console.log(persone);
console.log(jovanaEmploye);
console.log(kacaDeveloper);
console.log(djoleManager);

djoleManager.changeDepartmet('cars');
djoleManager.getDepartment();

console.log(djoleManager.increaseSalary()); //2200 vrati