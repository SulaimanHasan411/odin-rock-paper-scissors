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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, machineChoice){
        if (humanChoice === machineChoice){
            console.log(`Tie, both chose ${humanChoice}`);
        }
        else if (humanChoice === "rock" && machineChoice === "paper"){
            console.log("You lose, paper beats rock");
            computerScore++;
        }
        else if (humanChoice === "rock" && machineChoice === "scissors"){
            console.log("You win, rock beats scissors");
            humanScore++;
        }
        else if (humanChoice === "paper" && machineChoice === "rock"){
            console.log("You win, paper beats rock");
            humanScore++;
        }
        else if (humanChoice === "paper" && machineChoice === "scissors"){
            console.log("You lose, scissors beats paper");
            computerScore++;
        }
        else if (humanChoice === "scissors" && machineChoice === "rock"){
            console.log("You lose, rock beats scissors");
            computerScore++;
        }
        else if (humanChoice === "scissors" && machineChoice === "paper"){
            console.log("You win, scissors beats paper");
            humanScore++;
        }
        console.log(`Your score: ${humanScore}\tComputer score: ${computerScore}`)
    }

    playRound(getUserChoice(),getComputerChoice());
    playRound(getUserChoice(),getComputerChoice());
    playRound(getUserChoice(),getComputerChoice());
    playRound(getUserChoice(),getComputerChoice());
    playRound(getUserChoice(),getComputerChoice());

    if (humanScore > computerScore){
        console.log("You won the game");
    }
    else if (humanScore < computerScore){
        console.log("You lost the game");
    }
    else {
        console.log("You tied the game");
    }

}