var box = document.querySelector('.box');

window.onclick = function(event){
    if(event.target.contains(box) && event.target !== box){
        console.log('You have clicked outside the box and the coordinates are ' + event.clientX + event.clientY);
    } else{
        console.log('You have clicked inside the box');

    }
}