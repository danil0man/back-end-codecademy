// Temperature in Kelvin Grades
const kelvin = 373;

// Temperature in Celsius
const celsius = kelvin - 273;

// Temperature in Fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Temperature in Newton
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);
