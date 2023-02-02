(function(data, ui){
    //button
    
    
    var buttonAdd = document.getElementById('add');
    var clickHandler = function(event){
        event.preventDefault();



        
    var isValid = ui.validateForm();
    if(!isValid){
        return;
    }
    var updateListPassed = ui.updateListPassed();
    
    // var count = ui.countStudents();
    
    }



    buttonAdd.addEventListener('click', clickHandler )
   
})(dataModule, uiModule);