var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");

startBtn.addEventListener("click", startGame)

function startGame() {
    startBtn.classList.add("hide");
    questionContainer.classList.remove("hide");
    nextQuestion()
}

function nextQuestion() {

}

var questions = ["Is the sky blue?", "Is the sky blue?", "Is the sky blue?"];