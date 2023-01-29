// U data smestamo klase tj.konstruktorske fje
// cinice osnovu za nase neko dalje pozivanje metoda
// vezana je samo za podatke, koji ce ciniti srz nase aplikacije
//podatke vizualizujemo u UI modelu, ali ovde ih samo cuvamo i smestamo u krajnje metode

var dataModule = (function (){

    //nas vrhovni objekat, objekat koji ce da cuva sve podatke za nas
    var festival = new Festival();

    //fja koja samo vrati novi objekat
    function createFestival(){
        return new Festival(); 
    }

    function Festival(){
        this.listOfMovies = [];
        this.listOfPrograms = [];
    
    }
    function Genre(genre){
        this.genre = genre;
    }
    Genre.prototype.getGenre = function(){
        return `The genre is ${this.genre}`;
    }
    function Movie(title, length, genre){
        this.title = title;
        this.length = length;
        this.genre = genre;
    
    }
    
    Movie.prototype.getGenre = function(){
        var firstLetter = this.genre[0].toUpperCase();
        var lastletter = this.genre[this.genre.length-1].toUpperCase();
    
        return firstLetter + lastletter;
    }
    
    Movie.prototype.getData = function(){
        //vraca nam sve podatke o filmu i koristimo kasnije u controller
        return this.title + ', ' + this.length + ' min, ' + this.getGenre();
    }

    // kreiramo fju koja kreira novi film i vrati taj film objekat
    // na osnovu podataka koje smo prosledili za film vraca nam novi objekat klase Movie
    function createMovie(title, length, genre){
        return (new Movie(title, length, genre));
    }
    // metoda koja prima movie objekat i koja u festival koji smo gore kreirali ubacuje novi film 
    //vraca nam njegov index jer push metoda vraca duzinu niza na kom se pushuje novii element
    //  a novi niz - 1 je poslednji index ubacenog elementa
    function addMovie(movie){
        return festival.listOfMovies.push(movie)-1;
    }

    // fja koja provera validnost podataka
    function isValidMovie (title, length, genre){
        if(!title || !length || !genre){
            return false;
        } else{
            return true;
        }
    }
    
    
    function Program (date){
        this.date = new Date (date);
        this.listOfMovies = [];
    }
    
    Program.prototype.lengthOfAllMovies = function(){
        this.sum = 0;
        this.listOfMovies.forEach(function(movie){
            if (!movie || !(movie instanceof Movie)){
                console.log('Invalid input');
                return;
            }
            // this.listOfMovies.push(movie);
            sum += this.movie.length;
            return sum;
    
        })
    };
    Program.prototype.getTotalMovies = function(){
        return this.listOfMovies.length;
    }
    Program.prototype.getData = function(){
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
    
        var date = day + '/' + month + '/' + year;
        var resultDateString = date;
        console.log(resultDateString);
    
        // resultDateString =  this.getTotalMovies() + ' movie duration ' + 
        // this.lengthOfAllMovies() + ' min';
        return resultDateString;
    }
    function isValidProgram(date){
        if(!date){
            return false;
        } else{
            return true;
        }
        
    }
    function addProgram(program){
        return festival.listOfPrograms.push(program)-1;
    }
    function createProgram(date){
        return new Program(date);
    }
   
// i u celum modulu nas ne zanima sta je implementirano vec sta nam vraca interface, sta izvlacimo na kraju iz njega
// ne zanimaju nas vise klase vec ono sto je ovde implementirano, enkapsulirano
// ovo je ono cemu ima pristup nasa aplikacija jeste ovim metodama koje vracaju nesto za nas
//i u njima je smestena cela logika gde se nalaze nasi podaci kao srz aplikacije
// koje cemo vizualizovati u UI modulu
   return {
    createFestival: createFestival,
    createMovie: createMovie,
    isValidMovie: isValidMovie,
    addMovie: addMovie,
    isValidProgram: isValidProgram,
    addProgram: addProgram,
    createProgram: createProgram,

    
   }

})();

 



