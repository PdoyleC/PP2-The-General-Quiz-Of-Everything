document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('questions-area').innerText = 'Welcome to the Quiz Of Everything';
});


//variables
const letsGo = document.getElementById('start-btn');
const nextBut = document.getElementById('next-btn');
const restartBut = document.getElementById('restart-btn');
const timershow = document.getElementById('timer-btn');
const scoresshow = document.getElementById('scores-btn');
const scoresinshow = document.getElementById('scoresin-btn');
const clicksshow = document.getElementById('clicks-btn');
const quizRules = document.getElementById('quiz-rules');
const rulesDiv = document.getElementById('rules-guide');
const infoFront = document.getElementById('info');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions-area');
const answersArea = document.getElementsByClassName('answer-choice')[0];
const closeBtn = document.getElementById('close-btn');
let submit = document.getElementById('submit');
let myLabel = document.getElementById('myLabel');
let myName = document.getElementById('myName');
const form = document.getElementById('form');
let finishText = document.getElementById('finish-text-score');
let ruleText = document.getElementById('rule-text-score');
let shuffledQuestions; //hold the questions that are random
let currentQuestionIndex; //index for the current question
let questionAnswered = false;
let score = 0;
var sec = 18000; //this gives time to start the quiz
var clicks = 0;
var time = setInterval(myTimer, 1000);

//event listeners for Start, Rules, Next and submit buttons
submit.addEventListener('click', subname);
letsGo.addEventListener('click', runGame);
quizRules.addEventListener('click', showrules);
nextBut.addEventListener('click', nextquestcurrquest);

//showrules code was added by me
function showrules() {
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    rulesDiv.classList.remove('hide');
    submit.classList.remove('hide');
    myName.classList.remove('hide');
    closeBtn.addEventListener('click', reset);
}

//timer code was added by me to set a time for each question.

function myTimer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec < -1) {   // minus 1 added by me and is used for the seconds to get to zero.
        clearInterval(time);
        timeoutendGame();
    }
}

// reset function code was added by me to show and hide the rules text after the close button is pressed in function showrules.

function reset() {
    quizRules.classList.remove('hide');
    finishText.classList.add('hide');
    rulesDiv.classList.add('hide');
    form.classList.remove('hide');
    submit.classList.remove('hide');
    myLabel.classList.remove('hide');
    infoFront.classList.remove('hide');
}

// subname code was added by me to enter the user name and then display at the end of the quiz.
function subname() {
    const enteredName = document.getElementById('myName').value.trim(); // Remove leading and trailing spaces

    myName = document.getElementById('myName').value;
    if (enteredName) {
        myName = enteredName;
        letsGo.classList.remove('hide');
        submit.classList.add('hide'); // code added to remove submit button once name has been entered.
        ruleText.classList.add('hide'); // code added to remove OOPS message when submit is entered.
        closeBtn.addEventListener('click', reset);

    } else {
        ruleText.classList.remove('hide');
        document.getElementById('rule-text-score').innerHTML = `OOPS, you didn't enter your name. Please enter your name and then press submit.`; // code added by me to ask for username
    }
}

// nextquestcurrquest code is there to increment the current question of the progress counter.

function nextquestcurrquest() {

    if (questionAnswered) {
        questionAnswered = false; // Reset the questionAnswered flag
        sec = 25; // Reset the timer value
        time = setInterval(myTimer, 1000); // Start the timer again
    }

    currentQuestionIndex++;
    getNextQuestion();
    clicks += 1;  //code was added by me to increment number of question completed
    document.getElementById('clicks').innerHTML = clicks; //code was added by me to increment number of question completed
}

//Quiz game

/**
 * hides the start button, shuffles the questions and adds 10
 * moves onto the first question
 */
function runGame() { // code form Web Dev Simplified on youtube, link in README
    sec = 25; //code was added by me so there is 25 sec per question.
    letsGo.classList.add('hide');
    quizRules.classList.add('hide'); //code was added by me to hide rules and text
    finishText.classList.add('hide'); //code was added by me to hide rules and text
    rulesDiv.classList.add('hide'); //code was added by me to hide rules and text
    form.classList.add('hide'); //code was added by me to hide rules and text
    submit.classList.add('hide'); //code was added by me to hide rules and text
    myLabel.classList.add('hide'); //code was added by me to hide rules and text
    infoFront.classList.add('hide'); //code was added by me to hide rules and text
    timershow.classList.remove('hide'); //code was added by me to show timer .
    scoresshow.classList.remove('hide'); //code was added by me to show score.
    scoresinshow.classList.remove('hide'); //code was added by me to show score.
    clicksshow.classList.remove('hide'); //code was added by me to show progress
    shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    clicks += 1; //code was added by me to increment number of question completed
    document.getElementById('clicks').innerHTML = clicks; //code was added by me to increment number of question completed
    questionCont.classList.remove('hide');
    getNextQuestion();
}

/**
 * resets and shuffles questions
 */
function getNextQuestion() {  // code form Web Dev Simplified on youtube, link in README
    defaultState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Gets the questions and answers from the array and displays them

function displayQuestion(question) { // code form Web Dev Simplified on youtube, link in README
    questionArea.innerText = question.question;
    question.answers.forEach((answer) => {
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

//takes out the old answers so new ones can go in

function defaultState() {  // code form Web Dev Simplified on youtube, link in README
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
    // code form Web Dev Simplified on youtube, link in README
    const clickedButton = event.target;
    const correct = clickedButton.dataset.correct;

    if (!clickedButton.classList.contains('answered')) {
        clickedButton.classList.add('answered'); // Add a class to mark this button as answered

        if (correct) score++; // code added by me to increment score and display at end of quiz.

        clearInterval(time); // Stop the timer
        questionAnswered = true;

        setStatusClass(document.body, correct);
        Array.from(answersArea.children).forEach((button) => {
            setStatusClass(button, button.dataset.correct);
            button.removeEventListener('click', checkAnswer); // Remove the event listener to prevent further clicks
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextBut.classList.remove('hide');
        } else {
            sec = 25; // code added by me to insure the quiz dosen't time out
            timershow.classList.add('hide'); // code added by me to to hide the timer
            setTimeout(endscore, 5000); // code added by me to for the user to check there final answer.

            function endscore() {
                // This nested function code added by me to give the user a chance to see the answer of the last question.
                scoresinshow.classList.add('hide');
                scoresshow.classList.add('hide');
                answersArea.classList.add('hide');
                clicksshow.classList.add('hide');
                timershow.classList.add('hide');
                questionCont.classList.add('hide');
                finishText.classList.remove('hide');
                restartBut.classList.add('hide');

                if (score >= 8) {
                    // if else code added by me to display a comment, name and score at end of quiz.
                    document.getElementById(
                        'finish-text-score'
                    ).innerHTML = `Your General knowledge is Fantastic ${myName}. You have scored ${score} out of 10. Thank you for taking the Quiz.`;
                } else if (score >= 6 && score < 8) {
                    document.getElementById(
                        'finish-text-score'
                    ).innerHTML = `Great work ${myName}. You have scored ${score} out of 10. Thank you for taking the Quiz.`;
                } else if (score >= 4 && score < 6) {
                    document.getElementById(
                        'finish-text-score'
                    ).innerHTML = `Good effort ${myName}. You have scored ${score} out of 10. Thank you for taking the Quiz.`;
                } else {
                    document.getElementById(
                        'finish-text-score'
                    ).innerHTML = `They just didn't suit you ${myName}. It's all about trying. You have scored ${score} out of 10. Thank you for taking the Quiz,`;
                }
                setTimeout(endGameover, 10000);
            }
        }

        if (correct) {
            incrementCorrectScore();
        } else {
            incrementWrongAnswer();
        }
    }
}

function setStatusClass(element, correct) {
    // code form Web Dev Simplified on youtube, link in README
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    // code form Web Dev Simplified on youtube, link in README
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Gets the current score from the DOM and increments it by 1.
 * Code from CI loves maths.
 */

function incrementCorrectScore() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = oldScore + 1; //* ++oldscore can also be used here, changed from CI;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = oldScore + 1;
}

// timeoutendGame code was added by me for when the quiz timer is up the quiz ends, it jumps to here.
function timeoutendGame() {
    document.getElementById('questions-area').innerHTML = `
            <strong><em>Unfortunately the timer ended the Quiz!</em></strong>
            <br>
            
            `;

    timershow.classList.add('hide');
    answersArea.classList.add('hide');
    scoresinshow.classList.add('hide');
    clicksshow.classList.add('hide');
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    finishText.classList.add('hide');
    setTimeout(restart, 5000); //* setTimeout(myFunction, 5 seconds);
}

//restart code was added by me for completeing the quiz
function restart() {
    return window.location.assign('toquizover.html');
}

//endGameover code was added by me for the quiz timing out
function endGameover() {
    return window.location.assign('quizover.html');

}