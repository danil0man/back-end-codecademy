const raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 30;

const number = registeredEarly && age > 18 ? raceNumber + 1000 : raceNumber;

if (registeredEarly && age > 18) {
    console.log(`Your starting running time is 9:30 with the the number ${number}`);
} else if (!registeredEarly && age > 18) {
    console.log(`Your starting running time is 11:00 with the the number ${number}`);
} else if (age < 18) {
    console.log(`Your starting running time is 12:30 with the the number ${number}`);
} else {
    console.log('Please check with registration desk');
}
