// var a = (function (){
//     return 'cao';
// })();
// console.log(a);

// var b = (function (){
//     return {
//         test: 'cao',
//         tessst: 'caoooo',
//         tesssttt: 'caocao',
//         sayHi: function(){
//             console.log('cao');
//         }
//     }
// })();
// console.log(b.test);
// b.sayHi();

var module1 = (function(){
    var sum = function(a,b){
        return a+b;
    }
    var multiply = function(a,b){
        return a*b;
    }
    var oduzimanje = function(x,y){
        return x-y;
    }
    return {
        sum: sum,
        multiply: multiply,
        oduzimanje: oduzimanje
    }
})();
