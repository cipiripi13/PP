var field = document.querySelector(".container");
var player = document.querySelector(".player");
var button = document.getElementById("button");

field.addEventListener("click", function() {
    var x = event.clientX;
    var y = event.clientY;
    player.style.position = "absolute";
    player.style.left = x + "px";
    player.style.top = y + "px";
})

button.addEventListener('click', event => {
    // Reload the page
    location.reload();  //na svaki klik na dugme refresh stranicu i vrati igraca na pocetak
  });