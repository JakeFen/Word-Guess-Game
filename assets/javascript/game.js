// gets id wins takes the totalWins count and puts it in place of wins id

// gets id guesses-left takes the numberOfGuesses count and puts it in place of guesses-left id

var totalWins = 0;

// arrays for content
function Hangman() {
  var wins = document.getElementById("wins");
wins.textContent = totalWins;

  var guessesLeft = document.getElementById("guesses-left");
guessesLeft.textContent = numberOfGuesses;

var alreadyGuessed = document.getElementById("already-guessed");
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
var numberOfGuesses = 12;

  var randomHero =
    overwatchHeros[Math.floor(Math.random() * overwatchHeros.length)];
    var randomHeroSplit = randomHero.split('');
    console.log(randomHeroSplit);
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
    let holder = [];
    if (letters.includes(usersGuess)) {
      if (randomHeroSplit.includes(usersGuess)) {
        for (let i = 0; i < randomHeroSplit.length; i++) {
          if (randomHeroSplit[i] === usersGuess) {
            holder.push(i);
          }
        }
        for (let i = 0; i < holder.length; i++) {
          underScore[holder[i]] = usersGuess
          heroName.textContent = underScore.join(" ");
        };
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
          Hangman();
          wrongLetter.length = 0;
        }
      }
    }
  };

  function youWon() {
    var enter = ["ENTER"];
    alert("You Won! Press the 'Enter' key to start a new game!");
    totalWins++;
    document.onkeyup = function(event) {
    wins.textContent = totalWins;
    var usersGuess = event.key.toUpperCase();
    if (enter.includes(usersGuess)) {
      Hangman();
    }
  }
}
}

Hangman();

// change image when word is revealed

// need to figure out how to find all of the same letters in the array
// and pop up on the screen
