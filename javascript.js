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

    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors");

    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock"){
        console.log("user choice: rock");
    }
    else if (userChoice === "paper"){
        console.log("user choice: paper");
    }
    else if (userChoice === "scissors"){
        console.log("user choice: scissors");
    }
    else {
        console.error("not a valid choice");
    }

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

