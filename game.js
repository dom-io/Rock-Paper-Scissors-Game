let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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

// Plays one round
const playRound = function (playerSelection, computerSelection) {
  playerSelection = prompt("Choose Rock, Paper, or Scissors!");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerChoice();
  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    return "You have won! 👍";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore++;
    return "The computer has won! 👎";
  }
};

// Loops through the game 5 times
const game = function () {
  for (let i = 1; i < 6; i++) {
    console.log(playRound());
  }
};

game();
console.log(playerScore);
console.log(computerScore);
