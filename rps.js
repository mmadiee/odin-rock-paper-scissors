let humanScore = 0;
let computerScore = 0;

function convertChoice(choice) {
  if (choice == 1) {
    choice = "rock";
  } else if (choice == 2) {
    choice = "paper";
  } else if (choice == 3) {
    choice = "scissor";
  } else {
    choice = "Invalid input";
  }
  return choice;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  return convertChoice(choice);
}

function getHumanChoice() {
  let choice = prompt(
    "1 = Rock \n2 = Paper \n3 = Scissor \n\nChoose: 1, 2, or 3?"
  );

  return convertChoice(choice);
}

function playRound(humanChoice, computerChoice) {
  let draw = "It's a draw! ";
  let computerWins = "Computer wins. ";
  let humanWins = "You win. ";
  let invalidRound = "Invalid Round ";

  if (humanChoice == computerChoice) {
    console.log(draw);
  }

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      console.log(computerWins + "You: " + humanScore + "    Computer: " + computerScore);
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      console.log(humanWins + "You: " + humanScore + "    Computer: " + computerScore);
    }
  }

  if (humanChoice == "rock") {
    if (computerChoice == "scissor") {
      humanScore++;
      console.log(humanWins + "You: " + humanScore + "    Computer: " + computerScore);
    }
  }

  if (humanChoice == "scissor") {
    if (computerChoice == "rock") {
      computerScore++;
      console.log(computerWins + "You: " + humanScore + "    Computer: " + computerScore);
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "scissor") {
      computerScore++;
      console.log(computerWins + "You: " + humanScore + "    Computer: " + computerScore);
    }
  }

  if (humanChoice == "scissor") {
    if (computerChoice == "paper") {
      humanScore++;
      console.log(humanWins + "You: " + humanScore + "    Computer: " + computerScore);
    }
  }

  if (humanChoice == "Invalid input" || computerChoice == "Invalid input") {
    console.log(invalidRound);
  }
}

function playGame() {
  for (i = 1; i < 6; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("ROUND " + i);
    console.log("You: " + humanChoice);
    console.log("Computer: " + computerChoice);
    playRound(humanChoice, computerChoice);
  }
  console.log("SCORE: \n\nYou: " + humanScore + "\nComputer: " + computerScore);
  if (humanScore > computerScore) {
    console.log("Congrats you win!");
  } else if (computerScore > humanScore) {
    console.log("The computer beat you :(");
  } else if (humanScore == computerScore) {
    console.log("Whelp, it's a tie.");
  }
}

playGame();
