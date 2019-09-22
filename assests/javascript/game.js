var wordBank = ["boat", "water", "ski", "wakebord", "float", "swim", "tube","anchor","waves",""];
var wrongLetters = [];
var correctWord;

var winCount = 0;
var lostCount = 0;
var maxGuess = 7;
var userGuess;

//call at beginning and end of code win or lose to rest game and change word
function reset() {
    correctWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(correctWord);
    winCount = document.getElementById("wins").innerHTML;
    console.log(winCount);
    maxGuess = document.getElementById("guess-count");
    console.log(maxGuess);
    correctWord = document.getElementById("correct-word");
    userGuess = document.getElementById("letters-guessed");
    console.log(userGuess);
}

reset();
// document.onkeyup = function () {

//     userGuess = event.key;
//     if (userGuess = "a")

//         if (!wrongLetters.length === maxGuess) {


//         }
// }

