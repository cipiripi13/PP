// Variable Scope

// Within the body of a function, a local variable takes
// precedence over a global variable with the same
// name

//deklairesmo globalno
var scoope = 'global';

function checkScoope(){
    var scoope = 'local';
    return scoope;
}
var result = checkScoope();
console.log(result);  //stampace ovde LOCAL
// zbog pravila iznad, da dve varijable sa istim imenom, prednost ce imati varijabla unutar funcije...


// Although you can get away with not using the var
// statement when you write code in the global scope,
// you must always use var to declare local variables.

// If you don't use var to declare a variable, this
// variable is automatically assigned a global scope.

var scoope1 = 'global';

function checkNow (){
    scoope1 = 'local';
    myScoope = 'local';
    return [scoope1, myScoope];
}
checkNow();  //da nismo pozvali funciju scoppe1 bi ostao na global
console.log(checkNow());   //local, local
console.log(scoope1);   // local - promenili smo globalnu varijablu


// The code inside a function has access to all global
// variables as well as to its own local ones.
 var global = 1;

function myFunc() {

 var local = 2;  //ova varijabla je lokalnog karaktera, dostupna samo unutar f-je

global++;   //ova funcija ima pristup globalnim varijablama

return global;

}

myFunc();

//console.log(local);

console.log(global);
