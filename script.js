var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");
var currentQuestion = 0;
var score = 0;

// Timer
var countDown = document.getElementById("countdown");

var i = 60;

function count() {
    i--;
    countDown.textContent = i;
}

setInterval(count, 1000);


startBtn.addEventListener("click", startGame);
answerChoiceA.addEventListener("click", checkAnswer);
answerChoiceB.addEventListener("click", checkAnswer);
answerChoiceC.addEventListener("click", checkAnswer);
answerChoiceD.addEventListener("click", checkAnswer);

function startGame() {
    startBtn.classList.add("hide");
    questionContainer.classList.remove("hide");
    getQuestion1();
}

function getQuestion1() {
    var q = questionList[currentQuestion];
    questionElement.textContent = q.question;
    questionElement.setAttribute("style", "padding:15px");
    questionElement.setAttribute("style", "font-size:20px")
    answerChoiceA.textContent = q.answerA;
    answerChoiceB.textContent = q.answerB;
    answerChoiceC.textContent = q.answerC;
    answerChoiceD.textContent = q.answerD;
}

function getQuestion2() {
    var q = questionList[currentQuestion + 1];
    questionElement.textContent = q.question;
    questionElement.setAttribute("style", "padding:15px");
    questionElement.setAttribute("style", "font-size:20px")
    answerChoiceA.textContent = q.answerA;
    answerChoiceB.textContent = q.answerB;
    answerChoiceC.textContent = q.answerC;
    answerChoiceD.textContent = q.answerD;
}



function checkAnswer(answer){
    if( answer == questionList[currentQuestion].correct){
        score++
        answerIsCorrect();
    } else{
        answerIsWrong();
    }
    
}

function answerIsCorrect(){
    alert("Correct!");
}

function answerIsWrong(){
    alert("Incorrect!");
}


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

questionList[0].question
questionList[0].answerA
questionList[0].answerB
questionList[0].answerC
questionList[0].answerD
questionList[0].correct