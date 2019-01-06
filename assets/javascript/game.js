//da variables
var gameLetters = ["abcdefghijklmnopqrstuvwxyz".split("")];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var computerGuess = gameLetters[Math.floor(Math.random() * gameLetters.length)];
var userGuess = [];


//Add new functions

function decrementGuess() {
    if(remainingGuesses > 0) {
        remainingGuesses--;
    }
    document.getElementById("guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

function resetGame() {
    if(remainingGuesses = 0) {
        
    }
    document.getElementById("guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

//Typing does things
document.onkeyup = function(event) {
    var guesses = event.key;
    document.getElementById("yourGuess").innerHTML = "Your Guess: " + guesses;

    //User guesses are same as the computer's guess, increase wins by 1
            if (userGuess === computerGuess) {
            wins++;
            document.getElementById("win").innerHTML = "Wins: " + wins;
    //If it's not the same, increase losses, decrease guesses
            } else {
                losses++;
                document.getElementById("lose").innerHTML = "Losses: " + losses;
                decrementGuess();
            }
        
 
}


