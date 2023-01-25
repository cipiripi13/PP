 
//● write a function that collects all the data from the form
var choosenSubject = document.getElementById('subject');
var nameSurnameInput = document.getElementById('name');
var gradeSelect = document.getElementById('grades');
var buttonAdd = document.getElementById('add');
var firstErrorMessage = document.querySelector('.first-error-message');
var ListPass = document.querySelector('#passesExam');
var listFailes = document.querySelector('#failesExam')



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
    
    // isprazniti inpute za gresku nakon svakog unosa
    firstErrorMessage.textContent = ' ';
    var exame = new Exam(choosenSubject, nameSurnameInput, gradeSelect);


    // if(nameSurnameInput != 'U+0020'){
    //     firstErrorMessage.textContent = 'Inssert both name and surname';
    //     return;
        
    // } 
    
   
        var liElementToAdd = document.createElement('li');
    if(gradeSelect.value > 5){
        liElementToAdd.textContent = nameSurnameInput.value + ', grade: ' + gradeSelect.value + ' ' +  choosenSubject.value;
        liElementToAdd.setAttribute('class', 'passLi');
        ListPass.appendChild(liElementToAdd);
        
    } else{
        liElementToAdd.textContent = nameSurnameInput.value + ', grade: ' + gradeSelect.value + ' ' + choosenSubject.value;
        liElementToAdd.setAttribute('class', 'failesLi' );
        listFailes.appendChild(liElementToAdd);
        
        //ispraniti vrednost kod unosa u formi svaki put nakon sto ukucamo
    
}
    choosenSubject.value = '';
    nameSurnameInput.value = '';
    gradeSelect.value = '';
}


buttonAdd.addEventListener('click', collectData);