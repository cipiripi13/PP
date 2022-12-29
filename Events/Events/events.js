// Event Handlers from HTML
// Basic
// ● Create page containing only one button
// ● Toggle background color on button click



//funkcija koja samo menja boju diva u crvenu ili belu na klik
function toggle(){
    var dugme =  document.getElementById('toggle');
     var div = document.querySelector('.container');
     var isRed = true;

     div.addEventListener('click', () => {
          if(isRed){
            div.style.backgroundColor =  'red';
          } else{
            div.style.backgroundColor = 'white';
          }

          return isRed = !isRed;
           
          })
}
toggle();