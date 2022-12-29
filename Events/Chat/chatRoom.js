var button = document.getElementById('btn'); // duge da se posalje
var input = document.getElementById('input');  //u input ide poruka
var chat = document.getElementById('chat');  //chat prvi div u kome ide otkucana poruka


function addText() {
  var textMessage = document.createElement('p');  //kada u input ukucamo poruku kreira se novi p element
  var text = document.createTextNode(input.value); 
  textMessage.appendChild(text); //zatim se nalepi na vrednost inputa
  chat.appendChild(textMessage); // i prosledi dalje u div sa klasom chat gde se prikaze
  input.value='';
}
button.addEventListener('click',addText);