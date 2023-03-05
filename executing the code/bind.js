function logThis(a){
  console.log(a, this);
}
//logThis(33);

var user = {
  firstName: 'Kaca',
  lastName: 'Krstic',
  sayHello: function(greeting){
    console.log(greeting + ' ' + this.firstName + '!');
  }
};
user.sayHello('Cao')  //Cao Kaca!

//logThis.call(user, 33);

var user1 = {
  firstName: 'Dario',
  
};

//pozovi iz user-a metodu sayHello, ali kao this uzmi vrednost iz user1 i prosledimo argument
user.sayHello.call(user1, 'Zdravo');       //stampa Zdravo Dario!


// ovim smo samo pozajmili metodu prvog objekta ali kao this koristimo drugi objekat, umesto svog prvobitnog
// call prima onoliko parametara koliko prima originalna fja i plus (+) jos jedan, ato je objekat nad kojim cemo pozivati 
// tu metodu
/*****************************************************************************************************/


//APPLY 
//prima 2 parametra, prvi je objekat, drugi je niz u kome se nalaze svi ostali parametri funkcije
user.sayHello.apply(user1, ['vOZDRA']);
/**************************************************************************************************/

//BIND
//ova fja se ne izvrsava odmah
//vec bind kreira novu fja koja ce se izvrsiti tek nakon pozivanja newFunction u kojoj ce i biti smestena
//
var newFunction = user.sayHello.bind(user1, 'caos');
newFunction();  //caos Dario!


