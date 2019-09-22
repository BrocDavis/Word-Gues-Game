var wordBank = ["boat", "water", "ski", "wakebord", "float", "swim", "tube", "anchor", "waves", ""];
var wrongLetters = [];
var userGuess = [];
var letterGuess;

var winCount = 0;
var lostCount = 0;
var maxGuess = 7;
var gameRun = true;

//call at beginning and end of code win or lose to rest game and change word
function reset() {
    correctWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    winCount = document.getElementById("wins").innerHTML;
    maxGuess = document.getElementById("guess-count");
    correctWord = document.getElementById("correct-word");
    userGuess = document.getElementById("letters-guessed");
}
//calling function to reset game upon load
reset();

//function checking for button press if its a letter only
var isCharacter = function (ch) {
    return /^[A-Z]$/i.test(ch);
}

//once button is pressed pass in game logic
document.onkeypress = function (event) {

    //making any guess from input change to uppercase
    if (isCharacter(event.key) && gameRun) {
        letterPressed(event.key.toUpperCase());
        console.log(event.key)
    }
}

function letterPressed(letter){
    var letterPressed = false;

    for(var i = 0; i < userGuess.length; i++){
        if(letter === userGuess[i]){
            userGuess[i] = letter;
            letterPressed = true;
        }

        if(userGuess.join("")=== letterGuess){
            wins++;
            gameRun = false;
        }
    }
}




