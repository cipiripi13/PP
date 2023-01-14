function toggle(){
    // var dugme =  document.getElementById('toggle');
     var div = document.querySelector('.container');
  
  
  
   function randomColor (){
     
      var r = Math.floor(Math.random()*256);
     
     var g = Math.floor(Math.random()*256);
     
  
     var b = Math.floor(Math.random()*256);
     
    
    console.log( `rgb (${r}, ${g}, ${b})`);
  
       return `rgb(${r}, ${g}, ${b})`;
      
     
  
  }
  
    div.addEventListener ('click', () => {
     
        div.style.backgroundColor =  randomColor();
      })
    }
  
  toggle();