let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);

// The purpose of this function is to be called each round to determine which guess is closest to the target number.
const compareGuesses = (user, computer, target) => {
    const computerValue = Math.abs(computer - target);
    const userValue = Math.abs(user - target);

    return userValue <= computerValue;
};

// The purpose of this function is to be used to correctly increase the winner’s score after each round.
const updateScore = (string) => (string === 'human' ? humanScore++ : computerScore++);

// The purpose of this function is to be used to update the round number after each round.
const advanceRound = () => currentRoundNumber++;
