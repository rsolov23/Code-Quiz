// variables for questions
let questions = [
  {
    question:
      "A plain language description of the steps that an algorithm or application must complete is called",
    answerA: "A) an operation",
    answerB: "B) pseudocoding",
    answerC: "C) an array",
    answerD: "D) a condition",
    crcAnswer: "B) pseudocoding",
  },
  {
    question: "What element is used to incorporate JavaScript into HTML?",
    answerA: "A) <java>",
    answerB: "B) <body>",
    answerC: "C) <script>",
    answerD: "D) <header>",
    crcAnswer: "C) <script>",
  },
  {
    question: "Which of the following is NOT an operator?",
    answerA: "A) @",
    answerB: "B) !==",
    answerC: "C) ===",
    answerD: "D) <=",
    crcAnswer: "A) @",
  },
  {
    question:
      "How do you convert an array into a string for saving in localStorage?",
    answerA: "A) string<>",
    answerB: "B) map()",
    answerC: "C) Number()",
    answerD: "D) stringify()",
    crcAnswer: "D) stringify()",
  },
  {
    question:
      "What is a means of organizing and structuring data thats transferred from one place to another?",
    answerA: "A) callback function",
    answerB: "B) JSON",
    answerC: "C) localStorage",
    answerD: "D) .querySelector",
    crcAnswer: "B) JSON",
  },
  {
    question: "Which of the following is NOT a falsy value",
    answerA: "A) console.log",
    answerB: "B) 0",
    answerC: "C) Null",
    answerD: "D) NaN",
    crcAnswer: "A) console.log",
  },
];

var btnContainer = document.querySelector(".start-button");
var startBtn = document.querySelector("#startQuiz");
var quizContainer = document.querySelector(".quizContainer");
var element = document.getElementById("start-content");
var startContent = document.getElementById("start-content");
var quizScore = document.getElementById("quizScore");
var endScore = document.getElementById("endScore");
var questionsContent = document.getElementById("questionsContent");
var submitQuizScore = document.getElementById("submit-quiz-score");
var enterInitials = document.getElementById("enter-initials");
var initials = document.getElementById("initials");
var scoreInitials = document.getElementById("HS-initials");
var highScore = document.getElementById("high-score-list");
var timeRemaining = document.getElementById("timeRemaining");
var questionAnswer = document.getElementById("questionAnswer");
var time = document.querySelector(".time");
let timer = document.getElementById("timeRemaining").value;

//remaining variables

let currentQuestion;
let countdown;

//new question/starts quiz
function beginQuiz() {
  startContent.style.display = "none";
  currentQuestion = 0;
  countdown = 180;
  btnContainer.setAttribute("style", "display: none;");
  quizContainer.setAttribute("style", "display: block;");
  populateQuestions();
  timerStart();
}

function populateQuestions() {
  document.querySelector("#question").textContent =
    questions[currentQuestion].question;
  document.querySelector("#A").textContent = questions[currentQuestion].answerA;
  document.querySelector("#B").textContent = questions[currentQuestion].answerB;
  document.querySelector("#C").textContent = questions[currentQuestion].answerC;
  document.querySelector("#D").textContent = questions[currentQuestion].answerD;
}

//timer function

function timerStart() {
  let quizInterval = setInterval(function () {
    countdown--;
    document.querySelector("#time").textContent = countdown;

    if (countdown <= 0 || currentQuestion >= questions.length) {
      clearInterval(quizInterval);
      // enterScore();
    }
  }, 1000);
}

let crcAnswer;
//right answer/wrong answer with time deduction
function checkAnswerAndIterate(event) {
  // console.log(this)
  let choice = event.target.textContent;
  console.log(choice);

  if (choice == questions[currentQuestion].crcAnswer) {
    alert("Right✅");
  } else {
    alert("Wrong❌");
    // countdown = countdown - 15
    countdown -= 15;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    populateQuestions();
  }
}

function enterScore() {
  questionAnswer.style.display = "none";
  quizScore.style.display = "block";
  clearInterval(quizInterval);
  timer.textContent = "Game Over";
  document.getElementById("finalScore").innerHTML =
    "your score is" + "scoreListItem";
}

function createScoreList() {
  let scoreList = Object.values(localStorage);
  for (let i = 0; i < scoreList.length; i++) {
    var scoreListItem = document.createElement("li");
    scoreListItem.innerText = scoreList[i];
    document.getElementById("high-scores-list").appendChild(scoreListItem);
  }
}

function toggleScoreList() {
  for (let i = 0; i < document.getElementsByTagName("*"); i++) {
    document
      .getElementsByTagName("*")
      [i].setAttribute("style", "display: none;");
    console.log();
  }

  document
    .getElementById("high-scores-list")
    .setAttribute("style", "display: block;");
  createScoreList();
}

function submitInitials() {
  if (checkAnswerAndIterate >= "6") {
    onclick.addEventListener("submit").btn;
  }
}
function saveToLocal(event) {
  event.preventDefault();
  debugger;
  var timer = event.target.children[1].value;
  // let timer = document.getElementById("timeRemaining").value;
  let finalScore = { score: time };
  JSON.parse(localStorage.getItem("timeRemaining"));
  localStorage.getItem("timeRemaining");
  localStorage.setItem("timeRemaining", time);
  debugger;
}
//event listeners
startBtn.addEventListener("click", beginQuiz);
document.querySelector("#A").addEventListener("click", checkAnswerAndIterate);
document.querySelector("#B").addEventListener("click", checkAnswerAndIterate);
document.querySelector("#C").addEventListener("click", checkAnswerAndIterate);
document.querySelector("#D").addEventListener("click", checkAnswerAndIterate);
subScore.addEventListener("submit", saveToLocal);
document
  .getElementById("high-score-toggle")
  .addEventListener("click", toggleScoreList);
