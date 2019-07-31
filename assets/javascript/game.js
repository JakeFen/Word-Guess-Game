// gets id wins takes the totalWins count and puts it in place of wins id
var wins = document.getElementById("wins");
var totalWins = 0;
wins.textContent = totalWins;

// gets id guesses-left takes the numberOfGuesses count and puts it in place of guesses-left id
var guessesLeft = document.getElementById("guesses-left");
var numberOfGuesses = 12;
guessesLeft.textContent = numberOfGuesses;

var alreadyGuessed = document.getElementById("already-guessed");

// arrays for content
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
var rightLetter = [];
var wrongLetter = [];
var underScore = [];

function Hangman() {
  var randomHero =
    overwatchHeros[Math.floor(Math.random() * overwatchHeros.length)];

  // adds underscore to UnderScore for ever letter thats in randomHero
  for (var i = 0; i < randomHero.length; i++) {
    underScore.push("_");
  }

  // pulls the id hero-name from html and puts underScore in place of heroName
  var heroName = document.getElementById("hero-name");
  heroName.textContent = underScore;

  // Finding what key was pressed and printing it to screen
  document.onkeyup = function(event) {
    var usersGuess = event.key.toUpperCase();
    if (randomHero.indexOf(usersGuess) > -1) {
      // add to write letter array
      rightLetter.push(usersGuess);
      underScore[randomHero.indexOf(usersGuess)] = usersGuess;
      heroName.textContent = underScore;
      if (underScore.join("") === randomHero) {
        youWon();
      }
    } else {
      wrongLetter.push(usersGuess);
      numberOfGuesses--;
      guessesLeft.textContent = numberOfGuesses;
      alreadyGuessed.textContent = wrongLetter;
      if (numberOfGuesses === 0) {
        alert("You have lost!");
      }
    }
  };

  function youWon() {
    alert("You Won!");
    totalWins++;
    wins.textContent = totalWins;
  }

  // document.onkeyup = function(event) {
  //   var usersGuess = event.key;
  //   if (randomHero.indexOf(usersGuess) > -1) {
  //     rightLetter.push(usersGuess);
  //     console.log(randomHero);
  //   }
  // }

  //when enter is press restart game
  //make function that when enter is pressed run function of hangman
}

Hangman();

// lower number of guesses when pressing wrong key

// add win when they guess the word correct

// change image when word is revealed
