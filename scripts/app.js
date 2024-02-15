// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // stop the game when player press 'Esc'
  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setElementValueById("current-score", updatedScore);
    // -----------------------------------
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // currentScoreElement.innerText = newScore;
    // const newScore = currentScore + 1;

    removerBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
    // ----------------------------------
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1
    // currentLifeElement.innerText = newLife;
  }
}
// capture keypress
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();
  //   set randomly generated alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  //   set background color
  setBackgroundById(alphabet);
}

function play() {
  // hide everything show only the playground
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");
  continueGame();

  // reset score and life
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  // update score
  const lastScore = getTextElementValueById("current-score");
  setElementValueById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  removerBackgroundColorById(currentAlphabet);
}
