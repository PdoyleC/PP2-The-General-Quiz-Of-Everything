document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('questions-area').innerText = 'Welcome to the Quiz Of Everything';
});

//variables
const letsGo = document.getElementById('start-btn');
const nextBut = document.getElementById('next-btn');
const timershow = document.getElementById('timer-btn');
const clicksshow = document.getElementById('clicks-btn');
const quizRules = document.getElementById('quiz-rules');
const rulesDiv = document.getElementById('rules-div');
const infoFront = document.getElementById('info');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions-area');
const answersArea = document.getElementById('answer-choice');
const quizsection = document.getElementById('quiz-section');
const closeBtn = document.getElementById('close-btn');
let submit = document.getElementById('submit');
let myLabel = document.getElementById('myLabel');
let form = document.getElementById('form');
let finishText = document.getElementById('finish-text-score');
let shuffledQuestions; //hold the questions that are random
let currentQuestionIndex; //index for the current question
let currentCorrectScore = 0;
let currentIncorrectScore = 0;
var sec = 1800; //this gives time to start the quiz
var clicks = 0;




//event listeners
quizRules.addEventListener('click', function () {
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    rulesDiv.classList.remove('hide');
    finishText.classList.add('hide');
    closeBtn.addEventListener('click', reset);
    console.log(quizRules);
});

//timer

var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec < 0) {
        clearInterval(time);
        alert("You are out of Time, The Quiz is over!! :(");
        endGame();
    }
}

function reset() {
    quizRules.classList.remove('hide');
    finishText.classList.add('hide');
    rulesDiv.classList.add('hide');
    form.classList.remove('hide');
    submit.classList.remove('hide');
    myLabel.classList.remove('hide');
    infoFront.classList.remove('hide');
}

submit.addEventListener('click', function () {
    myName = document.getElementById('myName').value;
    if (myName) {

        letsGo.classList.remove('hide');
        finishText.classList.add('hide');

    } else {
        finishText.classList.remove('hide');
        document.getElementById('finish-text-score').innerHTML = `OOPS, you didn't enter your name. Please enter your name and then press submit.`;
    }

});

letsGo.addEventListener('click', runGame);

nextBut.addEventListener('click', () => {
    sec = 2000; //added so there is 20 sec per question at 2000 to test code and css style
    currentQuestionIndex++;
    getNextQuestion();
    clicks += 1;    //added to increment number of question completed
    document.getElementById("clicks").innerHTML = clicks; //added to increment number of question completed

});



//Quiz game

/**
 * hides the start button, shuffles the questions and adds 10
 * moves onto the first question
 */
function runGame() {
    sec = 2000; //added so there is 20 sec per question
    letsGo.classList.add('hide');

    quizRules.classList.add('hide');
    finishText.classList.add('hide');
    rulesDiv.classList.add('hide');
    form.classList.add('hide');
    submit.classList.add('hide');
    myLabel.classList.add('hide');
    infoFront.classList.add('hide');
    timershow.classList.remove('hide');
    clicksshow.classList.remove('hide');
    shuffledQuestions = questions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    clicks += 1;    //added to increment number of question completed
    document.getElementById("clicks").innerHTML = clicks; //added to increment number of question completed
    questionCont.classList.remove('hide');
    getNextQuestion();
}

/**
 * resets and shuffles questions
 */
function getNextQuestion() {
    defaultState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Gets the questions and answers from the array
 * and displays them
 */
function displayQuestion(question) {
    questionArea.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', checkAnswer);
        answersArea.appendChild(button);
    });
}

/**
 * takes out the old answers so new ones can go in
 */
function defaultState() {
    nextBut.classList.add('hide');
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
    }
}


/**checks user answer and increments score if correct
 * increments incorrect score if wrong
 * highlights colours for right and wrong buttons
 */
function checkAnswer(event) {
    const clickedButton = event.target;
    const correct = clickedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answersArea.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBut.classList.remove('hide');
    } else {
        endGame();
    }
    if (correct) {
        incrementCorrectScore();
    } else {
        incrementWrongAnswer();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementCorrectScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = oldScore + 1;   //* ++oldscore can also be used here, changed from CI;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = oldScore + 1;
}


function endGame() {
    document.getElementById('questions-area').innerHTML = `
            <strong><em>Quiz Of Everything!</em></strong>
            <br>
            Click restart to retry
            `;
    //* setTimeout(myFunction, 3000);
    setTimeout(() => {
        checkAnswer();
    }, 3000);
    return window.location.assign("quizover.html");
}