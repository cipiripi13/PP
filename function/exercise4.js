// Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function chekElement (array, value) {
    var isPresent = '';
    for(i=0; i<array.length; i++){
        if(array[i]=== value){
             isPresent = 'yes';
             break;
        
        } else {
            isPresent = 'no'
        }
    }
    return isPresent;
}
console.log(chekElement([5, -4.2, 3, 7], 3));
console.log(chekElement([5, -4.2, 3, 7], 11));


/*********************************************************************************************************/ 
// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplieByTwo (array){
    var newArr = [];
    
    for(i=0; i<array.length; i++){

        if(array[i]>0){
           
            newArr[i] =array[i]*2;
            
        } else {
            newArr[i] = array[i];
        }
    }
    return newArr;
}
console.log(multiplieByTwo([-3, 11, 5, 3.4, -8]));

function multiplieByTwoEvery (array){
    var newArr = [];
    
    for(i=0; i<array.length; i++){

        //if(array[i]>0){
           
            newArr[i] =array[i]*2;
        }
            
        // } else {
        //     newArr[i] = array[i];
        // }
    
    return newArr;
}
console.log(multiplieByTwoEvery([-3, 11, 5, 3.4, -8]));

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3


function findTheMinimum (array){
    var minimum = array[0];
    for(i=0; i<array.length; i++){
        if(minimum>array[i]){
             minimum = array[i];
        }
    }
    return minimum;
}
console.log(findTheMinimum([4, 2, 2, -1, 6]));


// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2



// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumOfPositiveElements (array){
    var sum = 0;
    for(i=0; i<array.length; i++){
        if(array[i]>0){
            sum += array[i];  //sum = array[i]
        }
    }
    return sum;
}
console.log(sumOfPositiveElements([3, 11, -5, -3, 2]));

function sumOfElements (array){
    var sum = 0;
    for(i=0; i<array.length; i++){
        
            sum += array[i];  
    
    }
    return sum;
}
console.log(sumOfElements([3, 11, -5, -3, 2]));

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.


function simetric (array) {
    var result ='';
    for(i=0; i<array.length; i++){
        if(array[i] === array[array.length-1]-i){
            result = "The array is symetric";
            break;
        } else { 
            result = "The array isn't symetric";
    
        }
        
    }
    return result;
}


console.log(simetric([2, 4, -2, 7, -2, 4, 2]));

/*******************************************************************************************************/ 
// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwinesArrays (array1, array2) {
    var intertwinArray = [];
    for(i=0; i<array1.length; i++){
            if(array1.length === array2.length){
                intertwinArray[intertwinArray.length] = array1[i];
                intertwinArray[intertwinArray.length] = array2[i];
    
           
        }
    } return intertwinArray;
}
console.log(intertwinesArrays([4, 5, 6, 2], [3, 8, 11, 9] ));
//console.log(intertwinesArrays([4, 5, 6, 2], [3, 8, 11] ));


/********************************************************************************************/ 
// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenation (a, b) {
    var spojeniNiz = [];

    for (i=0; i<a.length-1; i++) {
    for(k=0; k<b.length-1; k++){
        spojeniNiz[i] = a + "," + b;
        return spojeniNiz;
    }
    
}
//return spojeniNiz;
}
console.log(concatenation([4, 5, 6, 2], [3, 8, 11, 9]));
console.log(typeof((concatenation([4, 5, 6, 2], [3, 8, 11, 9]))));

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// var array =[4, 6, 2, 8, 2, 2];

//             console.log(array[array.length-1]); //vraca poslednji clan niza ---> 2
//             console.log(array.length);  //===> vraca da ima 6 elementa po brojanju id 1
//             console.log(array.length-1); //====>vraca da ima 5 elem.niza
//             console.log(array);
//            //console.log(newArr);
   
function deleteEl (array, element){
    var newArr =[];
    for (i=0; i<array.length; i++){
        if(array[i] != element){
            newArr[newArr.length] = array[i];
           
        }
    } return newArr;
}
console.log(deleteEl([4, 6, 2, 8, 2, 2], 2));

/*****************II nacin************************/ 
function deleteE (array, el) {
    var result = [];
    for(i=0; i<array.length; i++) {
        if(array[i] === el){
            delete array[i];
            result = array;
        }
    } return result;
}
console.log(deleteE([4, 6, 2, 8, 2, 2], 2));

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function inserEl (array, insertEl, position){
    if(!position){  //proveravamo da li smo poslali vrednost, ako nismo kreni od prvog parametra
        position=1;  
    }
    var res = [];
    for(i=0; i<array.length; i++){
        if(i=== position-1){  //napoziciji pos-1 insertuj tekst koji zelimo
            res +=insertEl;
        }
        res =res+ ',' + array[i]; // u svim ostalim slucajevima samoprepisi ono sto smo vec dali u stringu
    }
    return res;
}
console.log(inserEl([2, -2, 33, 12, 5, 8], '78', 3));