// gets id wins takes the totalWins count and puts it in place of wins id
var wins = document.getElementById("wins");
var totalWins = 0;
wins.textContent = totalWins;

// gets id guesses-left takes the numberOfGuesses count and puts it in place of guesses-left id
var guessesLeft = document.getElementById("guesses-left");
var numberOfGuesses = 6;
guessesLeft.textContent = numberOfGuesses;

// holds keys pressed in this array
var usersGuesses = [];
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
  "SOLDIER",
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
    randomHero = randomHero.replace(/[A-Z]/g, "_ ");

  // pulls the id hero-name from html and puts randomHero in place of heroName
  var heroName = document.getElementById("hero-name");
  heroName.textContent = randomHero;

  // Finding what key was pressed and printing it to screen
  document.onkeyup = function(event) {
    var usersGuess = event.key;
    var alreadyGuessed = document.getElementById('already-guessed');
    usersGuesses.push(usersGuess);
    alreadyGuessed.textContent = usersGuesses;
  }

  
    //when enter is press restart game
    //make function that when enter is pressed run function of hangman

}

Hangman();

// lower number of guesses when pressing wrong key

// add win when they guess the word correct

// change image when word is revealed
