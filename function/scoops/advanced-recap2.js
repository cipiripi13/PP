// Example 0

typeof console.log;

(function () {

return console.log;

})()('Boo!') //Boo stmapa

// Example 1

// function multiply(a, b) {

//     var mResult = a * b;
    
//     return function (a, b) {
    
//     return mResult + a + b;
    
//     }
    
//     }
    
//     var output = multiply(3, 4); //() da smo bez prosledjenih vrednosti zadali vratilo bi NaN
    
//     console.log(output);  // samo prikaze function anonimus
//     console.log(multiply(3,4)(2,3)) ;//17

    // Example 2

function multiply(a, b) {

    var mResult = a * b;
    
    return function (a, b) {
    
    return mResult + a + b;}
    
    }
    
    var output = multiply(3, 4)(5, 5);
    
    console.log(output);  //22

    // Example 3

print("This might work or not?");   //print is not a function 
                             //vraca gresku jer smo varijabli dodelili funkciju i on samoizdie varijablu po hoistingu ali 
                             //vrednost ostaje na liniji koda gde je i dodeljena

var print = (function () {

return console.log;

})();

// Example 4

var print = (function () {

    return console.log;
    
    })();
    
    print("This might work or not?");  // stampa ono sto se nalazi u print

    // Example 5

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

var output = transformArray(input, function (param) {

return param + "";

});

console.log(output);

function transformArray(array, action) {

var result = [];

for (var index = 0; index < array.length; index++) {

var element = array[index];

result[index] = action(element);

}

return result;

}

// Example 6

var PI = 3.1;

function circleSurface(radius) {

var result = radius * radius * PI;

 var PI = 3.14159;

return result;

}

var output = circleSurface(5);

console.log(output);

// Example 7

function circleCalc(radius, calculation) {

    var result = calculation(radius);
    
    return result;
    
    }
    
    var output = circleCalc(7, function (r) {
    
    var PI = 3.14159;
    
    return 2 * r * PI;
    
    });
    
    console.log(output);

    var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {

var result = [];

for (var index = 0; index < array.length; index++) {

var element = array[index];

result[index] = action(element);

}

return result;

}

var output = transformArray(input, parseFloat);

console.log(output);

output = transformArray(input, parseInt);

console.log(output);

// Example 10

var cubeVolume = function (a) {

    return a * a * a;
    
    }
    
    function cubeCalculation(a, calc) {
    
    return calc(a);
    
    }
    
    output = cubeCalculation(10, cubeVolume(6))
    
    console.log(output);

    function cubeCalculation(a, calc) {

        return calc(a);
        
        }
        
        var output = cubeCalculation(10, function (a) {
        
        return 6 * a * a;
        
        })
        
        console.log(output);


        function saySomething(msg1) {

            return function (msg2) {
            
            var output = msg1 + " " + msg2;
            
            return function () {
            
            output += "!"
            
            console.log(output);
            
            }
            
            }
            
            }
            
            saySomething("Hi")("there")();


            var myArr = [];

var hi = function () {

return "Hi";

};

myArr[0] = hi;

myArr[0]();

var firstElement = myArr[0];

typeof firstElement;

firstElement();