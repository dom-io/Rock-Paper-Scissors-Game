// Creates the computer's random choice
const computerChoice = function () {
  let randomComputerChoice = Math.floor(Math.random() * 3);
  if (randomComputerChoice == "0") {
    return "rock";
  } else if (randomComputerChoice == "1") {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = function (playerSelectionLower, computerSelection) {
  if (playerSelectionLower === computerSelection) {
    return "It's a draw!";
  } else if (playerSelectionLower == "rock") {
    if (computerSelection == "paper") {
      return "The computer has won! 👎";
    } else {
      return "You have won! 👍";
    }
  } else if (playerSelectionLower == "paper") {
    if (computerSelection == "scissors") {
      return "The computer has won! 👎";
    } else {
      return "You have won! 👍";
    }
  } else if (playerSelectionLower == "scissors") {
    if (computerSelection == "rock") {
      return "The computer has won! 👎";
    } else {
      return "You have won! 👍";
    }
  }
};

const playerSelection = prompt("Choose!");
const playerSelectionLower = playerSelection.toLowerCase();
const computerSelection = computerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelectionLower, computerSelection));

const game = function () {
  for (let i = 0; i < 5; i++) {
    console.log(i + 1);
    if (playRound()) {
    }
  }
};
console.log(game());
