// Classes
class Movie {
    Actor1 = 'Arnold Schwarzenegger'
    Actor2 = 'Edward Furlong'
    constructor(title, director, genre, length) {
        this.title = title
        this.director = director
        this.genre = genre
        this.length = length
     }
     
     getActor1() {
         return this.Actor1;
     }

     getActor2() {
         return this.Actor2;
     }
}
const Terminator = new Movie('Terminator 2', 'James Cameron', 'action', 156)

console.log(Terminator.name);