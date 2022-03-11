'use strict';

let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  //FUNCTION TO CHANGE THE MESSAGE
  document.querySelector('.message').textContent = message;
};

const displayColor = function (color) {
  //FUNCTION TO CHANGE THE BODY COLOR
  document.querySelector('body').style.backgroundColor = color;
};

const displayWidth = function (width) {
  //FUNCTION TO CHANGE THE NUMBER WIDTH
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  //FUNCTION TO CHANGE THE SCORE
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      score--;

      displayScore(score);
      displayMessage('⛔ Forbidden Movement!!!');
      displayColor('#ae2012');
      displayWidth('15rem');
    } else if (guess === randomNum) {
      score++;
      document.querySelector('.number').textContent = randomNum;

      displayScore(score);
      displayMessage("You're Right!! 🎉");
      displayColor('#2d6a4f');
      displayWidth('30rem');

      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      }
    } else if (guess != randomNum) {
      score--;

      guess > randomNum //TERNARY OPERATOR TO CHANGE THE MESSAGE
        ? displayMessage('⚠️ Try Lower...')
        : displayMessage('⚠️ Try higher...');

      displayColor('#222');
      displayWidth('15rem');
      displayScore(score);
    }
  } else {
    document.querySelector('.message').textContent = '☠️ You Loose!!';
    score--;
    displayScore(score);
    displayWidth('15rem');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  randomNum = Math.trunc(Math.random() * 20 + 1);
  score = 10;
  displayColor('#222');
  displayWidth('15rem');
  displayScore(score);
  document.querySelector('.guess').value = '';
});
