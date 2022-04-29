// My Age minus the first two years
const myAge = 36;

// The first 2 years on a dog life
const earlyYears = 2 * 10.5;

// Subtract the first two years
let laterYears = myAge - 2;

// Multiply later years by 4
laterYears *= 4;

// Calculate the whole age
const myAgeInDogYears = earlyYears + laterYears;

// Make my name to lowercase
const myName = 'Danny'.toLowerCase();

// Print a formatted string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is \
${myAgeInDogYears} years old in dog years`);
