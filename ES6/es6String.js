// string new Methodes

let array = [33, 25, undefined, 'katarina', 'cao'];

if(array.includes(undefined)){
    console.log(true);
} else{
    console.log(false);
};

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);

let arrayToString = array.toString();
console.log(arrayToString);


    var result;
    result = arrayToString.repeat(2);
    console.log(arrayToString);

    let string1 = 'hello';
    let str2 = 'hello world';
    console.log(string1.startsWith(str2));  //false
    console.log(str2.startsWith(string1));  //true

    