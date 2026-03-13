// quiz.js

// Arrays for questions and answers
var questions = [
    "What is the capital of France?",
    "What is the largest planet?",
    "Which language runs in the browser?"
];

var answers = [
    "Paris",
    "Jupiter",
    "JavaScript"
];

// Quiz function
function quiz() {
    var points = 0; // cumulative points

    // Loop through each question
    for (var i = 0; i < questions.length; i++) {
        var guesses = 3; // user has up to 3 tries
        var correct = false;

        // While loop for user guesses
        while (guesses > 0 && !correct) {
            var userAnswer = prompt(questions[i]);

            // If user cancels the prompt
            if (userAnswer === null) {
                guesses = 0; // exit while loop
                break;
            }

            // Check the answer (case-insensitive)
            if (userAnswer.trim().toLowerCase() === answers[i].toLowerCase()) {
                alert("Correct!");
                points += guesses; // points based on number of tries left
                correct = true; // move to next question
            } else {
                guesses--;
                if (guesses > 0) {
                    alert("Incorrect. Try again. You have " + guesses + " guesses left.");
                } else {
                    alert("Out of guesses. The correct answer was: " + answers[i]);
                }
            }
        }
    }

    return points; // return total score
}

// Call the quiz function and display score on the page
var totalScore = quiz();
document.getElementById("score").textContent = "Your total score is: " + totalScore;