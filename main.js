let computerScore = 0;
let playerScore = 0;


const getComputerChoice = () => {
    let arrOfChoices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomChoices];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'its a tie you both picked rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'its a tie you both picked paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'its a tie you both picked scisssors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'you lost! paper covers rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'you won! rock crushes scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'you won! paper covers rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'you lost! scissors cuts paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'you lost! rock crushes scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'you won! scissors cuts paper'
    }
}


const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('enter the either rock, paper or scissors').toLowerCase();
        const computerSelection = getComputerChoice ();
        playRound(playerSelection, computerSelection);
    }

    if(playerScore > computerScore) {
        return 'congrats you beat the computer, genius!!!'
    } else if (playerScore < computerScore) {
        return 'Oops!!! you got beat by the computer, get more practice'
    } else {
        return 'its a tie'
    }
}

console.log(playGame())
