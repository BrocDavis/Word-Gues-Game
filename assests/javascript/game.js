var wordBank = ["boat", "water", "ski", "wakebord", "float", "swim", "tube", "anchor", "waves", ""];
var maxGuess = 7;
var gameStop = false;

var guessedLetters = [];
var guessingWord = [];
var wordToMatch;
var numGuess;
var winCount = 0;

//reset display to start game
reset();
//make sure to only grab key press of letters on keyboard
document.onkeypress = function (event) {

    if (isAlpha(event.key) && !gameStop) {
        checkForLetter(event.key.toUpperCase());
    }
}
//for letter pressed check to the guessingWord values and update when correct and wrong to Wrong letters

function checkForLetter(letter) {
    var foundLetter = false;

    for (var i = 0; i < wordToMatch.length;  i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter;
            foundLetter = true;


            if (guessingWord.join("") === wordToMatch) {
                winCount++;
                gameStop = true;
                updateDisplay();
                setTimeout(reset, 3000);
            }
        }
    }

    if (!foundLetter) {

        if (!guessedLetters.includes(letter)) {

            guessedLetters.push(letter);
            numGuess--;
        }
        if (numGuess === 0) {
            guessingWord = wordToMatch.split();
            gameStop = true;
            setTimeout(reset, 3000); //slight pause for player to confirm they have the correct word
        }
    }
    updateDisplay();//making sure to update letters for each state
}

function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
}

function reset() {
    numGuess = maxGuess;
    gameStop = false;

    wordToMatch = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
    console.log(wordToMatch);

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < wordToMatch.length; i++) {

        if (wordToMatch[i] === " ") {
            guessingWord.push(" ");
        } else {
            guessingWord.push("_");
        }
    }
    updateDisplay();
}
//updating screen after each wrong or right answer
function updateDisplay() {
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("correct-word").innerHTML = guessingWord.join("");
    document.getElementById("guess-count").innerHTML = numGuess;
    document.getElementById("letters-guessed").innerHTML = guessedLetters.join(" ");
}



