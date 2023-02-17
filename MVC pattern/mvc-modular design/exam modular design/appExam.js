(function(data, ui){
    //button
    var passedList = [];
    var failedList = [];
    
    var buttonAdd = document.getElementById('add');
    var clickHandler = function(event){
        event.preventDefault();

        var collectedData = ui.collectData();

    if(ui.validateForm() === true){
    var subject = data.createSubject(collectedData.subjectToChoose);
    var student = data.createStudent(collectedData.name, collectedData.surname);
    var exam = data.createExam(collectedData.grade);

    if(exam.hasPassed() === true){
        ui.updateListPassed();
        passedList.push(exam);
    } else{
        ui.updateFailedList()
        failedList.push(exam);
    }
}
    }



    buttonAdd.addEventListener('click', clickHandler )
   
})(dataModule, uiModule);