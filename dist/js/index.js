const genres = ['crime', 'history', 'western'];

let randomNum = Math.floor(Math.random() * genres.length);
let randomIdx = Math.floor(Math.random() * genres * 20);

const genre = genres[randomNum];

document.getElementById(genre + randomNum).className = 'show';
9;
