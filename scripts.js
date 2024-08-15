/* let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

// Set the choices

const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

// Function to choose rock, paper, or scissors randomly for the computer

function getComputerChoice(computerChoice) {
    return choices[Math.floor(Math.random() * 3)]
}

// Function for human choice

function getHumanChoice(humanChoice) {
    return prompt("Rock, paper, or scissors?", "rock, paper, or scissors?").toLowerCase()
}

// Play five rounds

for (var roundNumber = 0; roundNumber < 5; roundNumber++) {

// Get Choices

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// Who wins, print out choices, add to score

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("human choice, computer choice: " + humanChoice + ", " +computerChoice)
        result = "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") |
                (humanChoice === "scissors" && computerChoice === "paper") |
                (humanChoice === "paper" && computerChoice === "rock")) {
                    console.log("human choice, computer choice: " + humanChoice + ", " +computerChoice);
                    humanScore++;
                    result = "win";
    } else {
        console.log("human choice, computer choice: " + humanChoice + ", " +computerChoice);
        computerScore++;
        result = "lost";
    }

    console.log(result + " - Computer: " + computerScore + " points. Human has: " + humanScore + " points.");
}



playRound(humanSelection, computerSelection)
}
