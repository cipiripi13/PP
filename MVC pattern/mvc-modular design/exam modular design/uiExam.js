var uiModule = (function(){
    // brojaci
var counterTotal = 0;
var counterPass = 0;
var counterFailed = 0;
var totalStudents = document.getElementById('total');
var percentage = document.getElementById('percentage');


    var choosenSubject = document.getElementById('subject');
    var nameSurnameInput = document.getElementById('name');
    var gradeSelect = document.getElementById('grades');
    var firstErrorMessage = document.querySelector('.first-error-message');

    var ListPass = document.querySelector('#passesExam');
    var listFailes = document.querySelector('#failesExam');

    //button
    var buttonAdd = document.getElementById('add');

    //hvatam divove koji ce prikazivati brojac studenta koji su polozili ili pali
    var numberPassedStudents = document.querySelector('.numberPassed');
    var numberFailedStudents = document.querySelector('.numberFailed');

//hvatam spanove unutar divova u hederu na koje cemo lepiti brojac
var spanElement = document.getElementById('spanPassed');

var spanEFailed = document.getElementById('spanFailed');

    var collectData = function(){
         var subjectToChoose = choosenSubject.value;
         var chooseNameSurname = nameSurnameInput.value;
         var chooseGrade = gradeSelect.value;

         return(subjectToChoose, chooseNameSurname, chooseGrade);
    }

    var validateForm = function(){
        if(!choosenSubject.value || !nameSurnameInput.value|| !gradeSelect.value){
            firstErrorMessage.textContent = 'Please fill out all fields';
            firstErrorMessage.style.color = 'red';
            firstErrorMessage.style.textAlign = 'center';
            firstErrorMessage.style.fontSize = '30px';
            return false;
    } else {
        firstErrorMessage.textContent = ' ';
        return true;
    }
    
    }
    
    var updateListPassed = function(){

        var liElementToAdd = document.createElement('li');
        
            liElementToAdd.textContent = nameSurnameInput.value + ', grade: ' + gradeSelect.value + ' ' +  choosenSubject.value;
            liElementToAdd.setAttribute('class', 'passLi');
            ListPass.appendChild(liElementToAdd);
         

    choosenSubject.value = '';
    nameSurnameInput.value = '';
    gradeSelect.value = '';
}

    var updateFailedList = function(){
        var liElementToAdd = document.createElement('li');
    
            liElementToAdd.textContent = nameSurnameInput.value + ', grade: ' + gradeSelect.value + ' ' +  choosenSubject.value;
            liElementToAdd.setAttribute('class', 'passLi');
            ListPass.appendChild(liElementToAdd);
    
            

    choosenSubject.value = '';
    nameSurnameInput.value = '';
    gradeSelect.value = '';
   
    
    }



    // var countStudents = function(){
    //     if(gradeSelect.value > 5){
    //         counterPass++;
    //         console.log(counterPass);
    //     spanElement.textContent = counterPass;
    //     numberPassedStudents.appendChild(spanElement);
        
        
       
    //     } 
    //     return counterPass;
    // }
    return{
        collectData: collectData,
        validateForm: validateForm,
        updateListPassed: updateListPassed,
        updateFailedList: updateFailedList
      
        // countStudents: countStudents
       
    }
})();