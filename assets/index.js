const highscoreBtn = document.querySelector('#high-score-btn');
const questionContainer = document.querySelector('.question-container');
const highscoreScreen = document.querySelector('.highscore-screen');
const startBtn = document.querySelector('#start-button');
const quizSection = document.querySelector('.quiz-section');
const questionElement = document.querySelector('#question');
const questionBtnNodeList = document.querySelectorAll('.option-btn');
const btnGrid = document.querySelector('.btn-grid');
const correctOrWrongText = document.querySelector('#correct-or-wrong-text');

// zero based
let questionNumber = 0;



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
    }
]

// ['<body></body>', '<html></html>', '<heading></heading>', '<head></head>']


const startQuiz = function() {
    questionElement.textContent = questionsArray[questionNumber].question;

    questionBtnNodeList.forEach(function(element, i) {
        element.innerHTML = questionsArray[questionNumber].options[i];
    })
}

const nextQuestion = function() {
    questionNumber++;
    startQuiz();
}

const pressStartBtn = function() {
    quizSection.classList.toggle('hide');
    startBtn.classList.toggle('hide');
    questionElement.classList.toggle('hide');
    startQuiz();
}

startBtn.addEventListener('click', pressStartBtn)






const toggleHighScoreScreen = function() {
    questionContainer.classList.toggle("hide");
    highscoreScreen.classList.toggle("hide");

}



highscoreBtn.addEventListener('click', toggleHighScoreScreen)



// choosing an option for the question
btnGrid.addEventListener('click', function(e) {
    if(e.target.innerHTML === questionsArray[questionNumber].correctAnswer) {
        correctOrWrongText.textContent = 'Correct!';
        nextQuestion();
    } else if(e.target.innerHTML !== questionsArray[questionNumber].correctAnswer) {
        correctOrWrongText.textContent = 'Wrong!';
        nextQuestion();
    }
})


