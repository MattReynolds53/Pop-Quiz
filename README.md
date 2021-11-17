```
For this assignment, I decided to make a quiz about Harry Potter. I began by making an array of questions, answer choices, and correct answers. I utilized those arrays to develop a cycle of questions by indexing into the various components of each array. 

When the user clicks the start button, the first question becomes visible, and a 60 second timer begins to count down to 0. For each answer button, I created a separate event listener. If the wrong answer is clicked, 5 seconds would be removed from the timer, and the next question would appear. If the correct answer button is clicked, the user continues on to the next question without a time penalty and adds 1 point to their final score.

Once all five questions have been answered, a new screen is display, revealing the final score and a form to submit initials into the lcoal storage. The total score is out of 5 - 1 point for each correct answer.

To restart or retake the quiz, one must simply refresh the page.
```