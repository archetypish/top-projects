// understanding of the problem

/* User Story:
computer's turn: function that will randomly return rock, paper, or scissors
this will make the computer play

function to play a single round. it will take two parameters playerSelection
and computerSelectin and return a string to declare the winner of the round

playGame to play a 5 round game that keeps score and declare winner
*/

/* My Understanding:
Create a program that user can run on the console to play 5 rounds of 
rock paper and scissors against the computer. 

*/

// planning the solution

/*
does your program have a ui? if yes, then what does it look like? draw it on 
a piece of paper. what functionality does it have? 

No. It is gonna run on the console.
*/

/* 
what is the input? how does it get it? from somwhere else or from user?

For each round, 

user is gonna enter either of rock, paper or scissor. we need to take care of 
making it uniformly lower case for the sake of the comparison

computer is gonna randomly give us one of the rock, paper or scissor

*/

/* What is the desired output 

For each round,

we need to check who is the winner and declare that.
we also need to track and output the scores

For the final round,

we need to check who the overall winner is based on the score
and declare the scores as well
*/

/* How do we go from desired output to the input */
// Algorithm - Recipe to solve the problem - divide into subproblems

// Initialize game

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

// Play one round of rock paper scissors

// function that will be run to get and update selections
function getSelections() {
  // Get input from the user and store it in playerSelection
  playerSelection = prompt("Rock, Paper or Scissor?", "").toLowerCase();

  // Get input from the computer and store it in computerSelection
  computerSelection = getComputerChoice().toLowerCase();

  //   Log Selections
  console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
}

// Get input from the computer and store it in computerSelection
// generate a random number from 0 (inc) and 99(inc)
function getComputerChoice() {
  const random = Math.floor(Math.random() * 100);
  let computerChoice;
  if (random >= 0 && random <= 33) {
    computerChoice = "Rock";
  } else if (random >= 34 && random <= 66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }
  return computerChoice;
}

// if random [0,33] - Rock
// else if random [34 - 66] Paper
// else Scissor

// Compare playerSelection & computerSelection & output the winner, update score

// if they are same, no winner, no loser, round draw, don't update score

// else if playerSelection is rock, then player wins if cS is scissor only
// update player score by 1
// declare player as winner
// else computer wins (paper)

// else if playerSelection is paper, then player wins if cS is rock only
// update player score by 1
// declare player as winner
// else computer wins (scissor)

// else if playerSelection is scissor, then player wins if cS is paper only
// update player score by 1
// declare player as winner
// else computer wins (rock)

/* 
players wins

rock scissor
paper rock
scissor paper

computer wins
rock paper
paper scissor
scissor rock

*/

function playRound(playerSelection, ComputerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Match Drawn! No Winner! No Loser");
    return "Match Drawn! No Winner! No Loser";
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissor") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissor" && computerSelection === "paper")
    ) {
      playerScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
}

// function to run a complete round

function completeRound() {
  getSelections();
  playRound(playerSelection, computerSelection);
}

// Repeat this four more times
function playGame() {
  // // Round 1
  // console.log("Round 1");
  // completeRound();
  // // Round 2
  // console.log("Round 2");
  // completeRound();
  // // Round 3
  // console.log("Round 3");
  // completeRound();
  // // Round 4
  // console.log("Round 4");
  // completeRound();
  // // Round 5
  // console.log("Round 5");
  // completeRound();
}

// Declare the scores and winner based on scores

// Winner at the end
function declareWinner() {
  if (playerScore > computerScore) {
    console.log("Player is the winner");
  } else if (playerScore < computerScore) {
    console.log("Computer is the winner");
  } else {
    console.log("Match Draw!");
  }
}

playGame();
console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`);
