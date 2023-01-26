var student = new Student();


class Exam {
 constructor (subject, student, grade) {
    if((!subject instanceof Subject) || (!student instanceof Student)){
        console.log('Invalid');
    }

        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }
    
 
 //why is not working?
 // kada pozovemo this.student.getStudentData()?????
 getExamInfo(){
    
    
    return (this.subject + ' ' + this.student);
}
hasPassed(){
    if(this.grade > 5){
        return 'Passed';
    } else {
        return 'Failed'
    }
}   
}
   

//Testing
var ispit = new Exam('js', 'kaca krstic', 9 );
console.log(ispit);
 console.log(ispit.getExamInfo());
 console.log(ispit.hasPassed());

// var ispit2 = new Exam('js', 'pera', 3);
// console.log(ispit2.hasPassed());





    