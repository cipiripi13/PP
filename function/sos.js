// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true

function chekForFive (element, string){
    
    for(i=0; i<string.length; i++){
        if(string[i] == element){
            return true;
        }
    }
    return false;
}
console.log(chekForFive(5,'1b895abd'));
console.log(chekForFive(5,'1bser9re'));

// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replaceJS (string){
    var newString = "";
    for(i=0; i<string.length; i++){
        if(string[i] === "J" || string[i] === "S"){
            newString +="*"

        } else {
            newString += string[i];
        }
    }
    return newString;
}
console.log(replaceJS('Programming in JS is super interesting!'));

// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

function insertChar (position, string, letter){
    var stringNew = '';
    for(i=0; i<string.length; i++){
        if(i === position-1){
            stringNew += letter;
        } else {
            stringNew += string[i];
        }
    }
    return stringNew;
}

console.log(insertChar(4, 'Goo  morning', 'd'));

// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”
// 

function deleteEl (string, position){
    var result = '';
    for(i=0; i<string.length; i++){
        if(i === position){
            continue;
        } 
            result += string[i];
        
    }
    return result;
}
console.log(deleteEl("Goodd morning!", 3));

// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

function deleteSecond (array){
    var newArr = [];
    for(i=0; i<array.length; i++){
        if((i+2) % 2 !== 0){
            continue;
        } newArr[newArr.length] = array[i];
    }
    return newArr;
}

console.log(deleteSecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function doubleValues (array, position1, position2){
    var newArray = [];
    for (i=0; i<array.length; i++){
        if(i>=2 && i<=6){
            newArray[newArray.length] = array[i]*2;
        } else{
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}
console.log(doubleValues([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 7. Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function chek (array1, array2){
    var answer = true;
    for(i=0; i<array1.length; i++){
        for(j=0; j<array2.length; j++){
            if(array1[i] !== array2[j]){
                answer = false;
            } else {
                answer = true;
            }
        }
    }
    return answer;
}
console.log(chek([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));
console.log(chek([5, 2, 5, 7], [8, 9, 3, 1, 11, 4, 3]));

// 8. Write a function that sorts an array of strings by the number of appearances of the letter
// ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]



// 9. Write a function that prints out the date of the next day.
// Output: 25. 10. 2018.

function printTheNextDay (day){
    var day = day+1;
    var month = 10;
    var year = 2018.
    return console.log((day + '.' + month + '.' + year));
}
console.log(printTheNextDay(24));


// 11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
// 78
// 111
// 4
// 4321

function printArray (array){
    var string = array + "";
    var tab =  "\n"
    for(i=0; i<array.length; i++){
        console.log(array[i]);
    }
    
}
printArray([78, 111, 4, 4321]);




