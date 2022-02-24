const quizData = [
    {
        question: "what is 6 multiply by 4",
        a: "12",
        b: "24",
        c: "16",
        d: "20",
        answer: "b"
    },
    {
        question: "what is 6 multiply by 6",
        a: "36",
        b: "34",
        c: "26",
        d: "40",
        answer: "a"
    },
    {
        question: "what is 7 multiply by 8",
        a: "42",
        b: "54",
        c: "56",
        d: "60",
        answer: "c"
    },
    {
        question: "what is 9 multiply by 5",
        a: "42",
        b: "45",
        c: "46",
        d: "54",
        answer: "b"
    },
    {
        question: "what is 6 multiply by 3",
        a: "12",
        b: "14",
        c: "16",
        d: "18",
        answer: "d"
    }

]

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0
let answer = undefined

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer")

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            return answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
        
    if (answer) {
        currentQuiz ++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            alert("you've finished yey!")
        }
    }
})