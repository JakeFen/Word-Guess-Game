var wins = 0;
var numberOfGuesses = 6;

var overwatchHeros = [
    "ANA",
    "ASHE",
    "BAPTISTE",
    "BASTION",
    "BRIGITTE",
    "DVA",
    "DOOMFIST",
    "GENJI",
    "HANZO",
    "JUNKRAT",
    "LUCIO",
    "MCCREE",
    "MEI",
    "MERCY",
    "MOIRA",
    "ORISA",
    "PHARAH",
    "REAPER",
    "REINHARDT",
    "ROADHOG",
    "SIGMA",
    "SOLDIER76",
    "SOMBRA",
    "SYMMETRA",
    "TORBJORN",
    "TACER",
    "WIDOWMAKER",
    "WINSTON",
    "WRECKINGBALL",
    "ZARYA",
    "ZENYATTA"
];

function Hangman() {
    // a-z matches lowercase letters
    // g modifier helps to do match gobally
    // i case-insensitive
    var randomHero = overwatchHeros[Math.floor(Math.random()*overwatchHeros.length)];
    var randomHero = randomHero.replace(/a-z/gi, "_");

    // pulls the id hero-name from html and puts randomHero in place of heroName
    var heroName = document.getElementById('hero-name');
    heroName.textContent = randomHero;

    console.log(randomHero); 
}

Hangman();

function newGame() {
// when enter is press restart game
// make function that when enter is pressed run function of hangman
}

// display hero

// when a key is pressed do something
// add key pressed to list

// lower number of guesses when pressing wrong key

// add win when they guess the word correct

// change image when word is revealed
