let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if ((Math.abs(targetGuess - humanGuess)) > (Math.abs(targetGuess - computerGuess))) {
      return false;
    } else if ((Math.abs(targetGuess - computerGuess)) > (Math.abs(targetGuess - humanGuess))) {
        return true;
    } else if (humanGuess === computerGuess) {
        return true;
    }
};
const updateScore = (winner) => {
  if (winner === 'human') {
      humanScore += 1;
  } else if (winner === 'computer') {
      computerScore += 1;
  }
};
const advanceRound = () => {
    currentRoundNumber += 1;
};