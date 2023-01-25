var student = new Student();


class Exam extends Subject{
 constructor (subject, name, surname, grade) {
    super(subject)
        this.name = name;
        this.surname = surname;
        this.grade = grade;
    }
    
 
 //why is not working?
//  getExamInfo(){
    
    
//     return this.subject + ' ' + student.getStudentData();
// }
// hasPassed(){
//     if(this.grade > 5){
//         return 'Passed';
//     } else {
//         return 'Failed'
//     }
// }   
}
   

//Testing
// var ispit = new Exam('js', 'kaca', 9 );
// console.log(ispit);
// console.log(ispit.getExamInfo());
// console.log(ispit.hasPassed());

// var ispit2 = new Exam('js', 'pera', 3);
// console.log(ispit2.hasPassed());





    