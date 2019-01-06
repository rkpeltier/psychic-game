//da variables
var gameLetters = ["a", "e", "i", "o", "u", "y"];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var computerGuess = gameLetters[Math.floor(Math.random() * gameLetters.length)];
var userGuess = [];
var displayRemainingGuesses = document.getElementById("guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;


//Decrement guesses

function decrementGuess() {
    if(remainingGuesses > 0) {
        remainingGuesses--;
    }
    document.getElementById("guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

//Reset the game when guesses are at 0
function resetGuess() {
    if (remainingGuesses === 0) {
        remainingGuesses = 9;
    }
}

//Display remainingGuesses
function updateDisplay() {
     displayRemainingGuesses.textContent = remainingGuesses;
}


//Typing does things
document.onkeyup = function(event) {
    var guess = event.key;
    userGuess.push(guess);
    document.getElementById("yourGuess").innerHTML = "Your Guess: " + guess;
    //Reset the game if won
        function resetGame() {
            if (guess === computerGuess) {
            remainingGuesses = 9;
    }
}

    //User guesses are same as the computer's guess, increase wins by 1
            if (guess === computerGuess) {
            wins++;
            resetGame();
            userGuess = [];
            computerGuess = gameLetters[Math.floor(Math.random() * gameLetters.length)];
            document.getElementById("win").innerHTML = "Wins: " + wins;
    //If it's not the same, increase losses, decrease guesses
            } else {
                decrementGuess();
                if (remainingGuesses === 0) {
                    losses++;
                    document.getElementById("lose").innerHTML = "Losses: " + losses;
                    resetGuess();
            } 
        }
}

updateDisplay();