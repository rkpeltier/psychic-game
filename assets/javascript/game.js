//da variables
var gameLetters = ["a", "e", "i", "o", "u", "y"]
var wins = 0;
var losses = 0;
var remainingGuesses = 9;

function countWins() {
    wins = wins++;
    document.querySelector("#win").innerHTML = "Wins: " + wins;
}

function countLosses() {
    losses = losses++;
    document.querySelector("#lose").innerHTML = "Losses: " + losses;
}

function decrementGuess() {
    document.querySelector("#guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

document.onkeyup = function(event) {
    if (gameLetters === gameLetters) {
        countWins();
    } else countLosses();
}


