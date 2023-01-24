function Festival(){
    this.listOfMovies = [];
    this.listOfPrograms = [];

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
    return this.title + ', ' + this.length + ' min, ' + this.getGenre();
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

// var sekula = new Movie('sekula', 100, 'komedija');
// console.log(sekula);
// sekula.getGenre();
// console.log(sekula.getGenre());
// console.log(sekula.getData());

// var utorak = new Program('01/24/2023');
// console.log(utorak);
// console.log(utorak.getTotalMovies());
// console.log(utorak.getData());
