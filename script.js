const questions = [
    { question: "1)What is the capital of France?", answer: "Paris" },
    { question: "2)What is 5 + 3?", answer: "8" },
    { question: "3)Who wrote 'Hamlet'?", answer: "William Shakespeare" },
    { question: "4)What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    { question: "5)Which planet is known as the Red Planet?", answer: "my name is noman khan orakzai i am student of computer science" },
    { question: "6)What is the speed of light?", answer: "299,792 km per second" }
    
];

let currentQuestion = {};

// Function to generate a new question
function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("answer").style.display = "none";
}

// Function to show the answer
function showAnswer() {
    if (currentQuestion.answer) {
        const answerElement = document.getElementById("answer");
        answerElement.innerText = "Answer: " + currentQuestion.answer;
        answerElement.style.display = "block";
    }
}

// Generate the first question on page load
generateQuestion();