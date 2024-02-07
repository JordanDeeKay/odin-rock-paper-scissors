function getComputerChoice() {
    const moveOptions = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * moveOptions.length);

    return moveOptions[choice];
}

function getPlayerChoice() {
    let choice = prompt('Rock, Paper, Scissors!');

    return choice;
}

function playRound(computerSelection, playerSelection) {
    let result = '';
    
    if (playerSelection.toUpperCase() === 'ROCK') {
        if (computerSelection.toUpperCase() === 'ROCK') {
            result = "It's a tie! You have both selected Rock!";
        } else if (computerSelection.toUpperCase() === 'PAPER') {
            result = "You lose! Rock loses to Paper!";
        } else if (computerSelection.toUpperCase() === 'SCISSORS') {
            result = "You win! Rock beats Scissors!";
        }
    } else if (playerSelection.toUpperCase() === 'PAPER') {
        if (computerSelection.toUpperCase() === 'ROCK') {
            result = "You win! Paper beats Rock!";
        } else if (computerSelection.toUpperCase() === 'PAPER') {
            result = "It's a tie! You both selected Paper!";
        } else if (computerSelection.toUpperCase() === 'SCISSORS') {
            result = "You lose! Paper loses to Scissors!";
        }
    } else if (playerSelection.toUpperCase() === 'SCISSORS') {
        if (computerSelection.toUpperCase() === 'ROCK') {
            result = "You lose! Scissors loses to Rock!";
        } else if (computerSelection.toUpperCase() === 'PAPER') {
            result = "You win! Scissors beats Paper!";
        } else if (computerSelection.toUpperCase() === 'SCISSORS') {
            result = "It's a tie! You both selected Scissors!";
        }
    }

    return result;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice, playerChoice);

        if (result.includes('win')) {
            playerScore += 1;
        } else if (result.includes('lose')) {
            computerScore += 1;
        }

        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log('Congratulations, you won the match!', '\n', 'Player Score:', playerScore, '\n', 'Computer Score:', computerScore);
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lost the match. Better luck next time!', '\n', 'Player Score:', playerScore, '\n', 'Computer Score:', computerScore);
    } else if (playerScore === computerScore) {
        console.log("What a close match! It's a tie!", '\n', 'Player Score:', playerScore, '\n', 'Computer Score:', computerScore);
    }
}

playGame();