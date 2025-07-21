let data = [
  {
    question:
      "  Which keyword is used to declare a variable that cannot be reassigned",
    ans: [
      { text: "const", correct: true },

      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "static", correct: false },
    ],
  },
  {
    question: " Which of the following represents loops in javascript",
    ans: [
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "forEach", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "  Which method is used to insert a new element at the end of an array",
    ans: [
      { text: "Unshift()", correct: false },
      { text: "Pop()", correct: true },
      { text: "Push()", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];

const qusElement = document.getElementById("question");
const ansbt = document.getElementById("answer-button");
const nextbt = document.getElementById("next-bt");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextbt.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = data[currentQuestionIndex]
    let qusNo = currentQuestion + 1
    qusElement.innerHTML = qusNo + "."+ currentQuestion.question

    currentQuestion.ans.forEach(answer =>{
        const button =document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        ansbt.appendChild(button)
    })
}

startQuiz()

function resetState(){
    nextbt.style.display = "none"
    while(ansbt.firstChild){
        ansbt.removeChild(ansbt.firstChild)
    }
}
