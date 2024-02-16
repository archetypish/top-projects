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

// Play one round of rock paper scissors

// Get input from the user and store it in playerSelection

// Get input from the computer and store it in computerSelection
// Compare playerSelection & computerSelection & output the winner, update score

// Repeat this four more times

// Declare the scores and winner based on scores
