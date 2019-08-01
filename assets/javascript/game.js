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
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function Hangman() {
  var randomHero =
    overwatchHeros[Math.floor(Math.random() * overwatchHeros.length)];
  // adds underscore to UnderScore for ever letter thats in randomHero
  for (var i = 0; i < randomHero.length; i++) {
    underScore.push("_");
  }

  // pulls the id hero-name from html and puts underScore in place of heroName
  var heroName = document.getElementById("hero-name");
  heroName.textContent = underScore.join(" ");

  // Finding what key was pressed and printing it to screen
  document.onkeyup = function(event) {
    var usersGuess = event.key.toUpperCase();
    if (letters.includes(usersGuess)) {
      if (randomHero.includes(usersGuess)) {
        // add to rightletter array
        rightLetter.push(usersGuess);
        underScore[randomHero.indexOf(usersGuess)] = usersGuess;
        heroName.textContent = underScore.join(" ");

        if (underScore.join("") === randomHero) {
          youWon();
        }
      } else if(wrongLetter.includes(usersGuess)) {
        alert("You have already guessed this Letter!");
      }
      else {
        wrongLetter.push(usersGuess);
        numberOfGuesses--;
        guessesLeft.textContent = numberOfGuesses;
        alreadyGuessed.textContent = wrongLetter;
        if (numberOfGuesses === 0) {
          alert("You have lost!");
          reset();
        }
      }
    }
  };

  function youWon() {
    alert("You Won! Press the 'Enter' key to start a new game!");
    totalWins++;
    wins.textContent = totalWins;
  }
}

Hangman();

// change image when word is revealed

// need to figure out how to find all of the same letters in the array
// and pop up on the screen

