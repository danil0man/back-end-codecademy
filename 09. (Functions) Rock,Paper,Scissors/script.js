// This function take a user input and makes it lowercase.
// Then it compares if the user input is part of the alternative otherwise give error message
const getUserChoice = (userInput) => {
    const toLower = userInput.toLowerCase();

    if (toLower === 'rock' || toLower === 'paper' || toLower === 'scissors' || toLower === 'bomb') {
        return userInput;
    }

    console.log('This is an invalid value');
};

// This function randomly select an option for the computer
const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    let type;

    switch (choice) {
        case 0:
            type = 'rock';
            break;
        case 1:
            type = 'paper';
            break;
        case 2:
            type = 'scissors';
            break;
        default:
            console.log('Wrong Value');
    }

    return type;
};

// Depending on the answer of user and computer, choose a winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This is a tie';
    }

    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Computer Won' : 'Player Won';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer Won' : 'Player Won';
    }

    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Computer Won' : 'Player Won';
    }
};

// This function starts the game and show the winner in a formatted string
const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();

    // Add a cheat code. If the user choice is bomb, the player cheats and automatic wins
    return choice === 'bomb'
        ? 'Player Cheats and Won'
        : `User: ${userChoice}, computer: ${computerChoice}
Winner: ${determineWinner(userChoice, computerChoice)}`;
};

console.log(playGame('scissors'));
