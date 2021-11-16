let timeEl = document.querySelector("#timer");
let mainEl = document.querySelector("timerText");
let secondsLeft = 60;
let startButton = document.querySelector("#startBtn");
let timerInterval;

startButton.addEventListener("click", function(){
    clearInterval(timerInterval);
    secondsLeft= 60;

    startTimer();
});

function startTimer(){
    
    timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            mainEl.textContent = "You lose!";
            mainEl.setAttribute("style", "font-size: 45px");
        }
    
    }, 1000)
}
  

let questions = [
    {
        question: "In which book is Sirius Black introduced?",
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

document.querySelector("#question").textContent = questions[currentQuestion].question;
document.querySelector("#btn1").textContent = questions[currentQuestion].answers[0];
document.querySelector("#btn2").textContent = questions[currentQuestion].answers[1];
document.querySelector("#btn3").textContent = questions[currentQuestion].answers[2];
document.querySelector("#btn4").textContent = questions[currentQuestion].answers[3];

// let correct = 0;
// let incorrect = 0;

// if (currentQuestion[0]) {
//     if (("#btn")on("click)")){ //or should i switch this to answer[3] === true?
//         correct++;
//     } else {
//         incorrect++;
//     }
// }

// if (currentQuestion[1]) {
//     if (answer[1]){
//         correct++;
//     } else {
//         incorrect++;
//     }
// }

// if (currentQuestion[2]) {
//     if (answer[1]){
//         correct++;
//     } else {
//         incorrect++;
//     }
// }

// if (currentQuestion[3]) {
//     if (answer[2]){
//         correct++;
//     } else {
//         incorrect++;
//     }
// }

// if (currentQuestion[4]) {
//     if (answer[1]){
//         correct++;
//     } else {
//         incorrect++;
//     }
// }



    // for (let i = 0; i < question[currentQuestion].answers.length; i++) {
    //     const element = questions[currentQuestion].answers[i];
    // }
    