const contain = document.querySelector(".container");
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
contain.style.display = "flex";
contain.style.justifyContent = "space-between";
contain.appendChild(rockButton);
contain.appendChild(paperButton);
contain.appendChild(scissorsButton);

const roundResult = document.querySelector(".round");
const gameResult = document.querySelector(".result");
const scoreResult = document.querySelector(".score");

function getComputerChoice() {

    let computerChoice = parseInt((Math.random() * 3) + 1);

    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else if (computerChoice === 3) {
        computerChoice = "scissors";
    }

    console.log(`computer choice: ${computerChoice}`);

    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", function() {
    playRound("rock",getComputerChoice());
});
paperButton.addEventListener("click", function() {
    playRound("paper",getComputerChoice());
});
scissorsButton.addEventListener("click",function() {
    playRound("scissors", getComputerChoice());
});

function playRound(humanChoice, machineChoice){
    console.log(humanChoice);
    console.log(machineChoice);
    if (humanChoice === machineChoice){
        roundResult.textContent = `Tie, both chose ${humanChoice}`;
    }
    else if (humanChoice === "rock" && machineChoice === "paper"){
        roundResult.textContent = "You lose, paper beats rock";
        computerScore++;
    }
    else if (humanChoice === "rock" && machineChoice === "scissors"){
        roundResult.textContent = "You win, rock beats scissors";
        humanScore++;
    }
    else if (humanChoice === "paper" && machineChoice === "rock"){
        roundResult.textContent = "You win, paper beats rock";
        humanScore++;
    }
    else if (humanChoice === "paper" && machineChoice === "scissors"){
        roundResult.textContent = "You lose, scissors beats paper";
        computerScore++;
    }
    else if (humanChoice === "scissors" && machineChoice === "rock"){
        roundResult.textContent = "You lose, rock beats scissors";
        computerScore++;
    }
    else if (humanChoice === "scissors" && machineChoice === "paper"){
        roundResult.textContent = "You win, scissors beats paper";
        humanScore++;
    }
    scoreResult.textContent = `Your score: ${humanScore}\tComputer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore){
            gameResult.textContent = "You won the game - reload to play again";
        }
        else if (humanScore < computerScore){
            gameResult.textContent = "You lost the game - reload to play again";
        }
        else {
            gameResult.textContent = "You tied the game - reload to play again";
        }
        const allButtons = document.querySelectorAll("button");
        allButtons.forEach((btn) => btn.disabled = true);
    }
}

