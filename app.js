const player1 = document.getElementById("player-1");
const score = document.getElementById("score");
const dice = document.getElementById("dice");
const button = document.getElementById("button");
const diceList = ['<i class="bi bi-dice-1"></i>', '<i class="bi bi-dice-2"></i>', '<i class="bi bi-dice-3"></i>', '<i class="bi bi-dice-4"></i>', '<i class="bi bi-dice-5"></i>', '<i class="bi bi-dice-6"></i>'];
const icons = ['<i class="bi bi-trophy"></i>', '<i class="bi bi-emoji-frown"></i>'];
let finalScore = 0;

button.addEventListener("click", () => {
  if (button.innerHTML == "start again") {
    player1.innerHTML = "player 1";
    score.innerHTML = 0;
    dice.innerHTML = "";
    button.innerHTML = "roll the dice";
    finalScore = 0;
  } else {
    let diceId = Math.floor(Math.random() * 6);
    let currentDice = diceList[diceId];
    let currentScore = diceId + 1;
    dice.innerHTML = `${currentDice}`;
    finalScore += currentScore;
    if (currentScore == 1) {
      player1.innerHTML = `you lost! ${icons[1]}`;
      score.innerHTML = `${finalScore - 1}`;
      button.innerHTML = "start again";
    } else if (finalScore >= 25) {
      player1.innerHTML = `you won! ${icons[0]}`;
      score.innerHTML = `${finalScore}`;
      button.innerHTML = "start again";
    } else {
      score.innerHTML = `${finalScore}`;
    }
  }
});