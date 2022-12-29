




for(i= 3; i>=0; i--){
    console.log(i);
}

var sum = 0;
for(i= 0; i<10; i++){
    if(i%3==0){
        sum++;
    }
    if(i==8){
        break;
    }
    
}
console.log(sum);

var a = [2, 3, 11, 5, 23];
a.length = 2;
console.log(a);

// 

var n = 23;
n -=2;
console.log(n);

var b  = [2, 3, 11,];
b.length = 5;
console.log(b);


function f(a, b){
    return a+b;
}
console.log(f(12));


var s = 'ab34abc';
console.log(parseInt(s));

var n = 10;
console.log(++n);

console.log(2 + true);

var s = 'coffe';
s[0] = 'C';
console.log(s);

var mess = ''
var n = 4;
 while(n>=0){
    mess +='*';
    n--;
 }
 console.log(mess);

 var des = 'Do the magic';
 var s = '';
 for(i=des.length-1; i>=0; i--){
    s = s + des[i];
 }
 console.log(s);

 var arr =[];
 for(i=0; i<4; i++){
    arr[2*i] = i;
    arr[2*i +1] = i;
 }
 console.log(arr);

 var n = 5;
 var nO =0;
 var i = 0;

 while(i<=n){
    if(i%2==0){
        nO++;
    }
    i++;
 }
 console.log(nO);