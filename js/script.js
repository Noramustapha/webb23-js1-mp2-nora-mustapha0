let userScore = 0;
let computerScore = 0;
let userName = '';

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', restartGame);

function submitForm() {
  const name = document.getElementById('nameInput').value;
  alert('Hej, ' + name + '!');
}

function startGame() {
  userName = document.getElementById('nameInput').value;
  document.getElementById('nameInput').disabled = true;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  showChoiceImages(userChoice, computerChoice);

  switch (userChoice + computerChoice) {
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      draw(userChoice, computerChoice);
      break;
  }
}

function win(user, computer) {
  userScore++;
  userScore_span.textContent = userScore;
  result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}. You win!</p>`;
  updateRoundStatus(user, 'winningStyles');
  if (userScore === 3) {
    endGame();
    result_div.innerHTML += `<p>Congratulations, ${userName}! You have reached 3 points and won the game!</p>`;
    restartButton.disabled = false;
  }
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.textContent = computerScore;
  result_div.innerHTML = `<p>${convertCase(computer)} beats ${convertCase(user)}${userName}. You lose!</p>`;
  updateRoundStatus(user, 'losingStyles');
  if (computerScore === 3) {
    endGame();
    result_div.innerHTML += `<p>Sorry, ${userName}! The computer has reached 3 points and won the game.</p>`;
    restartButton.disabled = false;
  }
}

function draw(user, computer) {
  result_div.innerHTML = `<p>It's a draw! You both chose ${convertCase(user)}.</p>`;
  updateRoundStatus(user, 'drawingStyles');
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertCase(choice) {
  switch (choice) {
    case 'rock':
      return 'Rock';
    case 'paper':
      return 'Paper';
    case 'scissors':
      return 'Scissors';
    default:
      return '';
  }
}

function showChoiceImages(userChoice, computerChoice) {
  const playerChoiceImg = document.getElementById('player-choice-img');
  const computerChoiceImg = document.getElementById('computer-choice-img');

  playerChoiceImg.src = getChoiceImage(userChoice);
  playerChoiceImg.alt = convertCase(userChoice) + userName;

  computerChoiceImg.src = getChoiceImage(computerChoice);
  computerChoiceImg.alt = convertCase(computerChoice) + 'Computer';
}



function getChoiceImage(choice) {
  switch (choice) {
    case 'rock':
      return '/path/to/jpeg/Rock.svg' ; 
    case 'paper':
      return '/path/to/jpeg/Paper.svg'; 
    case 'scissors':
      return '/path/to/jpeg/Scissors.svg';
    default:
      return '';
  }}


function restartGame() {
  userScore = 0;
  computerScore = 0;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.innerHTML = '';
  restartButton.disabled = true;
  enableButtons();
}

function enableButtons() {
  rock_div.addEventListener('click', rockClickHandler);
  paper_div.addEventListener('click', paperClickHandler);
  scissors_div.addEventListener('click', scissorsClickHandler);
}

function disableButtons() {
  rock_div.removeEventListener('click', rockClickHandler);
  paper_div.removeEventListener('click', paperClickHandler);
  scissors_div.removeEventListener('click', scissorsClickHandler);
}



function updateRoundStatus(choice, statusClass) {
  const roundStatus = document.getElementById(choice);
  roundStatus.classList.add(statusClass);
  setTimeout(() => roundStatus.classList.remove(statusClass), 300);
}

function endGame() {
  rock_div.removeEventListener('click', rockClickHandler);
  paper_div.removeEventListener('click', paperClickHandler);
  scissors_div.removeEventListener('click', scissorsClickHandler);
}

function enableButtons() {
  rock_div.addEventListener('click', rockClickHandler);
  paper_div.addEventListener('click', paperClickHandler);
  scissors_div.addEventListener('click', scissorsClickHandler);
}

function disableButtons() {
  rock_div.removeEventListener('click', rockClickHandler);
  paper_div.removeEventListener('click', paperClickHandler);
  scissors_div.removeEventListener('click', scissorsClickHandler);
}

function rockClickHandler() {
  game('rock');
}

function paperClickHandler() {
  game('paper');
}

function scissorsClickHandler() {
  game('scissors');
}

enableButtons();





