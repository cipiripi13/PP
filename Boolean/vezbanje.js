// 11. zadatak

console.log( typeof('number'));
console.log(typeof(true));
console.log( typeof null);
console.log(typeof 'false');
console.log( typeof 56);

//zadatak 12

var a = 88;
console.log(!!a); //true

var b = 'ffjk';
console.log(!!b);

var c = null;
console.log(!!c);

var d = "";
console.log(!!d);

var f =" ";
console.log(!!f);

// zadatak 13

var p = true;
var q = true;
console.log (p && q);
console.log(p || q);

q=false;
console.log (p && q);
console.log(p || q);

p=false;
q=true;
console.log (p && q);
console.log(p || q);

q=false;
console.log (p && q);
console.log(p || q);

//zadatak 14

//var age = -50;
//var result = age>0 && age > 120;
//console.log(result);
  var age = 50;
  var result = age > 40 ? 'yes' : 'no';
  console.log(result);
  
//console.log(age);

//zadatak 15

var speed = 80;
 var limit = speed > 60 && speed <= 120;
 console.log (limit);
speed = 50;
limit = speed > 60 && speed <= 120;
console.log(limit);

  var w;
//var a;
//a = null;
console.log(typeof w);

var y = 1e309;
console.log(y);




