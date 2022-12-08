// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

function countW (string) {
    var result = 0;
    for(i=0; i<string.length;i++){
        if(string[i]==='a' || string[i]==='e' || string[i]==='i' || string[i]==='o' || string[i]==='u' || string[i]==='A' || string[i]==='E' || string[i]==='I' || string[i]==='O' || string[i]==='U' ) {
            result++;
        }
    }
    return result;
}
console.log(countW('KAtarinaKrstIc'));  //=>5

// 2. Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]

function combineArr (array1, array2) {
    var output = [];
    for(i=0, j=0; i<array1.length, j<array2.length; i++, j++){
        output += array1[i] + ','+ array2[j]+',';
    }
    return output;
}
console.log(combineArr(["a","b","c"], [1,2,3]));

// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotate(array, k){
    var output = [];
    for(i=k, j= k- array.length; i<array.length+k; i++, j++ ){
        // console.log(k);
        // console.log(j);
        if(array[i] !== undefined){
            // console.log(k);
            // console.log(j);
            output[output.length] = array[i];
        } else {
            output[output.length]=array[j];
        }
    }
    return output;
}
console.log(rotate([1,2,3,4,5,6],3));



// 4. Write a function that takes a number and returns array of its digits.

function returnArr (number){
    if (!isFinite(number)) {
        return "Imput must be number"
    }
    var arr = [];
    var string = ''+number;
    for(i=0; i<string.length; i++){
        arr[i]= string[i];
    }
    return arr;
}
console.log(returnArr(1234));
console.log(returnArr(65678));
console.log(returnArr('kako si'));

// 5. Write a program that prints a multiplication table for numbers up to 12.
// program to generate a multiplication table

// take input from the user

// var number = parseInt(('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i < 5; i++) {
    for(j=1; j<7; j++){
         // multiply i with number
    var result = i * j;

    // display the result
    console.log(`${j} * ${i} = ${result}`);
    }

   
}

function multiplicationTable(i,j){
    for(let i = 1; i < 12; i++) {
        for(j=1; j<12; j++){
             // multiply i with number
        var result = i * j;
    
        // display the result
        // console.log(`${j} * ${i} = ${result}`);
        }
    
       
    }
    console.log(`${j} * ${i} = ${result}`);
    return result;
}

console.log(multiplicationTable(1,12));
console.log(multiplicationTable);

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

function convertC (c){
    var c;
    var fahrenheit = c*1.8 + 32;
    return fahrenheit;
}
console.log(convertC(18));
console.log(`${25} °C is ${(convertC(25))} Fahrenheit`);
console.log(`${17.5} °C is ${(convertC(17.5))} Fahrenheit`);


// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function maximmum (array){
    var max = array[0];
    var i= 0;
    for(i=0; i<array.length; i++){
        if(array[i]>max & isFinite(array[i])){
        max = array[i];
        }
    }
    return max;
}
console.log(maximmum([5, 8, 7, 6, 3, 2]));
console.log(maximmum([9, 11, 3, 4, 'abcdefg']));
console.log(maximmum(['a', 'b', 'd']));

// 8. Write a function to find the maximum and minimum elements. Function returns an array.

function minMax(array){
    
    var min = array[0];
    var max = array[1];
    var newArrMinMax = [min, max];
    var i= 0;
    for(i=0; i<array.length; i++){
        if(array[i]<min){
        min = array[i];
        }
        else if (array[i]>max) {
            max = array[i]
        }
    }
    newArrMinMax = [min, max];
    return newArrMinMax;

}

console.log(minMax([8, 7, 5, 11, 15]));
console.log(minMax([2, 7, 5, 111, -15]));
console.log(minMax([88, 77, 55, 11, 1115]));


// 9. Write a function to find the median element of array.

function median(array){
    var i, j, medianResult;
    for(i=0, j=array.length-1; i<=j; i++, j--){
         medianResult = (array[i]+ array[j])/2;
    }
    return medianResult;
}
console.log(median([8, 7, 5, 11, 15]));
console.log(median([15, 17, 99, 32, 60, 655]));

// function medianFind (array){
//     var i, median;
//     for(i=0; i<array.length; i++){
//         if(array%2 ==1){
//             median = (array.length)/2
//         } else if (array%2 ==0){
//             median = (array[((array.length)/2)] + array[((array.length)/2 +1)])
//         }
        
//     }
//     return median;
// }
// console.log(medianFind([15, 17, 99, 32, 60, 655]));

// 10. Write a function to find the element that occurs most frequently.

function mostFrequentEl (array){
    var mostFrequentIndex =0;
    var count = 0;
    var maxCount = 0;
    for( var i=0; i<array.length; i++){
       for(j=0; j<array.length; j++){
        if(array[i]=== array[j]){
            count++;
        } 

       }
       if(count>maxCount){
        maxCount = count;
        mostFrequentIndex = i;
       }
       count = 0;
        
     
    }
    return array[mostFrequentIndex];
}
console.log(mostFrequentEl([1, 2, 4, 1, 5, 6, 1]));
console.log(mostFrequentEl(['a', 1, 2, 'a', 'b']));
console.log(mostFrequentEl([5, 6, 6, 7, 9]));

// 11. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

function findFirsAndLastEl (array){
    for(i=0; i<array.length; i++){
        if(array.length%2 !==0){
            return [array[0], array[(array.length-1)/2], array[array.length-1]]; 
        }
        else if(array.length%2 == 0){
            return [array[0], array[array.length-1] ]
        } 
        else {
            return array;
        }
    }
}
console.log(findFirsAndLastEl([1, 11, 15, 17]));
console.log(findFirsAndLastEl([1, 11, 15, 17, 18]));


// 12. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

function average (){
    var average = 0;
    var numberOfEl =0;
    for(i=0; i<arguments.length; i++){
        numberOfEl = numberOfEl + arguments[i];
    }
    average = numberOfEl/arguments.length;
    return average;
}

console.log(average(1, 5, 7));
console.log(average(1,11));

// 13. Write a function to find all the numbers greater than the average.

function numbersGreaterThanAverage (array){
    var average = 0;
    var sum = 0;
    var newArr = [];
    for(i=0; i<array.length; i++){
        
            sum += array[i];
    }
            //console.log(sum);
            for(i=0; i<array.length; i++){
                average =  sum /(array.length);
                 //console.log(sum);
                // console.log(average);
                if(array[i]>average){
                    newArr[newArr.length] = array[i];
                }
            }
            
    
    return newArr;
}

console.log(numbersGreaterThanAverage ([1, 3, 4, 5, 6]));

// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40

function calcBMI (weight, height){
    
    var result = "";
    
    if(!isFinite(weight) || !isFinite(height)){
        result = "Invalid input";
    }
    var height = height/100;
    // console.log(height);
    // console.log(weight);
    var bmi = (weight/(height*height));
    console.log(bmi);

    if(bmi< 15){
        result = "Starvation";
    } else if(bmi<17.5){
        result =  "Anorexic";

    } else if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Ideal";
    } else if (bmi >= 25 && bmi <30) {
        result = "Overweight";
    } else if (bmi >= 30 && bmi < 40) {
        result = "Obese";
    } else if (bmi >= 40) {
        result = "Morbidly obese";
    }
    return result;
}

console.log((calcBMI(60, 160)));

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);