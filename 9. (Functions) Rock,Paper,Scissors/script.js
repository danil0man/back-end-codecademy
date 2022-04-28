const getUserChoice = (userInput) => {
    const toLower = userInput.toLowerCase();

    if (toLower === 'rock' || toLower === 'paper' || toLower === 'scissors' || toLower === 'bomb') {
        return userInput;
    }

    console.log('This is an invalid value');
};

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

const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();

    return choice === 'bomb'
        ? 'Player Cheats and Won'
        : `User: ${userChoice}, computer: ${computerChoice}
Winner: ${determineWinner(userChoice, computerChoice)}`;
};

console.log(playGame('scissors'));
