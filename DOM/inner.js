
// I nacin preko inner html-a

function createDropdown (){
//    var divovi = document.querySelectorAll('div');
//    divovi[0].innerHTML = "<select name='drop' id='drop1'><option value='1st option'>1st option</option><option value='2nd option'>2nd option</option><option value='3rd option'>3rd option</option></select>";
   document.querySelector('div').innerHTML= "<select name='drop' id='drop1'><option value='1st option'>1st option</option><option value='2nd option'>2nd option</option><option value='3rd option'>3rd option</option></select>";
  

}
(createDropdown());


//II nacin

function createDropdownSecond (array){
    var divTwo = document.getElementsByTagName('div')[1];
    var dropdown = document.createElement('select');
   
   // u div 2 sa indeksom jedan dodajem dropdown
    divTwo.appendChild(dropdown);

    //dodavanje opcija u dropdown

    for(var i=0; i<array.length; i++){
        var option = document.createElement('option');
        option.value = array[i];
        option.text = array[i];
        dropdown.appendChild(option);
    }
     

}
(createDropdownSecond(['Optione 4', 'Option 5', 'Option 6']));