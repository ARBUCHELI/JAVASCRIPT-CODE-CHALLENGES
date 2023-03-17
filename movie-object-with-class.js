class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview = function() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
    }
}

const SchindlersList = new Movie("Schindler's List", "Steven Spielberg", "Drama", 1993, 97);
const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 83);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());