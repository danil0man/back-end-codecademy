const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

// Creates an array were to push the items
const resultArray = [];

// Loops trough the string
for (let i = 0; i < input.length; i++) {
    // If the letter is e or u add an extra
    if (input[i].toLowerCase() === 'e') {
        resultArray.push('e');
    }

    if (input[i].toLowerCase() === 'u') {
        resultArray.push('u');
    }
    // Check if the letters are vowels and add them to the result array
    for (let j = 0; j < vowels.length; j++) {
        if (input[i].toLowerCase() === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

console.log(resultArray);

// joins the items in the array and makes it uppercase
const resultString = resultArray.join('').toUpperCase();

console.log(resultString);
