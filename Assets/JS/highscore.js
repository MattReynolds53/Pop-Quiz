var scoreContainer = document.querySelector('.highScore')

var storage = JSON.parse(localStorage.getItem('highscoreHistory'))

if (storage === null) {
    scoreContainer.textContent = 'No HighScores'
} else {
    scoreContainer.textContent = ''
    for (var i = 0; i < storage.length; i ++) {
        var scores = document.createElement('h3')
        scores.textContent = 'Initials: ' + storage[i].initials + ' --------- Score: ' + storage[i].currentScore
        scoreContainer.append(scores)
    }
}