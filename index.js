function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.img1').src = `images/dice${randomNumber1}.png`;
  document.querySelector('.img2').src = `images/dice${randomNumber2}.png`;

  const header = document.querySelector('h1');
  if (randomNumber1 > randomNumber2) {
    header.textContent = 'Player 1 Wins!';
  } else if (randomNumber1 < randomNumber2) {
    header.textContent = 'Player 2 Wins! ';
  } else {
    header.textContent = 'Draw!';
  }
}
