const team = {
    _players: [
        { firstName: 'Danny', lastName: 'Castillo', age: 36 },
        { firstName: 'Eric', lastName: 'Szabo', age: 34 },
        { firstName: 'Sven', lastName: 'Bjork', age: 37 },
    ],
    _games: [
        { opponent: 'Red Ducks', teamPoints: 100, opponentPoints: 67 },
        { opponent: 'Happy Monkeys', teamPoints: 89, opponentPoints: 89 },
        { opponent: 'Sax X', teamPoints: 120, opponentPoints: 45 },
    ],
    // two getter functions
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    // This methods add a new player or a new game to the respective arrays
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this._games.push(game);
    },
    // This method calculate the average points and return a formatted string
    averageTeamPoints() {
        let totalPoints = 0;
        for (const key of this._games) {
            totalPoints += key.teamPoints;
        }
        return `We scored ${totalPoints} points in ${this._games.length} games for an average of ${
            totalPoints / this._games.length
        } points per game`;
    },
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.games);
team.averageTeamPoints();
