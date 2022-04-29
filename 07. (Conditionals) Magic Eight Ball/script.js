const username = 'Danny';
const userQuestion = 'Will I finish school?';
const randomNumber = Math.floor(Math.random() * 8) + 1;
let eightBall;

const log = username ? `Hello ${username}` : 'Hello';

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Reply hazy try again';
        break;
    case 6:
        eightBall = 'Do not count on it';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
        break;
    default:
        console.log('You should not see this answer');
        break;
}

console.log(log);
console.log(username ? `${username} ask: ${userQuestion}` : `Someone ask: ${userQuestion}`);
console.log(`The answer is: ${eightBall}`);
