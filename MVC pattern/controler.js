var festival = new Festival();
// Prvo smo hvatali sve buttone iz html-a
var createMovieButton = document.getElementById('create-movie');
var createProgramButton = document.getElementById('create-program');
var addMovieToProgram = document.getElementById('add-movie');

//Drugo kreiramo promenljive za inpute

var inputTitleElement = document.getElementById('title');
var inputLengthElement = document.getElementById('length');
var inputGenreElement = document.getElementById('genre');
var movieErrorParagraph = document.getElementById('movie-error');
var movieList = document.getElementById('movie-list');

// iz druge forme html elementi
var inputDateElement = document.getElementById('date');
var programErrorParagraph = document.getElementById('program-error');
var programListElement = document.getElementById('program-list');

var movieToProgramElement = document.querySelector('.addMovieToProgram');
var finalAddtoList = document.querySelector('.finalAdd');



var selectMovie = document.getElementById('movie-select');
var selectProgram = document.getElementById('program-select');



//Kreiramo promenljive koje ce pamtiti value iz input-a
// funkcija koja kreira film na osnovu prosledjenih vrednosti
function addMovie(){
    var titleValue = inputTitleElement.value;
    var lengthValue = inputLengthElement.value;
    var genreValue = inputGenreElement.value;
    // console.log(titleValue);
    
    //Radimo validaciju inputa
    // proveramo da li je svaki input popunjen, ako nije vrati poruku
    if((!titleValue) || (!lengthValue) || (!genreValue)){
        movieErrorParagraph.textContent = 'Please fill out all fileds';
        movieErrorParagraph.style.color = 'red';
        return;
    }
   
    movieErrorParagraph.textContent = '';
    // u promenljivoj movie pozivamo konstruktorsku funkciju
    var movie = new Movie(titleValue, lengthValue, genreValue);
    //taj fil zatim dodamo na listu filmova
        festival.listOfMovies.push(movie);
    

    var movieLi = document.createElement('li');
    // znaci u li kao tekst vraca metodu iz enteties gde ce prikazati sve detealje o filmu
    // ime, duzinu i zanr skraceno
    movieLi.textContent = movie.getData();

    // na listu dodajemo novi li sa tekst contetom iz inputa
    movieList.appendChild(movieLi);

    var movieOption = document.createElement('option');
    movieOption.textContent = movie.title;
    var index = festival.listOfMovies.length - 1;
    movieOption.setAttribute('value', index);
    selectMovie.appendChild(movieOption);

    inputTitleElement.value = '';
    inputLengthElement.value = '';
    inputGenreElement.value = '';
    

}

function addProgram(){
    var dateInputElement = inputDateElement.value;

    if(!dateInputElement){
        programErrorParagraph.textContent = 'Date is required';
        programErrorParagraph.style.color = 'red';
        return;
    }
    var date = new Date(dateInputElement);

    var program = new Program(date);
    festival.listOfPrograms.push(program);

    // li.setAttribute('id', 'movie-item' + index);

    var index = festival.listOfPrograms.length - 1;

    var liProgram = document.createElement('li');
    liProgram.setAttribute('id', 'program-list' + index);
    liProgram.textContent = program.getData();
    programListElement.appendChild(liProgram);

    var option = document.createElement('option');
    option.setAttribute('value', index);
    option.textContent = program.getData();
    selectProgram.appendChild(option);

}


function finalAdd(){
    var movieIndex = selectMovie.value;
    var programIndex = selectProgram.value;

    if(!movieIndex || programIndex){
        movieToProgramElement.textContent = 'Invalid input';
    }
    program.addMovie(movie);
}


// dodajemo dogadjaje koji ce se svaki put desiti na klik
createMovieButton.addEventListener ('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
addMovieToProgram.addEventListener('click', finalAdd);


