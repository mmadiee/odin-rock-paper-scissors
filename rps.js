let humanScore = 0;
let computerScore = 0;
let round = 1;

function convertChoice(choice) {
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else if (choice == 3) {
    return "scissor";
  } else {
    return "Invalid input";
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  return convertChoice(choice);
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultBox = document.getElementById('result-box');
  resultBox.innerHTML = `You chose: ${humanChoice}<br>Computer chose: ${computerChoice}<br>`;

  if (humanChoice == computerChoice) {
    resultBox.innerHTML += "It's a draw!";
  } else if ((humanChoice == "rock" && computerChoice == "scissor") ||
             (humanChoice == "paper" && computerChoice == "rock") ||
             (humanChoice == "scissor" && computerChoice == "paper")) {
    humanScore++;
    resultBox.innerHTML += "You win this round!";
  } else {
    computerScore++;
    resultBox.innerHTML += "Computer wins this round!";
  }

  updateScores();
  checkWinner();
}

function updateScores() {
  document.getElementById('human-score').innerText = humanScore;
  document.getElementById('computer-score').innerText = computerScore;
  document.getElementById('round').innerText = round++;
}

function checkWinner() {
  if (humanScore === 5) {
    alert("Congrats, you win the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("The computer beat you :(");
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 1;
  updateScores();
  document.getElementById('result-box').innerHTML = "";
}
