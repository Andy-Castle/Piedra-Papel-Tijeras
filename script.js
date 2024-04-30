let humanScore = 0;
let ComputerScore = 0;
let totalRound = 5;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "sycissors";
  }
}

function getUserChoice() {
  let userChoice = parseInt(
    prompt("Choice 1 for ROCK, 2 for PAPER or 3 for SYCISSORS")
  );
  if (userChoice == 1) {
    return "rock";
  } else if (userChoice == 2) {
    return "paper";
  } else {
    return "sycissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("TIE");
    return "TIE";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    humanScore++;
    console.log("You win");
    return "You win";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("You win");
    return "You win";
  } else if (humanChoice == "sycissors" && computerChoice == "paper") {
    humanScore++;
    console.log("You win");
    return "You win";
  } else {
    ComputerScore++;
    console.log("Computer win");
    return "Computer win";
  }
}

function playGame() {
  const humanSelection = getUserChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

function totalScore() {
  console.log("User Score: " + humanScore);
  console.log("Computer Score: " + ComputerScore);
}

for (let i = 1; i <= totalRound; i++) {
  playGame();
}

if (totalRound == 5) {
  totalScore();
}
