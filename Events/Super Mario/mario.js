
var mario = document.getElementById('mario');
var runningMario = document.getElementById('running-mario');
var bg = document.querySelector('.container');
var ground = document.querySelectorAll('div')[1];
var x = 0;
var y = 0;
document.addEventListener('keydown', function (event){
    // dok je key na desno mario slika se ne prikazuje i display none
   if(event.key === 'ArrowRight'){
    mario.style.display = 'none';
   // dok se ovde gif prikazuje
    runningMario.style.display = 'block';
    ground.classList.add('ground');


    // var position = parseInt(bg.style.backgroundPosition) || 0;
    // bg.style.backgroundPosition = (position - 15) + 'px';


     } else{
    mario.style.display = 'block';
   }

});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight") {
      mario.style.display = "block";
      runningMario.style.display = "none";  
      
    }
  })

