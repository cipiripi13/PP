var global = 123;

function myFunc() {

console.log(global);  //undefined

var global = 1;  //1 

console.log(global); // sad tek stampa 1 jer je pre toga bila nedefinisana

}

myFunc();  
console.log(global);  //123


// function literal notation - Anonimna funkcija

var f = function(){
    return 1;
};
//console.log(f());
console.log(f(4));