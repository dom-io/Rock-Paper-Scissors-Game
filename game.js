let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const resetBtn = document.querySelector('.reset-btn');
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const msgElement = document.querySelector('.round-msg');
let outcome = '';

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
    outcome = "It's a draw! 👌";
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    playerScore++;
    outcome = 'You have won! 👍';
  } else if (
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')
  ) {
    computerScore++;
    outcome = 'The computer has won! 👎';
  }
};

// Loops through the game 5 times
// const game = function () {
//   for (let i = 1; i < 6; i++) {
//     console.log(playRound());
//   }
// };

// game();

rockBtn.addEventListener('click', () => clickFunction('rock'));
paperBtn.addEventListener('click', () => clickFunction('paper'));
scissorsBtn.addEventListener('click', () => clickFunction('scissors'));

const updateRoundMsg = function (playRound) {
  if (outcome == "It's a draw! 👌") {
    msgElement.textContent = "It's a draw! 👌";
  } else if (outcome == 'You have won! 👍') {
    msgElement.textContent = 'You have won! 👍';
  } else if (outcome == 'The computer has won! 👎') {
    msgElement.textContent = 'The computer has won! 👎';
  }
};

const resetGame = function () {
  playerScore = 0;
  computerScore = 0;
  msgElement.textContent = '🔥 Choose your hand 🔥';
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  document.querySelector('.rock-btn').disabled = false;
  document.querySelector('.paper-btn').disabled = false;
  document.querySelector('.scissors-btn').disabled = false;
};

const gameOver = function () {
  if (playerScore === 5 && computerScore !== 5) {
    msgElement.textContent = 'The game is over! You win! 🏆';
    document.querySelector('.rock-btn').disabled = true;
    document.querySelector('.paper-btn').disabled = true;
    document.querySelector('.scissors-btn').disabled = true;
  } else if (playerScore !== 5 && computerScore === 5) {
    msgElement.textContent = 'The game is over! You lose! ☠';
    document.querySelector('.rock-btn').disabled = true;
    document.querySelector('.paper-btn').disabled = true;
    document.querySelector('.scissors-btn').disabled = true;
  }
};

resetBtn.addEventListener('click', () => resetGame());

function clickFunction(playerSelection) {
  if (playerScore < 5 || computerScore < 5) {
    const computerSelection = computerChoice;
    playRound(playerSelection, computerSelection);
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    updateRoundMsg();
    gameOver();
  }
}
