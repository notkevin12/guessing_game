const inputField = document.getElementById('userGuess');
const subButt = document.getElementById('submitGuess');
const resetButt = document.getElementById('reset');
var guessCT = document.getElementById('guesses');
var feedback = document.getElementById('feedback');
var answer = Math.floor((Math.random() * 101));
var guesses = 10;
inputField.value = null;
console.log("Initial rand value " + answer);

function updateGuesses() {
    guessCT.innerHTML = "Guesses left: " + guesses;
}

function reset() {
    inputField.value = null;
    answer = Math.floor((Math.random() * 101));
    guesses = 10;
    updateGuesses();
    console.log("New rand num = " + answer);
}

function resetGame() {
    reset();
    feedback.innerHTML = null;
}

function checkInput(string) {
// Returns true if all characters in string are digits
// Returns false otherwise
    if (string.length === 0) {
        feedback.innerHTML = "You didn't input anything loser";
        return false;
    }
    else {
        for (var i = 0; i < string.length; i++) {
            if (!Number.isInteger(parseInt(string[i]))) {
                feedback.innerHTML = "ERROR: non-numeric chracter detected";
                return false;
            }
        }
        if (parseInt(string) < 0 || parseInt(string) > 100) {
            feedback.innerHTML = "ERROR: guess is out of range";
            return false;
        }
        return true;
    }
}

function verifyGuess() {
    console.log("Button works");
    console.log("Number of guesses " + guesses);
    var guessText = inputField.value;
    if (guesses > 1) {
        if (checkInput(guessText)) {
            if (parseInt(guessText) < answer) {
                feedback.innerHTML = "Too small. Try again.";
                guesses--;
                updateGuesses();
            }
            else if (parseInt(guessText) > answer) {
                feedback.innerHTML = "Too large. Try again.";
                guesses--;
                updateGuesses();
            }
            else {
                feedback.innerHTML = "YOU WIN!!!";
                reset();
                guessCT.innerHTML = null;
            }
        }
    }
    else {
        feedback.innerHTML = "Out of attempts. YOU LOSE.";
        reset();
        guessCT.innerHTML = "Guesses left: 0";
    }
}

subButt.addEventListener('click', verifyGuess);
resetButt.addEventListener('click', resetGame);