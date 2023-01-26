 var student = new Student();
//  console.log(student);
// brojaci
var counter = 0;
var counterPass = 0;
var counterFailed = 0;
//● write a function that collects all the data from the form
var choosenSubject = document.getElementById('subject');
var nameSurnameInput = document.getElementById('name');
var gradeSelect = document.getElementById('grades');
var buttonAdd = document.getElementById('add');
var firstErrorMessage = document.querySelector('.first-error-message');
var ListPass = document.querySelector('#passesExam');
var listFailes = document.querySelector('#failesExam');

//hvatam divove koji ce prikazivati brojac studenta koji su polozili ili pali
var numberPassedStudents = document.querySelector('.numberPassed');
var numberFailedStudents = document.querySelector('.numberFailed');

//hvatam spanove unutar divova u hederu na koje cemo lepiti brojac
var spanElement = document.getElementById('spanPassed');
var spanEFailed = document.getElementById('spanFailed');

function collectData () {
    // radimo validaciju
    //ukoliko je prazno bilo koje polje izbaci poruku
    if(!choosenSubject.value || !nameSurnameInput.value|| !gradeSelect.value){
        firstErrorMessage.textContent = 'Please fill out all fields';
        firstErrorMessage.style.color = 'red';
        firstErrorMessage.style.textAlign = 'center';
        firstErrorMessage.style.fontSize = '30px';
        return;
        
    }
    // if(nameSurnameInput != 'U+0020'){
    //     firstErrorMessage.textContent = 'Inssert both name and surname';
    //     return;
        
    // } 
    // isprazniti inpute za gresku nakon svakog unosa
    firstErrorMessage.textContent = ' ';
    
    var exame = new Exam(choosenSubject, nameSurnameInput, gradeSelect);

// kreiramo novi li el koji ce dodavati na jednu od dve liste
        var liElementToAdd = document.createElement('li');
        
    if(gradeSelect.value > 5){
        liElementToAdd.textContent = nameSurnameInput.value + ', grade: ' + gradeSelect.value + ' ' +  choosenSubject.value;
        liElementToAdd.setAttribute('class', 'passLi');
        ListPass.appendChild(liElementToAdd);
        counterPass++;
        spanElement.textContent = counterPass;
        numberPassedStudents.appendChild(spanElement);
        
        
        
        

        
    } else{
        liElementToAdd.textContent = nameSurnameInput.value + ', grade: ' + gradeSelect.value + ' ' + choosenSubject.value;
        liElementToAdd.setAttribute('class', 'failesLi' );
        listFailes.appendChild(liElementToAdd);
        counterFailed++;
        spanEFailed.textContent = counterFailed;
        numberFailedStudents.appendChild(spanEFailed);

        
        
    
}

//ispraniti vrednost kod unosa u formi svaki put nakon sto ukucamo
    choosenSubject.value = '';
    nameSurnameInput.value = '';
    gradeSelect.value = '';
}


buttonAdd.addEventListener('click', collectData);