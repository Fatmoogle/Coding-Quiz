var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");
var currentQuestion = 0;
var score = 0;
var scoreDiv = document.getElementById("score");
var timesUp = document.getElementById("timesUp");
var highscoreList = document.getElementById("highscores");
var questionList = [
    {
    question: "What does JS stand for?",
    answerA: "Nothing. It means NOTHING.",
    answerB: "JavaScript",
    answerC: "JumboSmootie",
    answerD: "Just Saying",
    correct: "B" 
    },
    {
    question: "What is the abbreviation for Variable?",
    answerA: "V.",
    answerB: "Vari",
    answerC: "Var",
    answerD: "Vicky",
    correct: "C" 
    },
    {
    question: "How are you?",
    answerA: "Stressed",
    answerB: "Hungry",
    answerC: "Happy",
    answerD: "All of the above",
    correct: "D" 
    },
    {
    question: "Did you enjoy my quiz?",
    answerA: "No",
    answerB: "Yes",
    answerC: "OMG YES",
    answerD: "It was okay.",
    correct: "C" 
    },
];
var lastQuestion = questionList.length - 1;

// Timer
var countDown = document.getElementById("countdown");

// Time to finish the quiz
var i = 46;

// Timer function
function count() {
    i--;
    countDown.textContent = i;
    setTimeout(count, 1000);
    if(i < 0) {
        scoreRenderTimesUp()
        countDown.classList.add("hide");
    }
}

startBtn.addEventListener("click", startGame);

// Function to begin the quiz and timer
function startGame() {
    startBtn.classList.add("hide");
    questionContainer.classList.remove("hide");
    getQuestion();
    count();
}

function getQuestion() {
    var q = questionList[currentQuestion];
    questionElement.textContent = q.question;
    questionElement.setAttribute("style", "padding:15px");
    questionElement.setAttribute("style", "font-size:20px")
    answerChoiceA.textContent = q.answerA;
    answerChoiceB.textContent = q.answerB;
    answerChoiceC.textContent = q.answerC;
    answerChoiceD.textContent = q.answerD;
}

// This funciton enables user to cycle through the questions and will determine if the answer was right or wrong
function checkAnswer(answer){
    if( answer == questionList[currentQuestion].correct){
        score++
        answerIsCorrect();
        console.log(score);
    } else{
       answerIsWrong();
       console.log(score);
    }
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        getQuestion();
    } else{
        scoreRender()
        countDown.classList.add("hide");
    }
}

// Functions for if answer is right or wrong, display alert
function answerIsCorrect(){
    alert("Correct!");
}

function answerIsWrong(){
    alert("Incorrect!");
    countDown.textContent = i - 5;
}

function scoreRender(){
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "Total Score: " + score + " out of 4";
    questionContainer.classList.add("hide");
}

function scoreRenderTimesUp(){
    timesUp.style.textAlign = "center";
    timesUp.style.fontSize = "40px";
    timesUp.style.paddingBottom = "30px";
    timesUp.innerHTML = "Time's up!";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "Total Score: " + score + " out of 4";
    questionContainer.classList.add("hide");
}

function viewHighscores(){
    alert("hi");
}

