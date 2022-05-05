// creates a new object
const menu = {
    // properties of the object
    _meal: '',
    _price: 0,
    // Setter with a check that is the correct type
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    // Depending if the values are correct return a formatted string
    get todaysSpecial() {
        return this._meal && this._price
            ? `Today's Special is ${this._meal} for ${this._price}`
            : 'Meal or price was not set correctly!';
    },
};

menu.meal = 'Tofu';
menu.price = 10;
console.log(menu.todaysSpecial);
