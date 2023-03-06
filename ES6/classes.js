
//Stari nacin pisanja
//KONSTRUKTORSKE funkcije
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + ' | ' + this.length);
}

var maui = new Vacation('Maui', 7);
maui.print(); //Maui | 7



//CLASSES
class Vacation1 {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    // console.log(this.destination + ' | ' + this.length);
    //ES6 sintaksa
    console.log(`${this.destination} | ${this.length}`);
  }
};
var hawaui = new Vacation1('Hawaui', 5);
hawaui.print();  //Hawaui | 5

//EXTENDS
class Expedition extends Vacation1{
  constructor(destination, length, gear){
    super(destination, length)  //super je zapravo this originale klase Vacation
    this.gear = gear;
  }
  print(){
    super.print()   //CG | 10
    //console.log(`Bring your ${this.gear}`);
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }
}
var s = new Expedition('CG', 10, 'swimsuit');
//s.print(); //Bring your swimsuit

//polimorfizam
const trip = new Expedition('Ken', 3, ['sunglasses', 'camera']);
trip.print();