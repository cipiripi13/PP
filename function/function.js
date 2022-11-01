

//program koji proverava da li je broj paran ili ne i vraca string

var number = 22;
var result = '';
if(number%2 ==0){
    result = 'even';
} else {
    result = 'odd';
}
console.log(result);

function chekIfNumbIsEvenOrOdd(n) {
    if(typeof n !== 'number'){
        return 'Invalid input';
    }
    var result = '';
if(n%2 ==0){
    result = 'even';
} else {
    result = 'odd';
}
return result;
}
var r =chekIfNumbIsEvenOrOdd(33);
console.log(r);
var f = chekIfNumbIsEvenOrOdd('cao');
console.log(f);

var num = parseInt('333');
console.log(num); //=>333
num = 'eee';
console.log(parseInt(num));  //=>nan

//zadatak 1-maksimum od dva broja-koji broj je veci
function getmax(a, b){
    if(a>b){
        return a;
    } if(b>a) {
        return b;
    }
    return "Numbers are equal";
}
var res = getmax(5,6);
console.log(res);
console.log(getmax(3, 3));


//program koji crta kvadratzadate vel 
//var res1 = '*****\n*  *\n* *\n* *\n*****';

var res1 = '';
for( var i=0; i<5; i++){
    if(i===4){
        res1 +='\n'; //dodaj noi red
    } for(var j =0; j<5; j++){
        res1 += '*';
    }
}

console.log(res);


