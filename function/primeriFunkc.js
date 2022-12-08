// 'use strict';

result = 'true';

function substract(first, second){
    return first - second;
}
 result = substract(12, -10);
 result = substract(22,2);
 console.log(result);

 myVar = 'random';
 function addOne(a){
    return a +1;
 }
 console.log(addOne(4));

 var global = '123';
 var reset = function() {
    global = arguments[0] || -1;
 }
 reset(10);
 console.log(global)
 
 reset(0);
 console.log(global);