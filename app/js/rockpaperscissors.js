////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) { 
    if (move == null || move === undefined) {
        playerMove = getInput();
    }
    else {
        playerMove = move;
        console.log("player chooses " + playerMove);
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove;
}

function getComputerMove(move) {
    if (move == null || move === undefined) {
        computerMove = randomPlay();
    }
    else
        computerMove = move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = 'tie';
        console.log("Tie");
        return winner;
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        }
        else winner = 'player';
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        }
        else winner = 'computer';
    }
    else 
        if (computerMove === 'rock') {
            winner = 'computer';
        }
        else winner = 'player';
    console.log("Winner is " + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        getWinner(getPlayerMove(), getComputerMove());
            if (winner === 'player') {
                playerWins ++;
                console.log('Player chose ' + playerMove + 'while Computer chose ' + computerMove + '. Player won!');
            }
            else if (winner === 'computer') {
                computerWins ++;
                console.log('Player chose ' + playerMove + 'while Computer chose ' + computerMove + '. Computer won.');
            }
            else 
                console.log('This round was a tie.');

    }

    console.log ('The score is currently ' + playerWins + 'to ' + computerWins);
    return [playerWins, computerWins];
}

