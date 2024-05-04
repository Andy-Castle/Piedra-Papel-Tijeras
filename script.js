//Primero debo dejar que el jugador elija 5 opciones
//luego de que haya elegido las 5 opciones los botones se deshabitalaran
//luego la computadora eligira 5 opciones y las pondra en el array
//luego se realizara las peleas
//y al final se mostrara el resultado

let humanScore = 0;
let ComputerScore = 0;
let totalRound = 5;
let arrayUserSelections = [];
let arrayComputerChoice = [];

const userSelections = document.querySelector("#userSelections");
const results = document.querySelector("#results");

const buttonChoice = document.querySelectorAll("button");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    arrayComputerChoice.push("rock");
  } else if (randomNumber == 2) {
    arrayComputerChoice.push("paper");
  } else {
    arrayComputerChoice.push("scissors");
  }
}

function fiveComputerChoice() {
  for (let i = 0; i < totalRound; i++) {
    getComputerChoice();
  }
}

function disabledButtons() {
  buttonChoice.forEach((button) => {
    button.setAttribute("disabled", true);
    button.classList.remove("hover");
  });
}

function getUserChoiceToStart() {
  let selectionsMade = 0;
  buttonChoice.forEach((button) => {
    button.addEventListener("click", () => {
      if (
        button.value === "rock" ||
        button.value === "paper" ||
        button.value === "scissors"
      ) {
        arrayUserSelections.push(button.value);
        console.log(arrayUserSelections);
        alert(`You select ${button.value}`);
        selectionsMade++;
        userSelections.textContent = arrayUserSelections;
        if (selectionsMade === 5) {
          disabledButtons();
          fiveComputerChoice();
          playRound();
          totalScore();
          setTimeout(() => {
            restartGame();
          }, 7000);
        }
      }
    });
  });
}

function playRound() {
  for (let i = 0; i < totalRound; i++) {
    if (arrayUserSelections[i] === arrayComputerChoice[i]) {
    } else if (
      (arrayUserSelections[i] === "rock" &&
        arrayComputerChoice[i] === "scissors") ||
      (arrayUserSelections[i] === "paper" && arrayComputerChoice[i] === "rock") ||
      (arrayUserSelections[i] === "scissors" && arrayComputerChoice[i] === "paper")
    ) {
      humanScore++;
    } else {
      ComputerScore++;
    }
  }
}

function totalScore() {
  results.innerHTML = `<p>User Score: ${humanScore}</p>\n
  <p>Computer Score: ${ComputerScore}</p>\n
  <p>The game will restart in a few seconds...</p>`;
}

function restartGame() {
  window.location.reload();
}

getUserChoiceToStart();
