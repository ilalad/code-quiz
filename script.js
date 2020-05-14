var $time = document.querySelector("#time");
var score = 0;
var currentQuestion = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var startButton = document.getElementById("startBtn");
var questionElement = document.getElementById("question");
var cho1 = document.getElementById("cho1");
var cho2 = document.getElementById("cho2");
var cho3 = document.getElementById("cho3");
var cho4 = document.getElementById("cho4");

var nextButton = document.getElementById("nextButton");
var resultCount = document.getElementById("result");

/* WHEN I click the start button */

startButton.addEventListener("click", function () {
  setTime();
  startButton.style.display = "none";

  function setTime() {
    var timeLeft = 60;
    var timerInterval = setInterval(function () {
      timeLeft--;
      $time.textContent = "Time:" + timeLeft;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }
});

function sendMessage() {
  $time.textContent = "Game Over";
}
function loadQuestions(questionIndex) {
  var q = questions[questionIndex];
  questionElement.textContent = questionIndex + 1 + "." + q.question;
  cho1.textContent = q.choice1;
  cho2.textContent = q.choice2;
  cho3.textContent = q.choice3;
  cho4.textContent = q.choice4;
}

function loadNextQuestion() {
  var selectedChoice = document.querySelector("input[type=radio]:checked");
  if (!selectedChoice) {
    alert("Please select your answer!");
    return;
  }
  var answer = selectedChoice.nodeValue;
  if (question[currentQuestion].answer == answer) {
    score += 10;
  }
  selectedChoice.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 10) {
    nextButton.textContent = "Game Over";
  }
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    resultCount.textContent = "Your Score: " + score;
    return;
  }
  loadQuestions(currentQuestion);
}

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  loadNextQuestion();
}
var questions = [
  {
    question: "Which animal never sleeps?",
    choice1: "Toads",
    choice2: "Snakes",
    choice3: "Owl",
    choice4: "Bull Frogs",
    answer: "4",
  },
  {
    question: "Which big cat is the strongest?",
    choice1: "Jaguar",
    choice2: "Lion",
    choice3: "Tiger",
    choice4: "Leopard",
    answer: "1",
  },
  {
    question: "What is the fastest bird?",
    choice1: "Peregrine Falcon",
    choice2: "The Golden Eagle",
    choice3: "The White-Throatex Needletial",
    choice4: "Vulture",
    answer: "1",
  },
  {
    question: "What animal is extinct?",
    choice1: "White Tiger",
    choice2: "White Lion",
    choice3: "Carolina Parakeet",
    choice4: "Red Pandas",
    answer: "3",
  },
  {
    question: "Which creature has the largest brain in proportion to its body?",
    choice1: "Dolphins",
    choice2: "Elephant",
    choice3: "Lion",
    choice4: "Sperm Whale",
    answer: "4",
  },
];
