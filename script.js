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
var quiz = new Quiz(arrayOfQuestions);
var choices = quiz.getQuestionIndex().choices;
var i = 0;
for (var i = 0; i < choices.length; i++) {
  var element = document.getElementById("choice" + i);
  element.innerHTML = choices[i];
  guess("btn" + i, choices[i]);
}
showProgress();

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

function sendMessage() {
  $time.textContent = "Game Over";
}

var arrayOfQuestions = [
    new Question("Which animal never sleeps?",["Toads", "Snakes", "Owl"],"Bull Frogs"),

    new Question("Which big cat is the strongest?",["Lion", "Tiger", "Leopard"],"Jaguar"),
  
    new Question("What is the fastest bird?",["Vulture","The Golden Eagle","The White-Throatex Needletial"],"Peregrine Falcon"),

    new Question("What animal is extinct?",["White Tiger", "Red Pandas", "White Lion"],"Carolina Parakeet"),
   
    new Question("Which creature has the largest brain in proportion to its body?",["Dolphins", "Squirrels", "Sperm Whale", "Elephant"],"Elephant"),

Quiz.prototype.getQuestionIndex = function () {
  return this.arrayOfQuestions[this.questionIndex];
}

Quiz.prototype.isEnded = function () {
  return this.arrayOfQuestions.length === this.questionIndex;
}
Quiz.prototype.guess = function () {
  if (this.arrayOfQuestions().correctAnswer(answer)) {
    this.score++;
  } else {
    var element = document.getElementById("result");
    element.innerHTML = "Wrong!";
  }
  if (this.arrayOfQuestions().correctAnswer(answer)) {
    var element = document.getElementById("result");
    element.innerHTML = "Correct!";
  } else {
    var element = document.getElementById("result");
    element.innerHTML = "Wrong!";
  }
  this.questionIndex++;
};
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.answer = function (choice) {
  return choice === this.answer;
}
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = "question " + currentQuestionNumber + " of " + quiz.questions.length;
}
function addInitial() {
    var element = $("#initial").val();
    console.log(element)
    return element;
}
function showScores(initials) {
    var initials = addInitial();
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> All Done! Your final score is: " + initials + " " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};
populate();

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
