let getComputerChoice = parseInt((Math.random() * 3) + 1);

console.log(getComputerChoice)

if (getComputerChoice === 1) {
    getComputerChoice = "rock"
}
else if (getComputerChoice === 2) {
    getComputerChoice = "paper"
}
else if (getComputerChoice === 3) {
    getComputerChoice = "scissors"
}

console.log(getComputerChoice)