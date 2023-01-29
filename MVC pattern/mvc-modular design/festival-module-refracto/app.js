// ovo je sada nas main modul koji daje sve funkcionalnosti nasoj app
// i njemu sada prosledjujemo data modul i ui modul

(function(data, ui){

//     // Prvo smo hvatali sve buttone iz html-a jer na njima ima akcije i eventListener koji se desava na klik
var createMovieButton = document.getElementById('create-movie');
var createProgramButton = document.getElementById('create-program');
var addMovieToProgram = document.getElementById('add-movie');


var onMovieCreateClick = function (){
    // da bi dobili nesto iz forme vracamo metodu iz ui
    var formData = ui.collectMovieData();
    var isValid = data.isValidMovie(
        formData.title,
        formData.length,
        formData.genre
        );
        if(!isValid){
            ui.setMovieError('Input is invalid');
            return;
        }
        var createMovie = data.createMovie(
            formData.title,
            formData.length,
            formData.genre
        );
        var index = data.addMovie(createMovie);
        ui.updateMovieList(createMovie, index);
        ui.clearInputs();
    }

var onProgramCreate = function(){
    var formData = ui.collectProgramData();
    var isValid = data.isValidProgram(
        formData.date
        );
        if(!isValid){
            ui.setMovieError('Input is invalid');
            return;
        }
        var createProgram = data.createProgram(
            formData.date
        );
        var index = data.addProgram(createProgram);
        ui.updateprogramList(createProgram, index);
        ui.clearInputs();
}
var final = function(){
    var formData = ui.collectAddMovieFormData();
    var updateProgram = data.addMovieToProgram;
        // formData.movieIndex,
        // formData.programIndex
    
    if(!updateProgram){
        ui.setMovieToProgramData('Invalid input');
        return;
    }
    ui.updateProgramData(updateProgram.program, updateProgram.oldProgram);
        
}
    
    
// dodajemo dogadjaje koji ce se svaki put desiti na klik
createMovieButton.addEventListener ('click', onMovieCreateClick);
 createProgramButton.addEventListener('click', onProgramCreate);
 addMovieToProgram.addEventListener('click', final);

})(dataModule, uiModule)
// prosledjujemo kao argumente jer se oslanjamo da vec to postoji negde iznad





