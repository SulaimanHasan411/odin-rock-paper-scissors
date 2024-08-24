let getComputerChoice = parseInt((Math.random() * 3) + 1);


if (getComputerChoice === 1) {
    getComputerChoice = "rock";
}
else if (getComputerChoice === 2) {
    getComputerChoice = "paper";
}
else if (getComputerChoice === 3) {
    getComputerChoice = "scissors";
}

let getUserChoice = prompt("Enter rock, paper, or scissors");

getUserChoice = getUserChoice.toLowerCase();

if (getUserChoice === "rock"){
    console.log("user choice: rock");
}
else if (getUserChoice === "paper"){
    console.log("user choice: paper");
}
else if (getUserChoice === "scissors"){
    console.log("user choice: scissors");
}
else {
    console.error("not a valid choice");
}