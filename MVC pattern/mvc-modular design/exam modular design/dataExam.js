var dataModule = (function(){
    class Subject {
        constructor(subjectName){
            this.subjectName = subjectName;
        }
        getSubjectName(){
            return this.subjectName;
        }
    };
    function createSubject(subjectName){
        return new Subject(subjectName);
    }
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
    };
    function createStudent(name, surname){
        return new Student(name, surname);
    }

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
           
           
           return (this.subject + ' ' + this.student.getStudentData());
       }
       hasPassed(){
           if(this.grade > 5){
               return 'Passed';
           } else {
               return 'Failed'
           }
       }   
       };
       function createExam(subject,student, grade){
        return new Exam(subject, student, grade);
       };

       
       return{
        createSubject: createSubject,
        createStudent: createStudent,
        createExam: createExam
       }
    
})()


