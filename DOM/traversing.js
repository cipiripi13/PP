// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One &lt;li&gt; element in the second list should have a class “active”, which sets its
// background color.
// Create a function that selects the &lt;li&gt; element with class “active”.
// Remove the class from that element, and then select the first &lt;li&gt; element in the
// first unordered list using node relations.
// Apply class to that newly selected &lt;li&gt; element

function secondListActive (){
    var activeBcg = document.querySelector('.active-second');
    // activeBcg.classList.add('.active-second');
    activeBcg.classList.remove('active-second');
    var firstUlNode = document.getElementsByTagName('ul')[0];
    firstUlNode.classList.add('active-second');
    

}
secondListActive();


//II nacin

// var parent = document.querySelector('div');
// var firstList = parent.children[0];
// var secondList = parent.children[1];
// //console.log(parent);

// var setBg = function(){
//     for (var i = 0; i < secondList.children.length; i++) {
//         if (secondList.children[i].classList.contains("active")) {
//           secondList.children[i].classList.remove("active");
//           break;
//         }
        
//          }
//       firstList.children[1].classList.add("active");
//       firstList.children[1].style.fontStyle = 'italic';
      
//     };
// setBg();