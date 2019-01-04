//da variables
var gameLetters = ["a", "e", "i", "o", "u", "y"]
var wins = 0;
var losses = 0;
var remainingGuesses = 9;

//Need to print text names to HTML always instead of just when user does something

//Counting the wins
function countWins() {
    wins++;
    document.querySelector("#win").innerHTML = "Wins: " + wins;
}

//Counting losses
function countLosses() {
    losses++;
    document.querySelector("#lose").innerHTML = "Losses: " + losses;
}

//Guesses per game
function decrementGuess() {
    remainingGuesses --;
    document.querySelector("#guessRemain").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

//Typing does things
document.onkeyup = function(event) {
    //Need a way to express if user types correct letters that it only then counts it as wins
    if (gameLetters === gameLetters) {
        countWins();
        //while letting 
    } else countLosses();
}


