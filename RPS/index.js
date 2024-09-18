function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


function getHumanChoice() {
    const userInput = prompt("It,s your turn choose rock, paper, or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return getHumanChoice(); 
    }
}



let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); 
    console.log(`Human choice:${humanChoice}`)
    console.log(`Computer choice:${computerChoice}`)
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        console.log( `Human score is ${humanScore}`);
        console.log( `Computer score is ${computerScore}`);
       
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        console.log( `Human score is ${humanScore}`);
        console.log( `Computer score is ${computerScore}`);
        console.log("-------------------------------------------------")
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
        console.log( `Human score is ${humanScore}`);
        console.log( `Computer score is ${computerScore}`);
        console.log("-------------------------------------------------")


    }
}
for (let i = 0; i < 5; i++) {
    console.log(`round ${i+1}`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    alert("You win!")
} else if (computerScore > humanScore) {
    console.log(`Computer wins the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    alert("You lose!")
} else {
    console.log(`It's a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    alert("Match tie!")
}
