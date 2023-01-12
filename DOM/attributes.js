// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.

function validateForm (){
    var form = document.querySelector('form');

    var inputs = document.querySelectorAll('input');

    

    for(var i=0; i<inputs.length; i++){
        
        if(inputs[i].hasAttribute('required') && inputs[i].value.length === 0 ){
            inputs[i].classList.add("red");
            
        } else{
            inputs[i].classList.remove('red');
        }
    }
    return inputs
   
}
validateForm();

