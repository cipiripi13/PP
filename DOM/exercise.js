// Create a function that selects the second list and applies a class that sets some
// background color to it.

// function secondBgr (){
//     var second = document.getElementsByTagName('ul')[1];
//     second.classList.add('second-list-color');
// }
// secondBgr();

// Create a second function that, when triggered, selects all &lt;li&gt; elements on the
// page.
// The function also sets a class that sets some bg color to every &lt;li&gt; element.



function setAllLiBackground() {
    var listNodes = document.getElementsByTagName('li');
    for (var i = 0; i < listNodes.length; i++) {
        listNodes[i].classList.add('list-items-bg');
        listNodes[i].style.backgroundColor = '#4d67fc';
    }    
}

setAllLiBackground(); 

// Create one more unordered list and one more function
// The function​ should select only &lt;li&gt; elements from that last list
// Each &lt;li&gt; element should get a class that sets some bg color and transforms the
// text to uppercase.

function thirdLiChange (){
    var listItemNode = document.getElementsByTagName('ul')[2];
    listItemNode.classList.add('third-li');
    if(listItemNode.className === 'third-li'){
        
        listItemNode.style.backgroundColor = '#fa0780';
    }
}
thirdLiChange();

var fourListNode = document.createElement('ul');
var listItemNode = document.createElement('li');
fourListNode.appendChild(listItemNode);

var bodyNode = document.querySelector('body');

 bodyNode.appendChild(fourListNode);
 var tekst = document.createTextNode('Cao');
 listItemNode.appendChild(tekst);

 function four (){
    listItemNode.classList.add('four');
    if(listItemNode.className === 'four'){
        listItemNode.style.backgroundColor = '#f8d1d1';
        listItemNode.style.textTransform = 'uppercase';
    }
 }
 four();


