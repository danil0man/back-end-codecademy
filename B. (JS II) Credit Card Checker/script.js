// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
    valid1,
    valid2,
    valid3,
    valid4,
    valid5,
    invalid1,
    invalid2,
    invalid3,
    invalid4,
    invalid5,
    mystery1,
    mystery2,
    mystery3,
    mystery4,
    mystery5,
];

const validateCred = (array) => {
    // Reverse the Array
    array.reverse();

    // Double every other value without counting the control number
    const doubleNumbers = [];
    array.forEach((element, i) =>
        i % 2 === 1 && i !== 0 ? doubleNumbers.push(element * 2) : doubleNumbers.push(element)
    );

    // Substract 9 from all numbers that are bigger than 9
    const subBy9 = [];
    doubleNumbers.forEach((element) => (element > 9 ? subBy9.push(element - 9) : subBy9.push(element)));

    // reduce the array to a total sum and compare if modulus of 10 is equal zero return true
    return subBy9.reduce((previous, current) => previous + current) % 10 === 0;
};

const findInvalidCards = (arrayOfCards) => {
    // Filter the array to exclude values that are true
    const invalidArray = arrayOfCards.filter((array) => validateCred(array) !== true);

    // Reverse back the array after calling it using the validateCred function
    invalidArray.forEach((array) => array.reverse());
    return invalidArray;
};

const invalidCards = findInvalidCards(batch);

const idInvalidCardCompanies = (arryOfInvalidNr) => {
    const companies = [];

    // depending of the first digit add the company to the companies array
    arryOfInvalidNr.forEach((card) => {
        switch (card[0]) {
            case 3:
                companies.push('American Express');
                break;
            case 4:
                companies.push('Visa');
                break;
            case 5:
                companies.push('Mastercard');
                break;
            case 6:
                companies.push('Discover');
                break;
            default:
                console.log('Company not found');
        }
    });
    // returns a set of the companies array. By using set we remove all duplicates
    return [...new Set(companies)];
};

console.log(idInvalidCardCompanies(invalidCards));