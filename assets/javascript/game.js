//da variables
var gameLetters = ["a", "e", "i", "o", "u", "y"];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
//var computerGuess = gameLetters[Math.floor(Math.random() * gameLetters.length)];
var userGuess = [];


//Guesses per game
function decrementGuess() {
    remainingGuesses --;
    document.querySelector("#guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

function resetGame() {
    remainingGuesses = 0;

}

//Typing does things
document.onkeyup = function(event) {
    var guesses = event.key;
    document.querySelector("#yourGuess").innerHTML = "Your Guess: " + guesses;

            if (guesses === gameLetters) {
            wins++;
            document.getElementById("#win").innerHTML = "Wins: " + wins;
            } else {
                losses++;
                document.getElementById("#lose").innerHTML = "Losses: " + losses;
            }
        
    
}


