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
var initialsInput = document.getElementById("initials-input");
var submitBtn = document.getElementById("submit-score");

// highscores page
// highscores div
var highScores = document.getElementById("highscores");
// list fo scores
var highScoresList = document.getElementById("highscores-list");
var goBackBtn = document.getElementById("go-back-btn");
var clearHighScores = document.getElementById("clear-scores-btn");

// *****************
// GLOBAL VARIABLES
// *****************

var questions = [
    {
        question: "What does 'HTML' stand for?",
        choices: ["a. Hyper Text Means Language ", "b. Hyper Tool Made Language", "c. Hyper Text Markup Language", "d. Hyperlinks and Text Markup Language"],
        answer: "c. Hyper Text Markup Language"
    },
    {
        question: "Which is an example of an HTML tag?",
        choices: ["a. '<p>'", "b. '<css>'", "c. '<function>'", "d. '<variable>'"],
        answer: "a. '<p>'"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        choices: ["a. '<head>'", "b. '<h6>'", "c. '<heading>'", "d. '<h1>'"],
        answer: "d. '<h1>'"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choices: ["a. '<br>'", "b. '<break>'", "c. '<lb>'", "d. '<h1>'"],
        answer: "d. '<linebreak>'"
    },
    {
        question: "What does CSS stand for?",
        choices: ["a. Creative Style Sheets", "b. Cascading Style Sheets", "c. Colorful Style Sheets", "d. Computer Style Sheets"],
        answer: "b. Cascading Style Sheets"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        choices: ["a. In the '<body>' section", "b. In the '<head>' section", "c. At the end of the document", "d. In the '<header>' section"],
        answer: "b. In the '<head>' section"
    },
    {
        question: "How do you insert a comment in a CSS file?",
        choices: ["a. // this is a comment// ", "b. /* this is a comment */", "c. // this is a comment", "d. ' this is a comment"],
        answer: "b. /* this is a comment */"
    },
    {
        question: "Which is the correct CSS syntax?",
        choices: ["a. 'body:color=black;'", "b. 'body{color:black;}'", "c. '{body:color=black;}'", "d. '{body;color:black;}'"],
        answer: "b. 'body{color:black;}'"
    },
    {
        question: "Which property is used to change the background color?",
        choices: ["a. background-color", "b. bgcolor", "c. color", "d. backgroundcolor"],
        answer: "a. background-color"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        choices: ["a. h1{background-color:#FFFFFF;}", "b. all.h1{background-color:#FFFFFF;}", "c. h1.all{background-color:#FFFFFF}", "d. h1.color-all{background-color:#FFFFFF;}"],
        answer: "a. h1{background-color:#FFFFFF;}"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunction()"
    },
    {
        question: "To see if two variables are strictly equal you would use ____.",
        choices: ["a. =", "b. ===", "c. 'equals'", "d. !="],
        answer: "b. ==="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["a. if(i<>5)", "b. if i <> 5", "c. if (i!=5)", "d. if i =! 5 then"],
        answer: "c. if (i!=5)"
    },
    {
        question: "How does a FOR loop start?",
        choices: ["a. for(i <= 5; i++)", "b. for(i =0; i <= 5)", "c. for i = 1 to 5", "d. for(i = 0; i <=5; i++"],
        answer: "d. for(i = 0; i <=5; i++"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["a. var colors = 'red', 'green', 'blue'", "b. var colors = ['red', 'green', 'blue']", "c. var colors = (1:'red', 2:'green', 3:'blue')", "d. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        answer: "b. var colors = ['red', 'green', 'blue']"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["a. var carName;", "b. variable carName;", "c. var carName = ;", "d. carName = var;"],
        answer: "c. var carName = ;"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["a. round(2.5)", "b. Math.round(7.25)", "c. Math.rnd(7.25)", "d. rnd(7.25)"],
        answer: "b. Math.round(7.25)"
    },
    {
        question: "Which class provides a responsive fixed width container?",
        choices: ["a. .container-fluid", "b. .container-fixed", "c. .container", "d. .fixed-container"],
        answer: "c. container"
    },
    {
        question: "Which class provides a full width container, spanning the entire width of the viewport?",
        choices: ["a. .container-fluid", "b. .container-fixed", "c. .container", "d. .fixed-container"],
        answer: "a. .container-fluid"
    },
    {
        question: "The Bootstrap grid system is based on how many columns?",
        choices: ["a. 3", "b. 6", "c. 9", "d. 12"],
        answer: "d. 12"
    },
    {
        question: "Which button class is used to create a large button?",
        choices: ["a. .btn-large", "b. .btn-xl", "c. .btn-lrg", "d. .btn-l"],
        answer: "c. btn-lrg"
    },
    {
        question: "Which class is used to create a basic list group?",
        choices: ["a. .grouped-list", "b. .list-group", "c. .group-list", "d. .listed-group"],
        answer: "b. .list-group"
    }
];

var totalTime = 100;
var correctAns = 0;
var questionIndex = 0;
var highScoresArr = [];
var prevHighScores = localStorage.getItem("high scores");


// **********
// FUNCTIONS
// **********

// * WHEN I click the start button
var startQuiz = function() {
    // start page disappears
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    timer.style.display = "block";
    highScores.style.display = "none";
    highScoresList.style.display = "none";

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




// ////////////////////////////
// ***** FIX CODE BELOW HERE
// ////////////////////////////



// * THEN I can save my initials and score
var saveHighScore = function(event) {
    event.preventDefault();

    score.style.display = "block";
    highScoresList.style.display = "none";
    timesUp.style.display = "none";
    timer.style.display = "none";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";

    // if initials left blank, prompt user to enter initials
    if (initialsInput.value === "") {
        alert("Please enter your initials");
        return;
    } 

    // var prevHighScores = localStorage.getItem("high scores");

    // if there are no previous highscores, create new array
    if (prevHighScores === null) {
        highScoresArr = [];
    } else {
        // take filled string of previous highscores and parse
        highScoresArr = JSON.parse(prevHighScores);
    }

    // object that holds user initials and score to be saved as object within highScoresArr
    var userScore = {
        initials: initialsInput.value,
        score: finalScore.textContent
    };
    //console.log(userScore);
    
    // push score to highscores list(array)
    highScoresArr.push(userScore);
    // save to local storage
    localStorage.setItem("high scores", JSON.stringify(highScoresArr));

    // show current highscores
    showHighScores();
};

var showHighScores = function() {

    highScores.style.display = "block";
    highScoresList.style.display = "block";
    score.style.display = "none";
    timesUp.style.display = "none";
    timer.style.display = "none";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";

    // check if any highscores in local storage
    prevHighScores = localStorage.getItem("high scores");
    if (prevHighScores === null) {
        return;
    }
    //console.log(prevHighScores);


    // get any saved highscores and append to document
    var storedHighScores = JSON.parse(prevHighScores);

    for (var i = 0; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        highScoresList.appendChild(eachNewHighScore);
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

submitBtn.addEventListener("click", function(event) {
    saveHighScore(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScores.style.display = "none";
    highScoresList.style.display = "none";
    // reset questions index
    questionIndex = 0;
});

clearHighScores.addEventListener("click", function() {
    localStorage.removeItem("high scores");
    highScoresList.innerHTML = "High Scores Cleared!";

});

viewHighScores.addEventListener("click", function() {
    showHighScores();
});

