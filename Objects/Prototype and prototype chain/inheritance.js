// 1. Create constructor functions with properties representing the following:
// ○ Person: name, surname
// ○ Employee: inherits Person and has job and salary
// ○ Developer: inherits from Employee and has specialization
// ○ Manager: inherits from Employee and has department



function Persone (name, surname){
    this.name = name;
    this.surname = surname;
}
var osobaMilos = new Persone ('Milos', 'Milosevic');
console.log(osobaMilos);  //Persone { name: 'Milos', surname: 'Milosevic' }

function Employee(job, salary){
    this.job = job;
    this.salary = salary;
    // this.getData = function(){
    //     return (`${this.name}, ${this.surname}, ${this.salary}`);
    // };
    
  
}
Employee.prototype.getData = function(){
    return (`${this.name}, ${this.surname}, ${this.salary}`);
};


Employee.prototype.getSalary = function(){
    console.log(`The salary is ${this.salary}`);
} 


Employee.prototype.increaseSalary = function(){
    var increased = this.salary + this.salary*10/100;
    console.log(`The increased salary by 10% is ${increased} `);
}
var milosEmploye = new Employee ('accountant', 400);
console.log(milosEmploye);
console.log(milosEmploye.getData()); 


// nasledjivanje Employee od Persone
function Employee (name, surname, job, salary){
    Persone.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Persone.prototype);
Employee.prototype.constructor = Persone;

Employee.prototype.getData = function(){
    return (`${this.name}, ${this.surname}, ${this.salary}`);
}

var marko = new Employee('Marko', 'Markovic', 'developer', 300);
console.log(marko.getData());
console.log(marko);

var milosEmploye = new Employee ('Milos', 'Milosevic', 'accountant', 400);
console.log(milosEmploye);
console.log(milosEmploye.getData()); // vrati za ime  i prezime undefined jer jos nije doslo do nasledjivanja



function Developer (specialization){
    this.specialization = specialization;
    this.getSpecialization = function(){
        console.log(this.specialization);
    }
}

function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

var jovanDeveloper = new Developer('Jovan', 'Jovanovic', 'developer', 600, 'JS');
console.log(jovanDeveloper);
console.log(jovanDeveloper.getSpecialization);

function Manager (department){
    this.department = department; 
    
}
Manager.prototype.getDepartment = function(){
    console.log(`Department name is ${this.department}`);
};
Manager.prototype.changeDepartmet = function(x){
        var newD = this.x;
        console.log(`The new department is ${newD}`);
    }
;

var it = new Manager('HR');
it.getDepartment();

var newDepartmwnt = new Manager('accounting');
newDepartmwnt.changeDepartmet();   