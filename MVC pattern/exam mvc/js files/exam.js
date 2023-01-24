class Exam{
 constructor(subject, student, grade){
    this.subject = subject;
    this.student = student;
    this.grade = grade;
 }
 // why is not working?
//  getExamInfo(){
//     var student = new Student(this.student);
//     var s = student.getStudentData();
//     return this.subject + ' ' + s;
// }
hasPassed(){
    if(this.grade > 5){
        return 'Passed';
    } else {
        return 'Failed'
    }
}   
}
   

//Testing
var ispit = new Exam('js', 'kaca', 9 );
console.log(ispit);
//.log(ispit.getExamInfo());
// console.log(ispit.hasPassed());

// var ispit2 = new Exam('js', 'pera', 3);
// console.log(ispit2.hasPassed());



    