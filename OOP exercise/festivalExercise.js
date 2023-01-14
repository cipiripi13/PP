(function (){

    // konstruktorska funkcija koja kreira zanr za filmove
    function Genre (name){

        //ima zanra
        this.genreName = name;

        // metoda u konstr.objektu
        this.getData = function(){
            var firstLetter = this.genreName[0];
            var lastletter = this.genreName[this.genreName.length-1];
            var result = firstLetter + lastletter;
            return result.toUpperCase();
        }

    }
    function Movie(title, genre, length){
        this.movieTitle = title;
        this.movieGenre = genre;
        this.movieDuration = length;

        // metoda koja vraca listu = ime filma, zanr, i trajanje
        this.getDataMovie = function(){
            return(this.movieTitle + ', ' + this.movieGenre.getData() + ', ' + this.movieDuration + ' min')
        }
    }
    function Program (date){
        this.programDate = new Date(date);  // u zadatku stajalo da koristimo ugradjeni metod date
        this.movieList = [];  // inicijalno prazna lista koju cemo kasnije popuniti
        //vraca ukupnu duzinu liste filmova, broji koliko ih ima
        this.getNumberOfMovies = function(){
            return this.movieList.length;
        }
        // dodaje filmove po danima emitovanja
        this.addMovietoprogram = function(movie){
            if(!(movie instanceof Movie)){
                throw new Error('Invalid movie input')
            } else{
                this.movieList.push(movie);
            }
            return this.movieList;
        }
        this.getTotalLenght = function(){
            var sum = 0;
            this.movieList.forEach(function(movie){
                sum +=movie.movieDuration;
            })
            return sum;
        }
    }
    function Festival (name){
        this.festivalname = name;
        this.programList = [];
        this.addProgram = function (program){
            if(!(program instanceof Program)){
                throw new Error('Invalid input');
            } else {
                this.programList.push(program);
            }
            return this.programList;

        }
    }
 
    /*************************************************************/
    // I deo za genre ubacivanje zanrova kod filmova
    var actionGenre = new Genre('action');
    var comedyGenre = new Genre('comedy');
    var horrorgenre = new Genre('horror');
    var cartoonGenre = new Genre('cartoon');

    // metoda koja vraca prvo mi zadnje slovo iz zanra veliko
    console.log(actionGenre.getData());  //AN
    console.log(comedyGenre.getData());  //CY
    console.log(horrorgenre.getData());  //HR 
    console.log(cartoonGenre.getData()); //CN
    /**************************************************************/

    /*******************************************************/
    // II deo za kreiranje stringa movie sa nazivom i duzinom trajanja
    var sekula = new Movie('Sekula', comedyGenre, 98);
    console.log(sekula.getDataMovie());

    var crtani = new Movie('Tom and Jerry', cartoonGenre, 15);
    console.log(crtani.getDataMovie());

    var betmen = new Movie('Betmen', horrorgenre, 100);
    console.log(betmen.getDataMovie());

    var simpsonovi = new Movie('Simpsons', cartoonGenre, 30)

    /************************************************************/
    // III deo gde kreiramo program i ubacujemo movie u program list
    
    // radili smo probu ovde da vidimo da li radi metoda koju smo pravili
    var sundayProgram = new Program('12/24/2022');
    console.log(sundayProgram.getNumberOfMovies());  //vrati 0 jer jos uvek nista nismo dodali
    var fridayProgram = new Program ('01/13/2023');
    console.log(fridayProgram.getNumberOfMovies()); // 0

     // III deo gde kreiramo program i ubacujemo movie u program list
    console.log(fridayProgram.addMovietoprogram(sekula)); // dodajemo sekula film
    console.log(fridayProgram.getNumberOfMovies());  //broj filmova za taj dan je 1

    console.log(sundayProgram.addMovietoprogram(betmen));
    console.log(sundayProgram.getNumberOfMovies());

    console.log(sundayProgram.addMovietoprogram(simpsonovi));
    console.log(sundayProgram.getNumberOfMovies());

    /*****************************************************************/
    // IV deo - kreiramo festival
    var filmskiSusreti = new Festival(' Filmski susreti');
    console.log(filmskiSusreti);
    console.log(filmskiSusreti.programList);
   
   // console.log(filmskiSusreti.addProgram(sundayProgram));
    var programFS = filmskiSusreti.addProgram(sundayProgram);
    console.log(programFS);
    // console.log(programFS.getNumberOfMovies);



})();


