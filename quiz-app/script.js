const quizData = [
  {
    question: "What is the capital of India?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Kolkata",
    correct: "c",
  },
  {
    question: "What is the most used programing language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What is the most used framework in 2019?",
    a: "React",
    b: "Angular",
    c: "Vue",
    d: "Node",
    correct: "a",
  },
  {
    question: "What is the most used database in 2019?",
    a: "MongoDB",
    b: "MySQL",
    c: "SQL",
    d: "NoSQL",
    correct: "b",
  },
  {
    question: "What year does Javascript was released?",
    a: "1995",
    b: "1996",
    c: "1997",
    d: "1998",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById(".a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuestion = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;

  currentQuestion++;
}
