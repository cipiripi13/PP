'use strict';

//create iif that holds all code

(function(){

    //konstruktorska fja koja kreaira genre
    function Genre(n){  //sadrzi name -  ime
        if(!n){
            throw new Error ('Property name is required');
        }
        this.name = n;
        this.getData = function(){   //metoda koja vraca prvo i zadnje veliko slovo
            var firstletter = this.name[0];
            var lastletter = this.name[this.name.length-1];
            var result = firstletter + lastletter;
            return result.toUpperCase();
        };
    }
   


    // konstrukt fja koja kreira movie
    function Movie(t, g, l){
        if(!t || !g || !l){
            throw new Error('Missing property');
        }
        if (!(g instanceof Genre)){   //mora da genre potice iz gornje konstr fje tj.da budde njegova instanca
            throw new Error('invalid genre input');
        }
        this.title = t;
        this.genre = g;
        this.lengthOfMovie = l;
        this.getData = function (){
            return (this.title + ', ' + this.lengthOfMovie + 'min, ' + this.genre.getData()); 
        };
    }


    // novi konstruktor --- program 

    function Program(d){  //date and list
    
        if(!d) {   // ako ne stavimo datum baci gresku
            throw new Error("property date requiered");
        }
        this.date = new Date(d)
        this.movieList = [];  //inicijalno prazan niz ali kasnije u nizu objekti iz konstruktora movie
        this.totalNumberMovies = this.movieList.length; // ukupan broj filmova
        this.addMovie = function(m){
            if(!(m instanceof Movie)){
                throw new Error('Invalid movie input');
            }
            this.movieList.push(m)
        }
        this.getTotallength = function(){   //racuna ukupunu duyinu svih filmova fja
            var total = 0;
            this.movieList.forEach(function(movie){
                total +=movie.lengthOfMovie;
            })
            return total;
        }
        this.getData = function (){
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result = day + '. ' + month + '. ' + year + ' , program duration' + this.getTotallength() + ' min';
            // string koji vraca 

            this.movieList.forEach(function(movie){
                result += '\n \t\t' + movie.getData(); //svaki film ce da ispisuje u novomm redu plus uvuceno
            })
            return result;
        }
    }


    //novi konstruktor festival

    function Festival(n){
        if(!n){
            throw new Error('name required')
        }
        this.name = n;
        this.programList = [];    //samopozivajca fja koja u property totalNumbM vraca neku vrednost
        this.getTotalNumberMovies = function (){   //sve se evaluira u ukup broj filmova
            var total = 0;
            this.programList.forEach(function(e){
                total += e.totalNumberMovies;
            })
            // for(var i =0; i<this.programList.length; i++){
            //     var proggram = this.programList[i];
            //     total += proggram.totalNumberMovies;
            // }

            //III nacin
            // for(var program in this.programList){
            //     total += program.totalNumberMovies;
            // }
            return total;

          
            };

            this.addProgram = function(p){
                if(!(p instanceof Program)){
                    throw new Error('Invalid  program input');
                }
                this.programList.push(p)
        };
        this.getData = function(){
            var result = this.name + ' festival has ' + this.getTotalNumberMovies() + ' movie  titles';
            this.programList.forEach(function(program){
                result += '\n \t' + program.getData(); //svaki film ce da ispisuje u novomm redu plus uvuceno
            })
            return result;
        };

        }
    }

       // this.totalNumberMovies = this.getTotalNumberMovies();  //property dobija ono sto vraca ova metoda
    

    function createMovie (t, l, g){
        var genre = new Genre(g);
        var movie = new Movie(t, genre, l);
        return movie
    }
    function createprogram(d){
        return new Program(d);
    }


    //Testing
try {
        // var actionGenre = new Genre('action');
        // var horroGenre = new Genre('horror');
        // var dramaGenre = new Genre('drama');
        // var comedyGenre = new Genre('comedy');

        // console.log(actionGenre.getData());  //AN
        // console.log(horroGenre.getData()); //HR
        // console.log(actionGenre);
        // console.log(horroGenre);
        var rushHoure = new Movie('Rush Hour', new Genre('action'), 95);
        rushHoure = createMovie('Rush Hour', 95, 'action');
        var theRing = new Movie('The Ring', horroGenre, 103 );
        var frida = new Movie('Frida', dramaGenre, 87 );
        var sekula = new Movie('Sekula se opet zeni', comedyGenre, 91)


        console.log(rushHoure.getData());
        console.log(rushHoure.genre.name);
        console.log(theRing);

        var sundayProgram = new Program('12/24/2022');
        var mondayProgram = new Program('12/25/2022');
        sundayProgram.addMovie(rushHoure);
        sundayProgram.addMovie(theRing);

        console.log(sundayProgram.getData());


        console.log(sundayProgram);
        console.log(mondayProgram);
        var kustendorf = new Festival('Kustendorf');
        console.log(kustendorf);
        console.log(kustendorf.totalNumberMovies);  //vraca 0
    } catch (error){
        console.log(error.message);
    }
   
})();

//nov nacin za iteraciju kroz niz
// var arr = [2,4,5];
// for(var number in arr){
//     console.log(number);  //dobijamo indexe
// }

// for(var number of arr){
//     console.log(number);   // dobijamo clanove niza
// }