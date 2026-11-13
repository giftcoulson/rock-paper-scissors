console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}



function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:");
    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It is a tie");
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")

        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`); humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`); computerScore++;
        }


    }
    let humanSelection;
    let computerSelection;

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log("Final human score:", humanScore);
    console.log("Final computer score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();

