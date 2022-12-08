// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

var countingVowels = function(string){
    var counter = 0;
    for(i=0; i<string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" 
        || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U"){
            counter++;
        }
    }
    return counter;
}

console.log(countingVowels('kAtarinaAA'));

// 2. Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]

var combine = function(arrayOne, arrayTwo){
    var newArray = [];
    for(var i=0; i<arrayOne.length; i++){
        newArray[newArray.length] = arrayOne[i];
        newArray[newArray.length] = arrayTwo[i];
    }
    return newArray;
}

console.log(combine(['a', 'b', 'c'], [1,2,3]));

// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateList (array, k){
    var newA = [];
    for(i=k, j=k-array.length; i<array.length+k; i++, j++){
        if(array[i] !== undefined){
            newA[newA.length] = array[i];
        } else {
            newA[newA.length] = array[j];
        }
    }
    return newA;
}
console.log(rotateList([1,2,3,4,5,6], 2));

// 4. Write a function that takes a number and returns array of its digits.

function numberToArray (number){
    if(!isFinite(number)){   //proverava isFinite validan broj
        //proverava u ovom slucaju da ako je razlicito od broja
        return 'Imput must be a number';  //ukoliko nije broj
    }
    
    number = number + '';  //kovertovali u string kako bi prosli kroz ceo broj
    var array = [];
    for(i=0; i<number.length; i++){
        array[array.length] = number[i];
    }
    return array;
}
console.log(numberToArray(13256));
console.log(numberToArray('Tara'));
console.log(numberToArray(undefined));



// 5. Write a program that prints a multiplication table for numbers up to 12.

function myltiply (number){
    

    for( var i=1; i<=12; i++){
       
        console.log(`For ${i} multiply ${number} the result is ${i*number}`);
    }
    return;
}
console.log(myltiply(3));


function printMultTable() {
    var resString = "";
    for(var i = 1; i<13; i++) {
        for(var j = 1; j<13; j++) {
            resString += "" + i*j + "\t\t";
        }
        resString+="\n";
    }
    return resString;
}
console.log(printMultTable());

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function convertToF (number){
    var Fahrenheit = 1.8*number+32;
    return ("The temperture " + number +  "C converteted to Fahrenheit is " + Fahrenheit);
}
console.log(convertToF(30));
console.log(convertToF(-25));
console.log(convertToF(22.3));

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function maxiumuNumb (array){
    if(!isFinite (array[i])){
        return 'Imput must be a number';
    }    var maximum = array[0];
    for(var i=0; i<array.length; i++){
        if(array[i]> array[0]){
            maximum = array[i];
        }
    }
    return maximum;
}

console.log(maxiumuNumb([1, 4, 5, 7, 8,23]));
console.log(maxiumuNumb([null, 0, undefined]));

// 8. Write a function to find the maximum and minimum elements. Function returns an array.

function minMax(array){
    var newArr = [];
    var maximum = array[1];
    var minimum = array[0];
    for(i=0; i<array.length; i++){
        if(array[i]<minimum){
            minimum = array[i];
            
        } else if(array[i]> maximum){
            maximum = array[i];
        }
    }
        return[minimum, maximum]
        
}
console.log(minMax([1, 4, 5, 7, 8,23]));
console.log(minMax([11, 24, 5, 7, 8,23]));

// 9. Write a function to find the median element of array.

function median (array){
    var median=0;
    
        if(array.length % 2 == 0){
            median = (array[array.length/2] + array[(array.length/2) -1])/2;
        }
        else {
            median = array[(array.length-1)/2];
        }
        return median;
    
    
}

console.log(median([1,2,3,4,5]));
console.log(median([1,2,3,4]));


// 10. Write a function to find the element that occurs most frequently.

function frequent (){

}

// 11. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

function firstLastMiddle (array){
    var newA = [];
    if(array.length % 2 !== 0){
         newA = [array[0], array[(array.length-1)/2], array[array.length-1]]
    } else if (array.length%2 == 0) {
         newA = [array[0], array[array.length-1]];
    }
    return newA;
}
console.log(firstLastMiddle([5, 6, 7, 3, 2, 11, 19]));
console.log(firstLastMiddle([15, 6, 7, 3, 2, 11]));

// 12. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

function averageFind (){
    var average = 0;
    for(i=0; i<arguments.length; i++){
        average = (average + arguments[i]);
        
    }
    average = average/arguments.length;
    return average;
}
console.log(averageFind(1, 2, 3));

// 13. Write a function to find all the numbers greater than the average.

function greaterNumbThanAverrage (array){
    var sum =0;
    var average = 0;
    var arrayNew = [];
    for(i=0; i<array.length; i++){
        sum +=array[i];}
        for(j=0; j<array.length;j++){
            average = sum/array.length;
        if(array[j]>average){
            arrayNew[arrayNew.length] = array[j]
        } 
    }
   
    return arrayNew;
}
console.log(greaterNumbThanAverrage([1, 2, 3, 4, 5, 6]));