function add (number1, number2){
    return number1 + number2;
} 
// opsti nacin definisanja funcije

var add = function(number1, number2){
    return number1+number2;
}

var outer = function (param) {

    var inner = function (theinput) {
    
    return theinput * 2;
    
    };
    
    return console.log ('The result is ' + inner(param));
    
    }(2);

    function a() {

        console.log('A!');
        
        return function () {
        
        console.log('B!');
        
        };
        
    }
    var bigB = a();

bigB();