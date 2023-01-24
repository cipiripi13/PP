// ovo je KONTROLER koji zapravo kontrolise aplikaciju


// festival objekat ce zapravo da sadrzi sve nase filmove i sve programe
// MOZAK CELE APLIKACIJE
//jer kako dodajemo neki film on ce se dodavati na lisu filmova i posle upisivati u program listu
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

var movieToProgramElementError = document.querySelector('.addMovieToProgramError');
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


    // nakon sto se sve unelo i prolsedilo ocisti podatke iz inputa
    inputTitleElement.value = '';
    inputLengthElement.value = '';
    inputGenreElement.value = '';


    //krieamo da nam film bude opcija u donjoj formi gde je movie
    var movieOption = document.createElement('option');
    // kao tekst elem prikazivace se samo naslov filma
    movieOption.textContent = movie.title;
    var index = festival.listOfMovies.length - 1;
    // setujemo value iz optiona da bude uvek poslednje sto dodamo
    movieOption.setAttribute('value', index);
    // i spojimo na listu move u drugoj formi
    selectMovie.appendChild(movieOption);
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

    inputDateElement.value = '';

}


function finalAdd(){
    var movieIndex = selectMovie.value;
    var programIndex = selectProgram.value;

    var movie = festival.listOfMovies[movieIndex];

    var program = festival.listOfPrograms[programIndex];
    // program.addMovie(movie);

    if(!movieIndex || !programIndex){
        movieToProgramElementError.textContent = 'Invalid input';
        movieToProgramElementError.style.color = 'red';
    } else{
        var liForMovieToProgram = document.createElement('li');
        liForMovieToProgram.textContent = movie.getData() + ' you can watch on this date -' +  program.getData();
        
        liForMovieToProgram.setAttribute('class', 'lisItemFinal-' + movieIndex);
        // console.log(liForMovieToProgram);
        finalAddtoList.appendChild(liForMovieToProgram);


    }
    selectMovie.value = '';
    selectProgram.value = '';
    
}


// dodajemo dogadjaje koji ce se svaki put desiti na klik
createMovieButton.addEventListener ('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
addMovieToProgram.addEventListener('click', finalAdd);


