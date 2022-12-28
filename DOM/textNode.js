// Access/Update Text 



// Create an unordered list containing &lt;li&gt; items that represent navigation.
// Create a function that takes text from one of the &lt;li&gt; elements and presents it on
// screen using alert.

// Create one more function.
// The function should take some text as an argument.
// The function should select the last &lt;li&gt; element in the list and replace its text with
// text passed as the function argument.



function alertText (){
    var listNodes = document.querySelector('ul');
    var liNode = listNodes.firstElementChild;
    window.alert(liNode.textContent)
}
alertText();

function changeText(){
    document.querySelector('ul li').textContent;

 document.querySelector('ul li').textContent = "Some new paragraph text!";
}
changeText();