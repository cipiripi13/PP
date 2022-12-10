// funkcija koja kreira  objekat ---- na  neki nacin imitira klasu

function createRecipe (name, cuisineType, complexity, listIngrid, time, instructiones){
    // if(typeof name !== 'string'){
    //     console.log('Insert word');   //moglo je i ovo da se uabci u zadatak kako bi dalje poboljsali zadatak
    // }

    var recipe = {
        DishName: name,
        type: cuisineType,
        complexity: complexity,
        ingredients: listIngrid,
        timeToPrep: time,
        instructiones: instructiones,
        printIng: function (){
            console.log(recipe.ingredients);
        },
        chekIfunder15min: function(){
            return recipe.timeToPrep < 15; // vraca samo true ili false
        },
        changeCuisineType: function(newCuisineType){
            recipe.type = newCuisineType; // samo menja postojecu novomvrednoscu i to seteuje u objektu
        },
        deleteIngridient: function(inToDel){
            var updatedIng = [];
            for(var i=0; i<recipe.ingredients.length; i++){
                if(recipe.ingredients[i] !== inToDel){
                    updatedIng[updatedIng.length] = recipe.ingredients[i];
                }
            }
            recipe.ingredients = updatedIng; // ovako smo samo setovali da se updejtuje taj objekat
        }

    }
    return recipe;
} 

var paprikas = createRecipe('paprikas', 'madjarska kuhinja', 2, ['paprike', 'luk', 'biber'], 60, 'sipati vodu u lonac...')

console.log(paprikas);
paprikas.printIng();  //samo ovako pozivamo jer metoda vec u sebi ima console.log
console.log(paprikas.chekIfunder15min());
paprikas.changeCuisineType('italijanska kuhinja');
console.log(paprikas);

console.log(paprikas instanceof createRecipe); //vrati false
console.log(paprikas instanceof Object);  //vrati true