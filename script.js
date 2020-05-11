var $startBtn = document.querySelector("#startBtn");
var initials = "user initials";
var score = "user scores";
var userAnswer = "user input";

// var main = document.querySelector("main");
// main.children[0].textContent = "Coding Quiz Challenge";


/* WHEN I click the start button */

$startBtn.addEventListener("click",
    function() {
   console.log("click on start button")     
})

/*THEN a timer starts and I am presented with a question - PROPERTIES*/

function setTime() {
    var initalTimer = setInterval(
        function() {
        }
    )
}
//refere to array crash course

var arrayOfQuestions = ["Which animal never sleeps?", "Which big cat is the strongest?", "What is the fastest bird?", "What animal is extinct?", "Which creature has the largest brain in proportion to its body?"
]
for (var i= 0; i < arrayOfQuestions.length; i++) {}

/* WHEN I answer a question - VALUES FOR QUESTION'S PROPERTIES*/

var arrayOfCorrectAnswers = ["Bull Frogs", "Jaguar", "Peregrine Falcon", "Carolina Parakeet", "Elephants"
]
// if answer is correct//
if (userAnswer === .correctAnswer) {
   //add to the number of correct answers
   score++;
}  
else {
    alert ("wrong");
}
 
var wrongAnswers1 = [
    "Toads", "Snakes", "Owl" 
]
var wrongAnswers2 = [
    "Lion", "Tiger", "Leopard", 
]
var wrongAnswers3 = [
    "Vulture", "The Golden Eagle", "The White-Throatex Needletial", 
]
var wrongAnswers4 = [
    "White Tiger", "TRed Pandas", "White Lion", 
]
var wrongAnswers5 = [
    "Dolphins", "Squirrels", "Sperm Whale", 
]

/*THEN I am presented with another question */



/*WHEN I answer a question incorrectly THEN time is subtracted from the clock use timer code from color explosion activity*/

var timerInterval = setInterval(
    function() {
        secondsLeft--;
        timerInterval.textContent = secondsLeft + "seconds left till "

    }
)
setTime();

/*WHEN all questions are answered or the timer reaches 0 THEN the game is over*/




/*WHEN the game is over display high score*/



/*THEN I can save my initials and score */