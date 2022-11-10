let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const msgElement = document.querySelector('.round-msg');

// Creates the computer's random choice
const computerChoice = function () {
  let randomComputerChoice = Math.floor(Math.random() * 3);
  if (randomComputerChoice == '0') {
    return 'rock';
  } else if (randomComputerChoice == '1') {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// Plays one round
const playRound = function (playerSelection, computerSelection) {
  // playerSelection = prompt('Choose Rock, Paper, or Scissors!');
  // playerSelection = playerSelection.toLowerCase();
  computerSelection = computerChoice();
  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    playerScore++;
    return 'You have won! 👍';
  } else if (
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')
  ) {
    computerScore++;
    return 'The computer has won! 👎';
  }
};

// Loops through the game 5 times
// const game = function () {
//   for (let i = 1; i < 6; i++) {
//     console.log(playRound());
//   }
// };

// game();

// Restart game TO DO

rockBtn.addEventListener('click', () => clickFunction('rock'));
paperBtn.addEventListener('click', () => clickFunction('paper'));
scissorsBtn.addEventListener('click', () => clickFunction('scissors'));

function clickFunction(playerSelection) {
  if (playerScore <= 5 || computerScore <= 5) {
    const computerSelection = computerChoice;
    playRound(playerSelection, computerSelection);
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
  }
}
