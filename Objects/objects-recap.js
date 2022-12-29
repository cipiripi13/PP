// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var favoriteCoffee = {
    name: "cappucino",
    strength: 3,
    flavour: "sweet",
    milk: "yes",
    sugar: "yes"
}


// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var favoriteMovie = {
    title: "Simon Birch ",
    actors: {
        leadOne:  "Joseph Mazzello",
        
        leadTwo: " Oliver Platt"
    },
    director: "Mark Steven Johnson",
    genre: "American comedy-drama",
    popularity: "8 stars"
}
console.log(favoriteMovie);
console.log(favoriteMovie.actors.leadOne);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject (des, pLang, gitR, bStatus){
    var project = {
        description: des,
        programmingLanguage: pLang,
        gitRepo: gitR,
        booleanStatus: bStatus,
        printRepo: function(){
            console.log(project.gitRepo);
        },
        checkPL: function(){
            return (project.programmingLanguage === 'JS')
        },
        status: function(){
            return project.booleanStatus;
        }
    }
    return project;
}


var resultProject = createProject('Gaming App', 'JS', 'gitR', true);
console.log(resultProject);
console.log(resultProject.programmingLanguage);
console.log(resultProject.printRepo());


// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function culinaryRecipe(name, typeC, complex, listIng, time, instr){
    var recipe = {
        name: name,
        cuisineType: typeC,
        complexity: complex,
        listOfIngredients: listIng,
        timeToPrep: time,
        instructiones: instr,
        printIng: function(){
            console.log(recipe.listOfIngredients);
        },
        timeToPrepUnder15: function(){
            return recipe.timeToPrep < 15;
        },
        changeType: function(newCuisine){
            return recipe.cuisineType = newCuisine;
        },
        deleteIngr: function(ingredient){
            var newList = [];
            for(var i=0; i<recipe.listOfIngredients.length;i++){
                if(recipe.listOfIngredients[i] !== ingredient){
                    newList[newList.length] = recipe.listOfIngredients[i];
                }
            }
           return  recipe.listOfIngredients = newList;
        }
    }
    return recipe;
}

var meal = culinaryRecipe('Pasta', 'Italian', 2, ['garlic', 'pasta', 'cream'], 30, 'Bla bla bla');
console.log(meal);
console.log(meal.deleteIngr('cream'));
console.log(meal.changeType('Serbian'));