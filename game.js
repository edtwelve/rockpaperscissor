function getComputerChoice () {
    const options = ['paper', 'scissors', 'rock'];
    let ind = Math.floor(Math.random() * 3);
    return options[ind];
}

const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');

let usuario;

paper.addEventListener('click', () => {
    usuario = "paper";
    /* console.log(usuario); */
    playRound(usuario, getComputerChoice());
});

scissors.addEventListener('click', () => {
    usuario = "scissors";
    /* console.log(usuario); */
    playRound(usuario, getComputerChoice());
});

rock.addEventListener('click', () => {
    usuario = "rock";
    /* console.log(usuario); */
    playRound(usuario, getComputerChoice());
});


function playRound(playerSelection = "",computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let anuncio;

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            anuncio = "You Lose! Paper beats Rock"
            console.log(anuncio);
        } else if (computerSelection === "scissors") {
            anuncio = "You Win! Rock beats Scissors"
            console.log(anuncio);
        } else {
            anuncio = "TIED";
            console.log(anuncio);
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beat Paper");
        } else if (computerSelection === "rock") {
            console.log("You Win! Paper beats Rock");
        } else {
            anuncio = "TIED";
            console.log(anuncio);
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            anuncio = "You lose! Rock beats Scissors";
            console.log(anuncio);
        } else if (computerSelection === "paper") {
            anuncio = "You Win! Scissors beat Paper";
            console.log(anuncio);
        } else {
            anuncio = "TIED";
            console.log(anuncio);
        }
    }
}

/* function game () {
    let usuario = prompt("Paper, scissors, rock?");
    for (let i = 1; i <=5; i++) {
        let computerSelection = getComputerChoice();
        playRound(usuario, computerSelection);
    }
} */