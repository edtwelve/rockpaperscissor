function getComputerChoice () {
    const options = ['paper', 'scissors', 'rock'];
    let ind = Math.floor(Math.random() * 3);
    return options[ind];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "TIED";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beat Paper";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "TIED";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beat Paper";
        } else {
            return "TIED";
        }
    }
}