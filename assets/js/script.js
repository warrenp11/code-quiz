// ## Acceptance Criteria
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

// GLOBAL VARIABLES
var questions = [];

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
var choiceB = document.getElementById("initials-input");
var choiceC = document.getElementById("submit-score");
var finalScore = document.getElementById("finalScore")
// highscores page
var highScores = document.getElementById("highscores");
var highScoresList = document.getElementById("highscores-list");
var goBackBtn = document.getElementById("go-back-btn");
var clearHighScores = document.getElementById("clear-scores-btn");
