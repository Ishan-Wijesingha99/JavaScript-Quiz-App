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

let randomQuestionsArray = questionsArray.sort(() => Math.random() - 0.5);





const startQuiz = function() {
    questionElement.textContent = randomQuestionsArray[questionNumber].question;

    questionBtnNodeList.forEach(function(element, i) {
        element.innerHTML = randomQuestionsArray[questionNumber].options[i];
    })
}

const nextQuestion = function() {
    questionNumber++;
    startQuiz();
}

const pressStartBtn = function() {
    quizSection.classList.toggle('hide');
    startBtn.classList.toggle('hide');
    startQuiz();
}

const endOfGame = function() {
    quizSection.classList.toggle('hide');
    startBtn.classList.toggle('hide');
    questionNumber = 0;
    console.log(questionNumber);
    randomQuestionsArray = questionsArray.sort(() => Math.random() - 0.5);
}




startBtn.addEventListener('click', pressStartBtn)






const toggleHighScoreScreen = function() {
    questionContainer.classList.toggle("hide");
    highscoreScreen.classList.toggle("hide");

}



highscoreBtn.addEventListener('click', toggleHighScoreScreen)



// choosing an option for the question
btnGrid.addEventListener('click', function(e) {

    if(questionNumber === 14) {
        alert('out of Qs')
        endOfGame();
        return
    }

    if(e.target.innerHTML === randomQuestionsArray[questionNumber].correctAnswer) {
        correctOrWrongText.textContent = 'Correct!';
        nextQuestion();

    } else if(e.target.innerHTML !== randomQuestionsArray[questionNumber].correctAnswer) {
        correctOrWrongText.textContent = 'Wrong!';
        nextQuestion();
    }
})


