const quizData = [
    {
        question: "1) What is the capital of India?",
        a: "Chennai",
        b: "Mumbai",
        c: "Delhi",
        d: "Biharyaa",
        correct: "c",
    },
    {
        question: "2) Who is the President of the USA?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Barack Obama",
        d: "George Bush",
        correct: "b",
    },
    {
        question: "3) What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "4) What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5) Who is the father of computer?",
        a: "Charles Babbage",
        b: "Guido Van Rossum",
        c: "Albert Einstein",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "6) Who is the president of India?",
        a: "Venkaiah Naidu",
        b: "Narendre Modi",
        c: "Droupadi Murmu",
        d: "A.P.J Abdul Kalam",
        correct: "c",
    },
    {
        question: "7) When India got independence?",
        a: "1945",
        b: "1939",
        c: "1980",
        d: "1947",
        correct: "d",
    },
    {
        question: "8) CPU stands for?",
        a: "Control Processing Unit",
        b: "Central Processing Unit",
        c: "Central Program Unit",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "9) What is the brain of the computer?",
        a: "CPU",
        b: "Monitor",
        c: "Keyboard",
        d: "Mouse",
        correct: "a",
    },
    {
        question: "4) RAM stands for?",
        a: "Run Access Memory",
        b: "Read Access Memory",
        c: "Random Access Memory",
        d: "Random Allocation Memory",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
