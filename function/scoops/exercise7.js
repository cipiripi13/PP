// 1. Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// ● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
// ● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
// kids.&quot;
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (job, partnersName, location, numberOfChildren){
     return console.log(`You will be ${job}, and married to ${partnersName}, living in ${location}, with ${numberOfChildren} kids`);
}
console.log(tellFortune('bball player', 'Shaq', 'Spain', 3));
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// 2. You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// ● takes 1 argument: your puppy&#39;s age.
// ● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
// ● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
// Call the function three times with different sets of values.

function doggieToHumanAge (age) {
    var todoggieAge = age*7;
     console.log(`Your dog is ${todoggieAge} years old in dog years`);
}
(doggieToHumanAge(5));
(doggieToHumanAge(7));
(doggieToHumanAge(2));


// 3. Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// ● takes 2 arguments: age, amount per day.
// ● calculates the amount consumed for rest of the life (based on a constant max age).
// ● outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
// X&quot;
// Call that function three times, passing in different values each time.
function calculateSupply (age, amountPerDay){
    var maxAge = 60;
    var yearTomonth = 365;
    var left = (maxAge - age)*amountPerDay*yearTomonth;
    return console.log(`You will need ${left} twix to last you until the ripe old age of
    ${maxAge}`);

}
calculateSupply(30, 2);
calculateSupply(33, 3);
calculateSupply(3, 2);

// 4. It&#39;s hot out! Let&#39;s make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// ● Store a celsius temperature into a variable.
// ● Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
// Create a function called fahrenheitToCelsius:
// ● Now store a fahrenheit temperature into a variable.
// // ● Convert it to celsius and output &quot;NN°F is NN°C.&quot;

function celsiusToFahrenheit(celsius){
    var celsiusToF = celsius*1.8 + 32;
    return console.log(`${celsius}°C is ${celsiusToF}°F`)
}
celsiusToFahrenheit(12);

function fahrenheitToCelsius(fahrenheit){
    var fahrenheitToC = ((fahrenheit-32)*5)/9;
    return console.log(`${fahrenheit}°F is ${fahrenheitToC}°C.`)
}
fahrenheitToCelsius(3);