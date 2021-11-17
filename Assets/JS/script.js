let timeEl = document.querySelector("#timer");
let mainEl = document.querySelector("timerText");
let secondsLeft = 30;
let startButton = document.querySelector("#startBtn");
let timerInterval;
let totalCorrect = document.getElementById("finalScore");
let totalIncorrect = 0;

// Question bank for quiz
let questions = [
    {
        question: "In which book is Sirius Black introduced?",
        answerChoices: ["The Chamber of Secrets", "The Order of the Phoenix", "The Goblet of Fire", "The Prisoner of Azkaban"],
        correctAnswer: "The Prisoner of Azkaban",
    },
    {
        question: "According to the book, who gives Harry the gillyweed before he enters into the second task of the Triwizard Tournament in the Goblet of Fire?",
        answerChoices: ["Albus Dumbledore", "Dobby the House Elf", "Cedric Diggory", "Neville Longbottom"],
        correctAnswer: "Dobby the House Elf",
    },
    {
        question: "What is the model of the first broom Harry receives ahead of his first quidditch match?",
        answerChoices: ["Firebolt", "Nimbus 2000", "Nimbus 2001", "Nimbus 3000"],
        correctAnswer: "Nimbus 2000",
    },
    {
        question: "What was Sirius Black's nickname?",
        answerChoices: ["Moony", "Wormtail", "Padfoot", "Prongs"],
        correctAnswer: "Padfoot",
    },
    {
        question: "What were the professions of Hermoine's parents?",
        answerChoices: ["Doctors", "Dentists", "Professors", "Entrepreneurs"],
        correctAnswer: "Dentists",
    
    }
]

// Displaying Answer Choices

let currentQuestion = 0;
let question = questions[currentQuestion];

document.querySelector("#question").textContent = questions[currentQuestion].question;
document.querySelector("#btn1").textContent = questions[currentQuestion].answerChoices[0];
document.querySelector("#btn2").textContent = questions[currentQuestion].answerChoices[1];
document.querySelector("#btn3").textContent = questions[currentQuestion].answerChoices[2];
document.querySelector("#btn4").textContent = questions[currentQuestion].answerChoices[3];

// Starting the Quiz

startButton.addEventListener("click", function(){
    clearInterval(timerInterval);
    secondsLeft= 30;
    document.getElementById("startBtn").style.display = "none";
    startQuiz();
    
});

function startQuiz(){
    
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // mainEl.textContent = "You lose!";
            secondsLeft.textContent = "Quiz over. Your answers will no longer count toward your score.";
            // secondsLeft.setAttribute("style", "font-size: 45px");
        }
    
    }, 1000)
}



// Event delegation

let answerChoices = document.querySelector("#answerChoices");

// Listen for any clicks within the img-container div
answerChoices.addEventListener("click", function(event) { 
    let element = event.target;
  console.log(element);
    
    if (element.matches(".button")) {

      let chosenAnswer = parseInt(element.getAttribute("data-value"));
      console.log(question);
      console.log(chosenAnswer)
  
    }

  });

// Taking the Quiz
let questionDisplay = document.querySelector("#question")
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

function nextQuestion() {
    console.log(currentQuestion);

    if (currentQuestion < 5) {
        questionDisplay.textContent = questions[currentQuestion].question;
        btn1.textContent = questions[currentQuestion].answerChoices[0]; 
        btn2.textContent = questions[currentQuestion].answerChoices[1];
        btn3.textContent = questions[currentQuestion].answerChoices[2];
        btn4.textContent = questions[currentQuestion].answerChoices[3];
    } else {
        console.log("No further questions");
        quizComplete();
        // am i missing anything here?

    }
}

btn1.addEventListener("click", function() {
    if (btn1.textContent === questions[currentQuestion].correctAnswer) {
        console.log("Correct answer!");
        totalCorrect++;
        currentQuestion++;
        nextQuestion();
    } else {
        console.log("Wrong answer");
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        totalIncorrect++;
        currentQuestion++;
        nextQuestion();
    }
})

btn2.addEventListener("click", function() {
    if (btn2.textContent === questions[currentQuestion].correctAnswer) {
        console.log("Correct answer!");
        totalCorrect++;
        currentQuestion++;
        nextQuestion();
    } else {
        console.log("Wrong answer");
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        totalIncorrect++;
        currentQuestion++;
        nextQuestion();
    }
})

btn3.addEventListener("click", function() {
    if (btn3.textContent === questions[currentQuestion].correctAnswer) {
        console.log("Correct answer!");
        totalCorrect++;
        currentQuestion++;
        nextQuestion();
    } else {
        console.log("Wrong answer");
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        totalIncorrect++;
        currentQuestion++;
        nextQuestion();
    }
})

btn4.addEventListener("click", function() {
    if (btn4.textContent === questions[currentQuestion].correctAnswer) {
        console.log("Correct answer!");
        totalCorrect++;
        currentQuestion++;
        nextQuestion();
    } else {
        console.log("Wrong answer");
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        totalIncorrect++;
        currentQuestion++;
        nextQuestion();
    }
})

function quizComplete() {
    console.log("The quiz is completed.");
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("finalScore").textContent = "Final Score:" + totalCorrect;
    document.getElementById("finalScore").style.color = "black";
}


  












 //   if (state === "still") {
    //     // Change the data-state attribute's value
    //     // There are two different ways this attribute can be set
    //     element.dataset.state = "animate";
    //     element.setAttribute("data-state", "animate");
  
    //     // Update the image's source to the string being stored in the data-animate attribute
    //     element.setAttribute("src", element.dataset.animate);
    //   } else {
    //     // Change the attributes back to their non-animated values
    //     element.dataset.state = "still";
    //     element.setAttribute("src", element.dataset.still);
    //   }



// Use event delegation activity to figure out how to determine which button was clicked



    // for (let i = 0; i < question[currentQuestion].answers.length; i++) {
    //     const element = questions[currentQuestion].answers[i];
    // }
    