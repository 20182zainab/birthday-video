function openCard(card) {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(c => c.classList.remove('open'));
  card.classList.add('open');
}

// Confetti animation
const confettiCount = 100;
const confettiColors = ['#FFC107', '#FF5722', '#4CAF50', '#2196F3', '#E91E63'];

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
  confetti.style.animationDelay = Math.random() * 5 + 's';
  confetti.style.width = confetti.style.height = 5 + Math.random() * 7 + 'px';
  document.body.appendChild(confetti);

  confetti.addEventListener('animationend', () => {
    confetti.remove();
    createConfettiPiece();
  });
}

for (let i = 0; i < confettiCount; i++) {
  createConfettiPiece();
}

// Balloon floating animation
const balloonCount = 10;
const balloonColors = ['#FF4081', '#3F51B5', '#00BCD4', '#8BC34A', '#FFC107'];

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 5 + Math.random() * 5 + 's';
  balloon.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(balloon);

  balloon.addEventListener('animationend', () => {
    balloon.remove();
    createBalloon();
  });
}

for (let i = 0; i < balloonCount; i++) {
  createBalloon();
}
