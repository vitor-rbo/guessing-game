var randomNumber = Math.floor(Math.random()*100) + 1;

var attempts = 0;

var guessInput = document.getElementById("guessInput");
var submitGuess = document.getElementById("submitGuess");
var restartGame = document.getElementById("restartGame");
var feedback = document.getElementById("feedback");
var attemptsDisplay = document.getElementById("attempts");

submitGuess.addEventListener("click", function() {
    var userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100!";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "blue";
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
        feedback.style.color = "green";
        submitGuess.style.display = "none";
        restartGame.style.display = "inline-block";
    }

    guessInput.value = "";
});

restartGame.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random()*100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    feedback.textContent = "";
    guessInput.value = "";
    submitGuess.style.display = "inline-block";
    restartGame.style.display = "none";
});