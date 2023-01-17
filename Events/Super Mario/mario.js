
var mario = document.getElementById('mario');
var runningMario = document.getElementById('running-mario');
var bg = document.querySelector('.container');


var x = 0;
var moveBg;
document.addEventListener('keydown', function (event){
    // dok je key na desno mario slika se ne prikazuje i display none
   if(event.key === 'ArrowRight'){
    mario.style.display = 'none';
    console.log(event);
   // dok se ovde gif prikazuje
   runningMario.style.display = 'block';
    
   //sta se desava sa pozadinom kada je keydown aktivan
  //  moveBg = setInterval(function(){
  //   x -=1;
  //   bg.style.backgroundPosition = x + 'px bottom';
  // }, 1);
    
     } else{
    mario.style.display = 'block';
    
   }

});

document.addEventListener("keyup", function(event) {
    // if (event.key === "ArrowRight") {
      // prikazi sliku
      mario.style.display = "block";
      //ukloni gif
      runningMario.style.display = "none"; 
      //skloni interval
      clearInterval(moveBg); 
      //event.stopPropagation()
      
      
      
    }
  )

