<h1 align="center">The General Quiz Of Everything</h1>

<h2 align="center"> The General Quiz Of Everything is a site where people can come and test there knowledge on a wide variety of subjects.</h2>

![Mockup](documentation/mockup.jpg)

[Am I Responsive - link](https://ui.dev/amiresponsive?url=https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/)

[Link to live project](https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/)

## Contents

## Project Goals

- To create a quiz that covers a wide variety of subjects.
- To have the score displayed at the end.
- To be able to enter a user name and have displayed with the score.
- To have a reset or restart button.
- There will be a choice of answers to choose from.
- The correct answer will be displayed when the question is answered.
- For the quiz to be the same as a timed exam, when the time is up the quiz will end.

### User Feedback

- Liked the questions, and would be nice if there was dificulty levels like easy mediun or hard level.
- Have a category for different questions, e.g. Science, history, TV, Movie and pick the category at the start of the quiz.
- A user didn't know that the quiz would end after 20 seconds, so I implemented that the submit and start button would only appear after the rules have been opened.
- The quiz time limit was originally 20 seconds, and some peoples feedback said that the 20secs wasn't enough, so the time was increased to 25 seconds.
- One user would like it if there could be dificulty levels with the time also, having a choice of 20 sec or 25 secs or 30 sec per question.
- Have a leader board for a group of people to compare scores.
- One user wanted to be able a check there answer after it was answered before moving onto the next question, which would mean for the timer to stop and start again. One of the goals of the quiz is to treat it as a timed exam. Another way this could be achived would to be able to sellect the time at the start of the quiz, if the user selected 1min per question, the user would be able check there answer.
- A user pointed out that when the last question is answered the quiz justs jumps to the score and comment section, the user never gets to see what the answer is and if they picked the correct answer. To fix this issue I put in place a nested function called endscore in the function checkAnswer, and the nested function is called in an else statement with a 5 second delay so the user can read there answer. In the else statement the timer is also set back to 25 seconds which takes into account if the answer is sellected with 1 second to go, the quiz won't time out. It is also setup that the timer is removed from dispaly so there is no confusion that the quiz is over.

## Features

- There are 10 questions that appeared randomly out of a total of 40.
- The user enters there username to be displayed at the end of the quiz.
- The players score is visible on the screen under the quiz.
- The score at the end will also have a message depending on the score. e.g They just didn't suit you Jane Bloggs, if the score is low.
- There is a countdown timer which ends the quiz after 25 seconds if the question isn't answered,which appears after the start button is pressed.
- There is a progress counter which appears after the start button is pressed.
- Rules can be seen by pressing the Rules button.

<details>
<summary>Features Image</summary>

![Features Home Image](documentation/features.jpg)
![Features Questions Image](documentation/features1.jpg)
![Score Image](documentation/features4.jpg)
![Background TimeOut Image](documentation/features2.jpg)

</details>

### Background Image

- The image is by Rachel Claire and is from [Pexels.com](https://www.pexels.com/photo/merchandise-in-store-5865390/), it was chosen as it has a mix of everything in the image - typewriter, camera, jug, bowl, books, glasses, mirrors, towels - , which corresponds to the quiz, a mix of everything.
<details>
<summary>Background Image</summary>

![Background Image](documentation/misc1.jpg)

</details>

[Back to contents](#contents)

## Design

- I wanted to be able to see the background image so the "quiz-section" class was made transparent by 0.5.
- The Rules button is flashing at the start of the quiz to let users know that it needs to be pressed.
- The colour when the buttons are hover over was picked using the eye dropper in chrome developer where the colour can be changed. The colour was picked from the red circle in the image below. This colour is repeated in the image also, in some jugs and bowls in the image.

![Background Image](documentation/eyedropper.png)

### Fonts

- The font Lora was used with a backup of sans-serif should it not be accessible for all.
<details>
<summary>Font Image</summary>

![Font Image](documentation/fonts.jpg)

</details>

[Back to contents](#contents)

## Future Adaptations

- Add more questions about books, geography and history.
- For the user to have a choice of the number of questions they would like to be asked, e.g 10,20,30 or even 40 questions per quiz.
- I'd also like to add a choise of timers to choose from and difficulty levels, a user could choose a hard level and a short timer, to make it really difficult.
- In the future I'd like to add smaller indicators, to show which question was selected and the correct answer if the incorrect was selected.  
  ![Future Ideas Image](documentation/futureidea.jpg)

[Back to contents](#contents)

### Wireframes

<details>
<summary>wireFrame Image</summary>

![wireFrame Desktop Image](documentation/wireframedesktop.png)
![wireFrame Ipad Image](documentation/wireframeipad.png)
![wireFrame Mobile Image](documentation/wireframemobile.png)

</details>

### Programmes used

- Balsamiq
  - For the wireframes
- Git
  - For version control, commiting, and pushing to Github
- Github
  - For storing the repository.
- Codeanywhere
  - IDE used to code the website.
- Chrome developer tools
  - for checking compatibilty, debugging, styling, troubleshooting and editing code.
- jigsaw.w3.org / validator.w3.org / jshint.com
  - For code validation of HTML, CSS & JavaScript
- Am I responsive
  - Used to test responsiveness of the website of the different screen sizes.
- Google Fonts
  - For the font stlye.
- favicon.io
  - For the tab icon.

[Back to contents](#contents)

## Fixed Bugs

- I had the scores, timer and progress counters all hidden at the end of the quiz, but I wasn't able to hide the answer section. With thanks to 3 CI tutor's this was solved, as it was a node list and adding [0] to the class name resolved the issue.

## Unfixed Bugs

- The timer alert was causing a console error when the quiz timed out, after commentating out the timer code, it was seen that it was the timer. The issue was only seen on Chrome and wasn't happening on FireFow or Edge. The code was removed to stop the error from happening in chrome [stackoverflow](https://stackoverflow.com/questions/42218699/chrome-violation-violation-handler-took-83ms-of-runtime).

## Testing and Validation

### Lighthouse

- Lighthouse in chrome developer tool, was used to test the website for:
- Performance - how the page performs whilst loading.
- Accessibility - how accessible is the site for all users and how can it be improved.
- Best practices - how does the site conform to industry best practices.
- SEO - search engine optimization. Is the site optimized for search engine result rankings.

![lighthouse](documentation/lighthouse.png)

### Code Validation

- HTML, CSS and JavaScript codes where all tested jigsaw.w3.org / validator.w3.org / jshint.com
- JShint was used to test the the JavaScript code, there was 1 undefined variable for question which is in questions.js folder, there were a number of warnings for 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). The warnings are be removed by Creating jshint in the root directory of the project.
<details>
<summary>Features Image</summary>

![index HTML](documentation/indexhtmlvalid.png)
![Quiz Completed HTML](documentation/quizoverhtmlvalid.png)
![Quiz Time Out HTML](documentation/toquizoverhtmlvalid.png)
![index HTML](documentation/cssvalid.png)
![JShint Validation Image](documentation/jshwarnings.jpg)

</details>

### Inspect and Testing

- Spaces were put into the username and submit was entered, an error appears asking to input a username.
- Once the quiz is running, the answers were clicked multiple times and the score didn't artificially increment.
- I used Inspect to make changes to the code and to test layout and positioning. Inspect was used to test the different media screen sizes.
- The image below shows the site being tested using Chrome,Edge/FireFox, iPad and iPhone4

![Inspect Testing](documentation/inspectxl.png)

### 404 ERROR

![404 error Page](documentation/404errorpage.jpg)

[Back to contents](#contents)

## Deployment

- The project was deployed to Github pages using the following steps:

1. Log into Github and locate the [Github repository](https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/).
2. Click on the settings icon at the top of the repository.
3. Scroll down until you come to the Github pages section
   - On this part it says it now has it's own dedicated tab and to click check it out click this.
4. Where it says **source** select **main**, next to this should say root.
5. Click save, then refresh the page.

## Credits

### Content

- Questions in relation to Always Sunny were found at [Always Sunny link](https://www.joe.ie/movies-tv/quiz-can-beat-gang-get-1520-always-sunny-philadelphia-quiz-576503).
- Questions in relation to general Knowledge were found at [General Knowledge link](https://www.faber.co.uk/journal/quizzes/qi-quiz/).
- Questions in relation to Rick and Morty were found at [Rick and Morty link](https://editorial.rottentomatoes.com/article/ultimate-rick-and-morty-quiz/).
- Questions in relation to Astronomy were found at [Astronomy link](https://thoughtcatalog.com/january-nelson/2021/10/astronomy-trivia/).
- Questions in relation to Predator rivia were found at [Predator Trivia link](https://www.usefultrivia.com/movie_trivia/predator_trivia.html).
- Questions in relation to general Knowledge were found at [General Knowledge link](https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates#quiz-templates).
- Questions in relation to general Knowledge were found at [General Knowledge link](https://www.cosmopolitan.com/uk/worklife/a32433256/best-hard-general-knowledge-quiz-questions/).
- Questions in relation to general Knowledge were found at [General Knowledge link](http://www.freepubquiz.co.uk/ireland-quiz.html).
- Questions in relation to general Knowledge were found at [General Knowledge link](https://www.beelovedcity.com/ireland-quiz).
- Questions in relation to general Knowledge were found at [General Knowledge link](https://www.mylondon.news/news/zone-1-news/30-tough-pop-music-quiz-18302193).
- Questions in relation to general Knowledge were found at [General Knowledge link](https://thisisgalway.ie/quiz/the-irish-music-quiz-1/).

### Code

- This you tube video for help to get started [You tube link](https://www.youtube.com/watch?v=riDzcEQbX6k).

  - I used from the youtube video,
    - displayQuestion function was copied and used.
    - getNextQuestion function was copied and used.
    - nextquestcurrquest function was used and which I added code to increment number of questions completed.
    - runGame function was used and which I added code to and changed to hide button and added code to increment number of question completed.
    - nextButton function was used and which I added code for the counter I included.
    - checkAnswer function was used and which I manipulated by adding code to increment the score to be displayed at the end, I also added an if else statement to output a comment which is related to the score you got. A time delay and nested function was also added by me to this section of code.
  - The code I added.
    - A Timer for each question where there is 25 seconds to answer each question.
    - Nested function code added by me as a time delay called endscore in function checkAnswer for the last questions answer to be seen as the next button isn't displayed as its in an if else statement.
    - A Progress counter to let you know which question your on.
    - A user name to display at the end of the quiz with your score and submit button for username.
    - A rules button to show and hide the rules of the quiz.
    - An if else statement which takes the score and displays the score with a comment which is related to the score you got.

- Code institute for course material and content for correct and incorrect scoring.
- Code to trim spaces in username [Link w3schools](https://www.w3schools.com/jsref/jsref_trim_string.asp).
- Code inspired from CI student Jose Maciel [Link to zemaciel github](https://zemaciel.github.io/project-02/index.html).
- Code inspired from CI student Lisa Tinmurth [Link to mrst12 github](https://mrst12.github.io/Quizzical/).
- Favicon code was found at the following site [Link to Favicon site](https://favicon.io/).
- Code for timer to end quiz [Link to Stack Over Flow site](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz). The code was improved by changing that measurement of the countdown.
- How to pause the timer code was researched from the following.
  - [Link Stack Over Flow site](https://stackoverflow.com/questions/23262434/javascript-countdown-timer-pause-resume).
  - [Link Stack Over Flow site](https://stackoverflow.com/questions/11563382/javascript-timer-pause?rq=3).
  - [Link Stack Over Flow site](https://stackoverflow.com/questions/20851709/how-to-pause-stop-a-timer).
  - [Link w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_setinterval3).
- code was researched from the following to stop additional answers being clicked multiple times to artificially increment the correct/incorrect score.
  - [Link Stack Over Flow site](https://stackoverflow.com/questions/72856560/how-to-detect-classname-with-onclick-event).
  - [Link Stack Over Flow site](https://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript).
  - [Link Stack Over Flow site](https://stackoverflow.com/questions/1553661/how-to-get-the-onclick-calling-object).

### Media

- The image is by Rachel Claire and is from [Pexels.com](https://www.pexels.com/photo/merchandise-in-store-5865390/)

### Acknowledgments

- Thank you to my mentor Elaine Roche who helped with points and tips and gave me very good advice and feedback on how to plan and execute this project and who provided me with lots of pointers for my project.
- A thanks goes to Gemma,Rebecca and Kevin from CI Tutor's for there help in hiding the answer area.

  [Back to contents](#contents)
