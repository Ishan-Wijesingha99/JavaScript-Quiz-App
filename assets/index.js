// defining HTML elements
const highscoreBtn = document.querySelector('#high-score-btn');
const countdownElement = document.querySelector('#countdown');
const questionContainer = document.querySelector('.question-container');
const highscoreScreen = document.querySelector('.highscore-screen');
const startBtn = document.querySelector('#start-button');
const quizSection = document.querySelector('.quiz-section');
const questionElement = document.querySelector('#question');
const questionBtnNodeList = document.querySelectorAll('.option-btn');
const btnGrid = document.querySelector('.btn-grid');
const correctOrWrongText = document.querySelector('#correct-or-wrong-text');
const allGridBtns = document.querySelectorAll('.option-btn');
const currentHighscoreDisplay1 = document.querySelector('#display-highscore-1');
const currentHighscoreDisplay2 = document.querySelector('#display-highscore-2');
const currentHighscoreDisplay3 = document.querySelector('#display-highscore-3');
const currentGameScore = document.querySelector('#current-game-score')

// defining initial values of variables
let questionNumber = 0;
let score = 0;
let currentHighscore1 = 0;
let currentHighscore2 = 0;
let currentHighscore3 = 0;
let timeLeft = 40;
let initials1 = '';
let initials2 = '';
let initials3 = '';



// array of objects containing questions, options, and correct answers
const questionsArray = [
    {
        question: 'Which of the following is not a truthy value?', 
        options: ['17', '[1, 4]', '0', 'true'],
        correctAnswer: '0'
    },

    {
        question: 'What is considered the progamming language of the web?', 
        options: ['JavaScript', 'Python', 'C#', 'HTML'],
        correctAnswer: 'JavaScript'
    },

    {
        question: 'Which HTML element is responsible for all the content you see on a webpage?', 
        options: ['body', 'head', 'html', 'heading'],
        correctAnswer: 'body'
    },

    {
        question: 'What does CSS stand for?',
        options: ['Capitulating Style Sheets', 'Cascading Style Sheets', 'Colourful Style Sheets', 'Computational Style Sheets'],
        correctAnswer: 'Cascading Style Sheets'
    },

    {
        question: 'Which of the following is not a data type in JavaScript?',
        options: ['Sets', 'Maps', 'Arrays', 'Subjects'],
        correctAnswer: 'Subjects'
    },

    {
        question: 'What is the process by which numbers are automatically converted in strings in JavaScript?',
        options: ['Typeof', 'Type coersion', 'Type conversion', 'Type convention'],
        correctAnswer: 'Type coersion'
    },

    {
        question: 'Which of the following is the correct way to write a comment in CSS?',
        options: ['//comment', '/ comment /', `-- comment --`, '/* comment */'],
        correctAnswer: '/* comment */'
    },

    {
        question: 'Which of the following rounds down -8.98 to -9',
        options: ['Math.trunc(-8.98)', 'Math.random(-8.98)', 'Math.floor(-8.98)', 'Math.ceil(-8.98)'],
        correctAnswer: 'Math.floor(-8.98)'
    },

    {
        question: 'Which attribute must you add to a HTML element for a webpage to open in a new tab?',
        options: ['target="_window"', 'target="_new"', 'target="_tab"', 'target="_blank"'],
        correctAnswer: 'target="_blank"'
    },

    {
        question: 'Which of the following is the proper way to define a variable in JavaScript?',
        options: ['const = SecondFamilyName', 'const = secondFamilyName', 'const = second-family-name', 'const = second_family_name'],
        correctAnswer: 'const = secondFamilyName'
    },

    {
        question: 'Which of the following CSS properties control the underline of text?',
        options: ['font-display: underline;', 'decorate-content: underline;', 'text-decoration: underline;', 'font-style: underline;'],
        correctAnswer: 'text-decoration: underline;'
    },

    {
        question: 'In CSS, where do we define CSS variables?',
        options: ['in body', 'in head', 'in :root', 'in *'],
        correctAnswer: 'in :root'
    },

    {
        question: 'Which CSS property controls the font of the text?',
        options: ['font-style', 'font-decoration', 'font-family', 'font-weight'],
        correctAnswer: 'font-family'
    },

    {
        question: 'Which of the following is not apart of the CSS Box Model?',
        options: ['Padding', 'Edges', 'Margin', 'Border'],
        correctAnswer: 'Edges'
    },

    {
        question: 'Which of these is the largest HTML element?',
        options: ['h1', 'section', 'h4', 'heading'],
        correctAnswer: 'h1'
    }
]

// sorting the question array randomly, so that everytime a new game is started, the order of the questions change
let randomQuestionsArray = questionsArray.sort(() => Math.random() - 0.5);





// function to display the current highscore
const displayHighscore1 = function() {

    if(currentHighscore1 === 0) {
        // by default, if the user hasn't played a single game yet, or they didn't manage to get a single question correct, just display the current high score as 0
        currentHighscoreDisplay1.textContent = `Current High score - ${currentHighscore1}`
    } else if(currentHighscore1 > 0) {
        // if the current highscore is greater than 0, then ask the user for their initials to record that highscore
        initials1 = askforInitials();
        currentHighscoreDisplay1.textContent = `High score 1 by ${initials1} - ${currentHighscore1}`;
    }

}

// call the displayHighscore1() function immediately so that the highscore at the begining of loading the page is displayed as 0
displayHighscore1();





// function to display second highscore
const displayHighscore2 = function() {
    initials2 = askforInitials();
    currentHighscoreDisplay2.textContent = `High score 2 by ${initials2} - ${currentHighscore2}`;
}





// function to display third highscore
const displayHighscore3 = function() {
    initials3 = askforInitials();
    currentHighscoreDisplay3.textContent = `High score 3 by ${initials3} - ${currentHighscore3}`;
}





// function that asks for the initials in a prompt and returns the input
const askforInitials = function() {
    return prompt(`What initials would you like your highscore under?`);
}





// function to display the current game score
const displayCurrentGameScore = function() {
    currentGameScore.textContent = `Score: ${score}`;
}





// function that starts countdown timer
const startCountdownTimer = function() {
    timer = setInterval(function() {
        
        // decrease timeLeft variable by 1 every second
        timeLeft--;
        // display the new timeLeft variable on the webpage
        countdownElement.textContent = `Countdown: ${timeLeft}s`

        // if the timeLeft variable drops below 0, execute endOfGame() function and then stop the interval
        if(timeLeft < 0) {
            endOfGame();
            clearInterval(timer);
        }

    }, 1000)
}





// function to start the quiz
const startQuiz = function() {
    // display the correct question coinciding with the questionNumber variable 
    questionElement.textContent = randomQuestionsArray[questionNumber].question;

    // display the game score once the quiz has started
    displayCurrentGameScore()

    // display all the answer options by looping through node list that contains all the option btns
    questionBtnNodeList.forEach(function(element, i) {
        element.innerHTML = randomQuestionsArray[questionNumber].options[i];
    })
}





// function to move to the next question
const nextQuestion = function() {
    // increase questionNumber variable by 1
    questionNumber++;

    // update the quiz section with the new question and new options
    startQuiz();
}





// function to start the game when the start btn has been clicked
const pressStartBtn = function() {
    // show the quiz section by removing the "hide" class
    quizSection.classList.toggle('hide');

    // hide the start btn by adding the "hide" class
    startBtn.classList.toggle('hide');

    // start the countdown timer
    startCountdownTimer();

    // execute the start Quiz function
    startQuiz();
}





// function that ends and resets the game
const endOfGame = function() {

    // hide the quiz section by adding the "hide" class
    quizSection.classList.toggle('hide');

    // show the start btn by removing the "hide" class 
    startBtn.classList.toggle('hide');

    // reset questionNumber variable to initial value
    questionNumber = 0;

    // re-order the questions in the question array for the next game
    randomQuestionsArray = questionsArray.sort(() => Math.random() - 0.5);
    
    // before we set the score back to 0, compare the current score to the three variables currentHighscore1, currentHighscore2 and currentHighscore3, and based off that, update those variables
    if(score > currentHighscore1) {
        currentHighscore1 = score;
        displayHighscore1();
    } else if(score <= currentHighscore1 && score > currentHighscore2) {
        currentHighscore2 = score;
        displayHighscore2();
    } else if(score <= currentHighscore1 && score <= currentHighscore2 && score > currentHighscore3) {
        currentHighscore3 = score;
        displayHighscore3();
    }

    // reset score to 0
    score = 0;

    // reset the current game score to an empty string, which basically hides it until a new game is started
    currentGameScore.textContent = '';

    // reset the timeLeft variable to 40
    timeLeft = 40;

    // reset the countdown element's text content to it's default
    countdownElement.textContent = 'Countdown: 40s';

    // Get rid of correct or wrong message'
    correctOrWrongText.textContent = '';
}





// function that toggles the high score screen
const toggleHighScoreScreen = function() {
    // hide the quiz section container by adding "hide" class to it
    questionContainer.classList.toggle("hide");

    // show the highscore section by removing "hide" class from it
    highscoreScreen.classList.toggle("hide");
}





// event listeners

startBtn.addEventListener('click', pressStartBtn)

highscoreBtn.addEventListener('click', toggleHighScoreScreen)

// using event delegation for the option btns
btnGrid.addEventListener('click', function(e) {

    // if user clicks the correct btn
    if(e.target.innerHTML === randomQuestionsArray[questionNumber].correctAnswer) {
        
        // display 'CORRECT!'
        correctOrWrongText.textContent = 'CORRECT!';

        // increase score by 1
        score++;

        // check if user has just answered the final question, in which case, end the game
        if(questionNumber === 14) {
            // alert user there are no more Qs to answer
            alert('Out of questions. Well Done!');

            // end the game
            endOfGame();

            // clear timer
            clearInterval(timer);

            // end the function immediately using a guard clause
            return
        }

        // go to the next question
        nextQuestion();

    } else if((e.target === allGridBtns[0] || e.target === allGridBtns[1] || e.target === allGridBtns[2] || e.target === allGridBtns[3]) && e.target.innerHTML !== randomQuestionsArray[questionNumber].correctAnswer) 
    {

        if(questionNumber === 14) {
            // if the user just answered the final question, alert them there are no more questions to answer
            alert('Out of Questions. Well Done!');

            // end the game
            endOfGame();

            // clear timer
            clearInterval(timer);

            // end the function immediately using a guard clause
            return
        } else {
            // display "WRONG!"
            correctOrWrongText.textContent = 'WRONG!';

            // decrease timeLeft variable by 10
            timeLeft = timeLeft - 10;

            // go to next Question
            nextQuestion();
        }

    }
})


