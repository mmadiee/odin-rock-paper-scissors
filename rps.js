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
  const computerChoice = convertChoice(choice);

  document.querySelectorAll('.btn-computer').forEach(button => {
    button.classList.remove('highlight');
  });

  if (computerChoice === "rock") {
    document.getElementById('computer-rock').classList.add('highlight');
  } else if (computerChoice === "paper") {
    document.getElementById('computer-paper').classList.add('highlight');
  } else if (computerChoice === "scissor") {
    document.getElementById('computer-scissor').classList.add('highlight');
  }

  return computerChoice;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultBox = document.getElementById('result-box');

  if (humanChoice == computerChoice) {
    resultBox.textContent = "It's a draw!";
  } else if ((humanChoice == "rock" && computerChoice == "scissor") ||
             (humanChoice == "paper" && computerChoice == "rock") ||
             (humanChoice == "scissor" && computerChoice == "paper")) {
    humanScore++;
    resultBox.textContent = "You win this round!";
  } else {
    computerScore++;
    resultBox.textContent = "Computer wins this round!";
  }

  updateScores();
  checkWinner();
}

function updateScores() {
  document.getElementById('human-score').textContent = humanScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('round').textContent = round++;
}

function checkWinner() {
  const resultBox = document.getElementById('result-box');
  if (humanScore === 5) {
    resultBox.textContent = "Congrats, you win the game!";
    setTimeout(() => {
      alert("Congrats, you win the game!");
      resetGame();
    }, 100); // Short delay to allow UI update
  } else if (computerScore === 5) {
    resultBox.textContent = "The computer beat you :(";
    setTimeout(() => {
      alert("The computer beat you :(");
      resetGame();
    }, 100); // Short delay to allow UI update
  }
}


function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 1;
  updateScores();
  document.querySelectorAll('.btn-computer').forEach(button => {
    button.classList.remove('highlight');
  });
  document.getElementById('result-box').textContent = "START";
}
