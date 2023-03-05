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