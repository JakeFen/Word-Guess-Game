// gets id wins takes the totalWins count and puts it in place of wins id
var wins = document.getElementById("wins");
var totalWins = 0;
wins.textContent = totalWins;

// gets id guesses-left takes the numberOfGuesses count and puts it in place of guesses-left id
var guessesLeft = document.getElementById("guesses-left");
var numberOfGuesses = 6;
guessesLeft.textContent = numberOfGuesses;

// gets id already-guessed takes the usersGuesses string and puts it in place of alreadyGuessed
var alreadyGuessed = document.getElementById('already-guessed');
var usersGuesses = ["_"];
alreadyGuessed.textContent = usersGuesses;

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
  var randomHero =
    overwatchHeros[Math.floor(Math.random() * overwatchHeros.length)];
  var randomHero = randomHero.replace(/a-z/gi, "_");

  // pulls the id hero-name from html and puts randomHero in place of heroName
  var heroName = document.getElementById("hero-name");
  heroName.textContent = randomHero;
}

Hangman();

function newGame() {
  // when enter is press restart game
  // make function that when enter is pressed run function of hangman
}

// when a key is pressed do something
// add key pressed to list

// lower number of guesses when pressing wrong key

// add win when they guess the word correct

// change image when word is revealed
