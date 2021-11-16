let quizTimer = document.querySelector("#timer");

let questions = [
    {
        question: "In whih book is Sirius Black introduced?",
        answers: ["The Chamber of Secrets", "The Order of the Phoenix", "The Goblet of Fire", "The Prisoner of Azkaban"],
        correctAnswer: "The Prisoner of Azkaban",
    },
    {
        question: "According to the book, who gives Harry the gillyweed before he enters into the second task of the Triwizard Tournament in the Goblet of Fire?",
        answers: ["Albus Dumbledore", "Dobby the House Elf", "Cedric Diggory", "Neville Longbottom"],
        correctAnswer: "Dobby the House Elf",
    },
    {
        question: "What is the model of the first broom Harry receives ahead of his first quidditch match?",
        answers: ["Firebolt", "Nimbus 2000", "Nimbus 2001", "Nimbus 3000"],
        correctAnswer: "Nimbus 2000",
    },
    {
        question: "What was Sirius Black's nickname?",
        answers: ["Moony", "Wormtail", "Padfoot", "Prongs"],
        correctAnswer: "Nimbus 2000",
    },
    {
        question: "What were the professions of Hermoine's parents?",
        answers: ["Dentists", "Doctors", "Professors", "Entrepreneurs"],
        correctAnswer: "Nimbus 2000",
    
    }
]


let currentQuestion = 0;
const question = questions[currentQuestion];

document.querySelector("#question").textContent = question[currentQuestion].question;
document.querySelector("#btn1").textContent = question[currentQuestion].answers[0];
document.querySelector("#btn2").textContent = question[currentQuestion].answers[1];
document.querySelector("#btn3").textContent = question[currentQuestion].answers[2];
document.querySelector("#btn4").textContent = question[currentQuestion].answers[3];

    // for (let i = 0; i < question[currentQuestion].answers.length; i++) {
    //     const element = questions[currentQuestion].answers[i];
    // }
    