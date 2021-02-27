Control Flow Examples

let MovieRating = 7;

if (MovieRating === 6 || 7) {
    alert('Movie is very good!');
}

if (MovieRating === 10) {
    alert ('Movie is a peice of art!');
} else if (MovieRating < 10) {
    alert('It could have been better!');
} 

switch(MovieRating) {
    case 10:
        alert('MasterPeice!');
        break;
    case 9:
        alert('Amazing!');
        break;
    case 8:
        alert('Solid!')
        break;
    case 7:
        alert('Very Good!')
        break;
    case 6:
        alert('Average!')
        break;
    case 5:
        alert('Average but could have been better!')
        break;
    default:
        alert('The developers needed more time the movie was rushed!');
}

let MovieIsGood = MovieRating >= 7 ? false : true;