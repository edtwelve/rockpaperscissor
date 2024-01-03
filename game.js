function getComputerChoice () {
    const options = ['paper', 'scissors', 'rock'];
    let ind = Math.floor(Math.random() * 3);
    return options[ind];
}

const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const reset = document.querySelector('#reset');

let usuario;
let defeat = 0, victory = 0, tie = 0;

// Botones
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
    let anuncio = document.querySelector('#announcement');
    let victorias = document.querySelector('#victorias');
    let derrotas = document.querySelector('#derrotas');
    let empates = document.querySelector('#empates');

    reset.addEventListener('click', () => {
        defeat = 0, victory = 0, tie = 0;
        derrotas.textContent = `Defeats: `;
        victorias.textContent = `Victories: `;
        empates.textContent = `Ties: `;
        anuncio.textContent = "RESTARTED";
        paper.disabled = false;
        scissors.disabled = false;
        rock.disabled = false;
    })

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            defeat++;
            anuncio.textContent = "You Lose! Paper beats Rock";
            derrotas.textContent = `Defeats: ${defeat}`;
        } else if (computerSelection === "scissors") {
            victory++;
            anuncio.textContent = "You Win! Rock beats Scissors"
            victorias.textContent = `Victories: ${victory}`;
        } else {
            tie++;
            anuncio.textContent = "TIED";
            empates.textContent = `Ties: ${tie}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            defeat++;
            anuncio.textContent = "You lose! Scissors beat Paper";
            derrotas.textContent = `Defeats: ${defeat}`;
        } else if (computerSelection === "rock") {
            victory++;
            anuncio.textContent = "You Win! Paper beats Rock";
            victorias.textContent = `Victories: ${victory}`;
        } else {
            tie++;
            anuncio.textContent = "TIED";
            empates.textContent = `Ties: ${tie}`;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            defeat++;
            anuncio.textContent = "You lose! Rock beats Scissors";
            derrotas.textContent = `Defeats: ${defeat}`;
        } else if (computerSelection === "paper") {
            victory++;
            anuncio.textContent = "You Win! Scissors beat Paper";
            victorias.textContent = `Victories: ${victory}`;
        } else {
            tie++;
            anuncio.textContent = "TIED";
            empates.textContent = `Ties: ${tie}`;
        }
    }

    if (defeat === 5) {
        anuncio.textContent = "You lose!";
        paper.disabled = true;
        scissors.disabled = true;
        rock.disabled = true;
    } else if (victory === 5) {
        paper.disabled = true;
        scissors.disabled = true;
        rock.disabled = true;
    }

}

/* function game () {
    let usuario = prompt("Paper, scissors, rock?");
    for (let i = 1; i <=5; i++) {
        let computerSelection = getComputerChoice();
        playRound(usuario, computerSelection);
    }
} */