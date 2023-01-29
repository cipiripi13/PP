// u ui module prebacujemo sve sto se tice ui
//cak i selektore

// i onda postavljamo f-je koje se ticu UI i gde radimo sa DOM-om i sa updejtom podataka


var uiModule = (function (){


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


// funkcija koja sakuplja podatke iz inputa kada klijent klikne i da vrati u jedan sredjeni objekat
 var collectMovieData = function(){
    var titleValue = inputTitleElement.value;
    var lengthValue = inputLengthElement.value;
    var genreValue = inputGenreElement.value;


    // i vraca objekat koji vraca podatke iz prve forme
    return{
        title: titleValue,
        length: lengthValue,
        genre: genreValue
    }
}

  //setuje gresku koju mu zadamo kao argument
  var setMovieError = function(error){
       //Radimo validaciju inputa
    // proveramo da li je svaki input popunjen, ako nije vrati poruku
    // if((!titleValue) || (!lengthValue) || (!genreValue)){
    //     movieErrorParagraph.textContent = 'Please fill out all fileds';
    //     movieErrorParagraph.style.color = 'red';
    //     return;
    // }
    movieErrorParagraph.textContent = error;

}

//fja koja dobije film i index
var updateMovieList = function(movie, index){
    var movieLi = document.createElement('li');
    movieLi.textContent = movie.getData();
 // na listu dodajemo novi li sa tekst contetom iz inputa
    movieList.appendChild(movieLi);

//kreiramo da nam film bude opcija u donjoj formi gde je movie
    var movieOption = document.createElement('option');
    // kao tekst elem prikazivace se samo naslov filma
    movieOption.textContent = movie.title;
    //var index = data.addMovie();
    
    // setujemo value iz optiona da bude uvek poslednje sto dodamo
    movieOption.setAttribute('value', index);
    // i spojimo na listu move u drugoj formi
    selectMovie.appendChild(movieOption);
}
//fja koja cisti inpute ali kako radi sa UI nalazi se ovde
var clearInputs = function(){
    movieErrorParagraph.textContent = '';
    inputTitleElement.value = '';
    inputLengthElement.value = '';
    inputGenreElement.value = '';
}

// fja koja samo vraca ono sto se nalazi u inputu za date
var collectProgramData = function(date){
    return{
        date: inputDateElement.value
    }
}

var setProgramError = function(){
        var dateInputElement = inputDateElement.value;
    
        if(!dateInputElement){
            programErrorParagraph.textContent = 'Date is required';
            programErrorParagraph.style.color = 'red';
            return;
        }
       
    
    }
    var updateprogramList = function(program, index){
        var li = document.createElement('li');
          li.setAttribute('id', 'movie-item' + index);

   // var index = festival.listOfPrograms.length - 1;

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

    var collectAddMovieFormData = function(){
        var movieValue = selectMovie.value;
        var programValue = selectProgram.value
    }
    var setMovieToProgramData = function(error){
        movieToProgramElementError.textContent = error;
    }

    var updateProgramData = function(program, oldprogramData){
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


    // iz ovog modula vracamo samo ovaj objekat sa ovim metodama
    // i samo ove metode cemo da ekstrakujemo u app.js
    // i to je na kraju samo ono sto mozemo da koristimo iz ovog modula
    return {
       collectMovieData: collectMovieData,
       setMovieError: setMovieError,
       updateMovieList: updateMovieList,
       clearInputs: clearInputs,
       collectProgramData: collectProgramData,
       setProgramError: setProgramError,
       updateprogramList: updateprogramList,
       collectAddMovieFormData: collectAddMovieFormData,
       setMovieToProgramData: setMovieToProgramData,
       
       updateProgramData: updateProgramData

    }
})();