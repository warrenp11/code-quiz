// ***********************
// ## ACCEPTANCE CRITERIA
// ***********************
// * GIVEN I am taking a code quiz
// * WHEN I click the start button
// * THEN a timer starts and I am presented with a question
// * WHEN I answer a question
// * THEN I am presented with another question
// * WHEN I answer a question incorrectly
// * THEN time is subtracted from the clock
// * WHEN all questions are answered or the timer reaches 0
// * THEN the game is over
// * WHEN the game is over
// * THEN I can save my initials and score


// REFERENCES TO DOCUMENT ELEMENTS
// view high scores element
var viewHighScores = document.getElementById("view-high-scores");
// timer element
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time-left");
var timesUp = document.getElementById("times-up");
// main content element
var content= document.getElementById("content-container");
// start page
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-btn");
// quiz page
var quizDiv = document.getElementById("quiz");
var questionTitle = document.getElementById("questions");
var answers = document.getElementById("answers");
var choiceA = document.getElementById("btn-1");
var choiceB = document.getElementById("btn-2");
var choiceC = document.getElementById("btn-3");
var choiceD = document.getElementById("btn-4");
var wrongOrRight = document.getElementById("wrong-or-right");
// final score page
var score = document.getElementById("score");
var finalScore = document.getElementById("finalScore")
var initials = document.getElementById("initials-input");
var submitBtn = document.getElementById("submit-score");
// highscores page
var highScores = document.getElementById("highscores");
var highScoresList = document.getElementById("highscores-list");
var goBackBtn = document.getElementById("go-back-btn");
var clearHighScores = document.getElementById("clear-scores-btn");

// *****************
// GLOBAL VARIABLES
// *****************

var questions = [
    {
        question: "What does 2 + 2 equal?",
        choices: ["a. 1", "b. 2", "c. 3", "d. 4"],
        answer: "d. 4"
    },
    {
        question: "What is the first letter of the alphabet",
        choices: ["a. a", "b. b", "c. c", "d. d"],
        answer: "a. a"
    },
    {
        question: "Who is the current President of the US?",
        choices: ["a. Obama", "b. Biden", "c. Clinton", "d. Bush"],
        answer: "b. Biden"
    },
    {
        question: "What color is the sky (most often)?",
        choices: ["a. Grey", "b. Yellow", "c. Purple", "d. Blue"],
        answer: "d. Blue"
    },
    {
        question: "Which of the following animals makes a 'woof' sound?",
        choices: ["a. cat", "b. bird", "c. dog", "d. elephant"],
        answer: "c. dog"
    }
];

var totalTime = 100;
var correctAns = 0;
var questionIndex = 0;
var highScoresArr = [];


// **********
// FUNCTIONS
// **********

// * WHEN I click the start button
var startQuiz = function() {
    // start page disappears
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    timer.style.display = "block";

    // * THEN a timer starts
    var startTimer = setInterval(function() {
        timeLeft.textContent = totalTime;
        // deduct 1 every second
        totalTime--;
        // if timer runs out
        if (totalTime <= 0) {
            clearInterval(startTimer);
            gameOver();
        }
    },1000);

    // starts new quiz
    newQuiz();
};

// QUIZ function
var newQuiz = function() {
    // * THEN I am presented with a question
    nextQuestion();
};

var nextQuestion = function() {
    questionTitle.textContent = questions[questionIndex].question;

    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
};

// * WHEN I answer a question
var chooseA = function (){
    checkAnswer(0);
};
var chooseB = function (){
    checkAnswer(1);
};
var chooseC = function (){
    checkAnswer(2);
};
var chooseD = function (){
    checkAnswer(3);
};

// after question is answered, show if wrong or right
var checkAnswer = function(answer) {
    wrongOrRight.style.display = "block";
    
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 to score
        correctAns++;
        wrongOrRight.textContent = "Correct!";
    } else {
        // wrong answer, subtract 10s from timer
        totalTime -= 10;
        wrongOrRight.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    // * THEN I am presented with another question
    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // no more questions, game over
        gameOver();
    }
};

// // * WHEN all questions are answered or the timer reaches 0, game over
var gameOver = function() {
    score.style.display = "block";
    timesUp.style.display = "block";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";
    timer.style.display = "none";

    // show final score
    finalScore.textContent = correctAns;
};

// * THEN I can save my initials and score
var saveHighScore = function() {

    // if initials left blank, prompt user to enter initials
    if (initials.value === "") {
        alert("Please enter your initials");
        return;
    }

    highScoresList.style.display = "none";
    score.style.display = "block";
    timesUp.style.display = "none";
    timer.style.display = "none";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";

    // object that holds user initials and score to be saved
    var userScore = {
        initials: initials.textContent,
        score: finalScore.value
    };
    // push score to highscores list(array)
    highScoresArr.push(userScore);
    // save to local storage
    localStorage.setItem("high scores", JSON.stringify(highScoresArr));

    // show current highscores
    showHighScores();
};

var showHighScores = function() {

    highScoresList.style.display = "block";
    score.style.display = "none";
    timesUp.style.display = "none";
    timer.style.display = "none";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";

    // check if any highscores in local storage
    if (=== null) {
        return;
    }

    // get highscores from local storage
    localStorage.getItem("high scores", JSON.parse(highScoresArr));

    for (i = 0; i < highScoresArr.length; i++) {
        highScoresList.appendChild()
    }
};




// *****************
// EVENT LISTENERS
// *****************

startQuizBtn.addEventListener("click", startQuiz);

choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitBtn.addEventListener("click", saveHighScore);