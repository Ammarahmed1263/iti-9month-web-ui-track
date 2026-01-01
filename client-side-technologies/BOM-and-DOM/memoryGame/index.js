const images = document.getElementsByTagName("img");
const scoreTag = document.getElementById("game-score");
const winnerMessage = document.querySelector(".winner-message");
const moonImage = "images/Moon.gif";
const winnerText = "Congratulations! You've matched all pairs!";

let score = 0;
let itemsCount = images.length;
let answers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let winnerScore = answers.length / 2;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

shuffleArray(answers);
console.log(answers);

let firstCard = null;
let secondCard = null;
let lockedBoard = false;

function onCardClick(index) {
  if (lockedBoard) return;
  if (firstCard == index) return;
  if (!images[index].src.includes(moonImage)) return; // check user hasn't clicked a matched card

  images[index].src = "images/" + answers[index] + ".gif";

  if (firstCard == null) {
    firstCard = index;
    return;
  } else {
    secondCard = index;
    checkMatch();
    console.log("check match passed");
  }
}

function checkMatch() {
  if (answers[firstCard] === answers[secondCard]) {
    score += 1;
    scoreTag.innerHTML = "score: " + score;

    if (score === 6) {
      winnerMessage.innerHTML = winnerText;
      console.log("score success");
    }

    firstCard = null;
    secondCard = null;
  } else {
    lockedBoard = true;
    setTimeout(() => {
      images[firstCard].src = moonImage;
      images[secondCard].src = moonImage;

      firstCard = null;
      secondCard = null;
      lockedBoard = false;
    }, 1000);
  }
}

function resetGame() {
  score = 0;
  scoreTag.innerHTML = "score: " + score;
  firstCard = null;
  secondCard = null;
  lockedBoard = false;
  winnerMessage.innerHTML = "";
  shuffleArray(answers);
  for (let i = 0; i < images.length; i++) {
    images[i].src = moonImage;
  }
}
