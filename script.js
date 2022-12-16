const quizData [
    {
        question: 'Who won the 2021 Drivers Championship?',

        a: 'Lewis Hamilton',
        b: 'Lando Norris',
        c: 'Max Verstappen',
        d: 'Nicholas Latifi',
        correct: 'c',
    },
    {
        question: 'Who won the 2022 Constructors Championship?',

        a: 'Williams',
        b: 'Ferrari',
        c: 'Mercedes',
        d: 'Red Bull',
        correct: 'd',
    },
    {
        question: 'Who drives car number 55?',

        a: 'Carlos Sainz',
        b: 'Fernando Alonso',
        c: 'Alex Albon',
        d: 'Sergio Perez',
        correct: 'a',
    },
    {
        question: 'What nationality is Toto Wolff?',

        a: 'Irish',
        b: 'English',
        c: 'Austrian',
        d: 'Sweedish',
        correct: 'c',
    },
    {
        question: 'How many sprint races will take place in 2023?',

        a: 'Eight',
        b: 'Six',
        c: 'Two',
        d: 'Four',
        correct: 'b',
    }
]

const quiz = document.getElementById('quiz')
const answerN1 = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const answer-a = document.getElementById('answer-a')
const answer-b = document.getElementById('answer-b')
const answer-c = document.getElementById('answer-c')
const answer-d = document.getElementById('answer-d')
const submit = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionE1.innerText = currentQuizData.question
    answer-a.innerText = currentQuizData.a
    answer-b.innerText = currentQuizData.b
    answer-c.innerText = currentQuizData.c
    answer-d.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerN1.forEach(answerN1 => answerN1.checked = false)
}

function getSelected(){
    let answerN1

    answerN1.forEach(answerN1 => {
        if(answerN1.checked){
            answer = answerN1.id
        }
    });
    return answer
}
