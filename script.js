let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10); // returning a random number
};

const compareGuesses = (humanGuess, computerGuess, secretNum) => {
    if (humanGuess < 0 || humanGuess > 10) {
       window.alert("the number needs to be between 0 and 10");
        end;
    }   

    const humanDifference = Math.abs(secretNum - humanGuess); // takes negative number into positive number as the answer
    const computerDifference = Math.abs(secretNum - computerGuess); // takes negative number into positive number as the answer

    return humanDifference <= computerDifference;
};

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++; // increment human score by 1 if human wins
    } else if (winner === "computer") {
        computerScore++; // increment computer score by 1 if computer wins
    } else {
        return 'error';
    }
};

const advanceRound = () => {
    currentRoundNumber++; // proceed to next round
};

const secretNum = generateTarget(); // returns the secret number in the program

const winner = compareGuesses(secretNum); // invoking compareGuesses function to determine winner of each game.

const checkUserGuess = (userGuess) => {
    if (userGuess >= 0 && userGuess <= 9) {
        return 'number is out of range';
    } else {
        return
    }
}

updateScore(winner);
advanceRound();
