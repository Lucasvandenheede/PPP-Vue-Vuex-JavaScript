'use strict';

let hiddenNumber = Math.trunc(Math.random() * 50) + 1;
let scoreValue = 50;
let highscoreValue = 0;
console.log('Hidden number:', hiddenNumber);

const showInfoText = infoText => {
  document.querySelector('.info-text').textContent = infoText;
};

document.querySelector('.guess').addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.input-number').value);

  if (!inputValue) {
    showInfoText('There is no input value!');
  } else if (inputValue === hiddenNumber) {
    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      document.querySelector('.highscore').textContent = highscoreValue;
    }
    showInfoText('Great! You found the number');
    document.querySelector('.label-number').textContent = hiddenNumber;
    document.querySelector('.label-number').style.backgroundColor = '#00EB1D';
    document.querySelector('.label-number').style.scale = '1.3';
  }
  // Wrong input
  else if (inputValue !== hiddenNumber) {
    if (scoreValue > 1) {
      showInfoText(
        `No! Number is too ${inputValue > hiddenNumber ? 'HIGH' : 'LOW'}!`
      );
      scoreValue--;
      document.querySelector('.value-score').textContent = scoreValue;
    } else {
      document.querySelector('.value-score').textContent = 0;
      showInfoText('GAME OVER!');
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  scoreValue = 50;
  hiddenNumber = Math.trunc(Math.random() * 50) + 1;
  console.log('Hidden number:', hiddenNumber);

  showInfoText("Let's enter a number...");
  document.querySelector('.value-score').textContent = scoreValue;
  document.querySelector('.label-number').textContent = '?';
  document.querySelector('.input-number').textContent = '';
  document.querySelector('.label-number').style.backgroundColor = '#DDD';
  document.querySelector('.label-number').style.scale = '1';
});
