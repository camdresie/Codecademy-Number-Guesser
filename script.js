let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const targetNumber = Math.floor(Math.random() * 9);
  return targetNumber;
};
const compareGuesses = () => {
   Math.abs(targetNumber - humanGuess)
    if (Math.abs((targetNumber - humanGuess)) > (Math.abs(targetNumber - computerGuess))) {
      return false;
    } else if (humanGuess === computerGuess) {
        return true;
    } else {
        return false;
    }
};
