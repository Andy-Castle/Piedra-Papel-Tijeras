let humanScore = 0;
let ComputerScore = 0;
let totalRound = 5;
let arrayUserSelections = [];
let arrayComputerChoice = [];

const buttonChoices = document.querySelectorAll("button");

const userSelections = document.querySelector("#userSelections");
const results = document.querySelector("#results");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    arrayComputerChoice.push("rock");
    return "rock";
  } else if (randomNumber == 2) {
    arrayComputerChoice.push("paper");
    return "paper";
  } else {
    arrayComputerChoice.push("scissors");
    return "scissors";
  }
}

function getUserChoice() {
  buttonChoices.forEach((select) => {
    select.addEventListener("click", () => {
      if (select.id == "rock") {
        arrayUserSelections.push("rock");
        userSelections.textContent = arrayUserSelections;
        alert("Rock selected");
        return "rock";
      } else if (select.id == "paper") {
        arrayUserSelections.push("paper");
        userSelections.textContent = arrayUserSelections;
        alert("Paper selected");
        return "paper";
      } else {
        arrayUserSelections.push("scissors");
        userSelections.textContent = arrayUserSelections;
        alert("Scissors selected");
        return "scissors";
      }
    });
  });
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "TIE";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    humanScore++;
    return "You win";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "You win";
  } else if (humanChoice == "sycissors" && computerChoice == "paper") {
    humanScore++;
    return "You win";
  } else {
    ComputerScore + 1;
    return "Computer win";
  }
}

function playGame() {
  const humanSelection = getUserChoice();

  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

function totalScore() {
  results.innerHTML = `<p>User Score: ${humanScore}</p>\n
  <p>Computer Score: ${ComputerScore}</p>`;
}

playGame();
// for (let i = 1; i <= totalRound; i++) {
//   playGame();
// }

if (totalRound == 5) {
  totalScore();
}
