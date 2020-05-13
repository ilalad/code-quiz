var $time = document.querySelector("#time");
var initials = "user initials";
var score = "user scores";
var userAnswer = "user input";
var timeUp = "game over";

/* WHEN I click the start button */
var startClick = document.querySelector("#startBtn");

startClick.addEventListener("click", function () {
  setTime();
  startClick.style.display = "none";
});

function setTime() {
  var timeLeft = 5;
  var timerInterval = setInterval(function () {
    timeLeft--;
    $time.textContent = "Time:" + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  $time.textContent = "Game Over";
}
var arryOfQuestions = [
  {
    question: "Which animal never sleeps?",
    correctAnswer: "Bull Frogs",
    incorrectChoices: ["Toads", "Snakes", "Owl"],
  },
  {
    question: "Which big cat is the strongest?",
    correctAnswer: "Jaguar",
    incorrectChoices: ["Lion", "Tiger", "Leopard"],
  },
  {
    question: "What is the fastest bird?",
    correctAnswer: "Peregrine Falcon",
    incorrectChoices: [
      "Vulture",
      "The Golden Eagle",
      "The White-Throatex Needletial",
    ],
  },
  {
    question: "What animal is extinct?",
    correctAnswer: "Carolina Parakeet",
    incorrectChoices: ["White Tiger", "Red Pandas", "White Lion"],
  },
  {
    question: "Which creature has the largest brain in proportion to its body?",
    correctAnswer: "Elephant",
    incorrectChoices: ["Dolphins", "Squirrels", "Sperm Whale"],
  },
];

// $startBtn.addEventListener("click", function(event) {
//         event.currentTarget.setAttribute("arryOfQuestions")

// });
console.log("click on start button");
for (var i = 0; i < arryOfQuestions.length; i++) {}
var h2El = document.createElement("h2");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//random chocies
// h2El.textContent = [question];
// li1.textContent = "";
// li2.textContent = "";
// li3.textContent = "";
// li4.textContent = "";

/*THEN a timer starts and I am presented with a question - PROPERTIES*/
//refere to array crash course
/* WHEN I answer a question - VALUES FOR QUESTION'S PROPERTIES*/

// if answer is correct//
//if (userAnswer === .correctAnswer) {
//add to the number of correct answers
//    score++;
// }
// else {
//     alert ("wrong");
// }

/*THEN I am presented with another question */

/*WHEN I answer a question incorrectly THEN time is subtracted from the clock use timer code from color explosion activity*/

/*WHEN all questions are answered or the timer reaches 0 THEN the game is over*/

// WHEN the game is over display high score THEN I can save my initials and score,//
