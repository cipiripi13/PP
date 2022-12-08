// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var favoriteCaffe = {
    name: 'Espresso',
    strength: 'mild',
    flavour: 'sweet',
    milk: 'yes',
    sugar: 'yes'
}
console.log(favoriteCaffe);

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var favoriteMovie = {
    name: 'Simon Birch',
    actors: {
        lead1: 'Joseph Mazzello'.
        lead2: 'Oliver Platt'
    },
    director: 'Mark Steven Johnson',
    genre: 'American comedy-drama',
    year : 1998
}

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function creatObject (description, programLanguage, git, status){
    var project = {
        description : description,
        programLanguage : programLanguage,
        gitRep: git,
        booleanStatus: status,
        printRepo: function (){
            console.log(project.gitRep);
        },
        isJS: function (){
            var result = 'Yes'
           if(programLanguage == 'Java Script'){
            result = 'yes';
           } else {
            result = 'no';
           }
           return result;

        },
        isInDevelop: function(){
            console.log(project.booleanStatus);
            return project.booleanStatus;
        }
    }
    return project;
}
console.log(creatObject('Beauty App', 'Java Script', 'git.com', true));
var result = console.log(creatObject('Beauty App', 'Java Script', 'git.com', true));
// console.log(result.isJS());     //zasto ne radi?

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function prepareMeal (name, type, complexityValue, ingredients, time, instructions){
    var recipe = {
        dishName: name,
        typeCuisine: type,
        complexity: complexityValue,
        listOfIngredients: ingredients,
        timeToPrep: time,
        howToPrep: instructions,
        allTheIngredients: function(){
            return recipe.listOfIngredients;   // ili samo return ingredients
        },
        under15: function(){
            if(time < 15){
                return 'This meal can be prep under 15 minutes';
            } else {
                'This meal requires more than 15 minutes to be prep';
            }
        },
        delIngred: function(someI){
            var newList = [];
            for(var i=0; i<recipe.listOfIngredients.length; i++){
                if(recipe.listOfIngredients[i] !== someI){
                    newList[newList.length] = recipe.listOfIngredients[i];
                }
            }
            return newList;
        }
    }
    return recipe;
}

var meal = prepareMeal('Pasta', 'mediterranean meal', 2,['Pasta', 'Milk', 'Meat', 'Onions', 'Eggs'],30, 'Recipe');
console.log(meal);
console.log(meal.allTheIngredients());
console.log(meal.delIngred('Eggs'));
console.log(meal.under15());


