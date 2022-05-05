const secretMessage = [
    'Learning',
    'is',
    'not',
    'about',
    'what',
    'you',
    'get',
    'easily',
    'the',
    'first',
    'time,',
    'it',
    'is',
    'about',
    'what',
    'you',
    'can',
    'figure',
    'out.',
    '-2015,',
    'Chris',
    'Pine,',
    'Learn',
    'JavaScript',
];

// Remove the last element in the array
secretMessage.pop();

// prints the length of the array
console.log(secretMessage.length);

// Adds two strings to the end of the array
secretMessage.push('to', 'Program');

// Finds the index of the word easily and change it for the word right.
secretMessage[secretMessage.indexOf('easily')] = 'right';

// Removes the first element of the array
secretMessage.shift();

// Add a new string to the beginning of the array
secretMessage.unshift('Programming');

// Finds the index of the word get in the array, remove the current index plus another 4
// and replace it with the word known
secretMessage.splice(secretMessage.indexOf('get'), 5, 'known');

// takes the array and join the array into a string
console.log(secretMessage.join(' '));
