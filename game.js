function getComputerChoice () {
    const options = ['paper', 'scissors', 'rock'];
    let ind = Math.floor(Math.random() * 3);
    return options[ind];
}

function playRound(playerSelection = "",computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let resultado;

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultado = "You Lose! Paper beats Rock"
            console.log(resultado);
        } else if (computerSelection === "scissors") {
            resultado = "You Win! Rock beats Scissors"
            console.log(resultado);
        } else {
            resultado = "TIED";
            console.log(resultado);
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beat Paper");
        } else if (computerSelection === "rock") {
            console.log("You Win! Paper beats Rock");
        } else {
            resultado = "TIED";
            console.log(resultado);
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            resultado = "You lose! Rock beats Scissors";
            console.log(resultado);
        } else if (computerSelection === "paper") {
            resultado = "You Win! Scissors beat Paper";
            console.log(resultado);
        } else {
            resultado = "TIED";
            console.log(resultado);
        }
    }
}

function game () {
    let usuario = prompt("Paper, scissors, rock?");
    for (let i = 1; i <=5; i++) {
        let computerSelection = getComputerChoice();
        playRound(usuario, computerSelection);
    }
}