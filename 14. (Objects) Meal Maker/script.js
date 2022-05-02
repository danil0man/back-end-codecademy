const menu = {
    _meal: '',
    _price: 0,
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
    get todaysSpecial() {
        return this._meal && this._price
            ? `Today's Special is ${this._meal} for ${this._price}`
            : 'Meal or price was not set correctly!';
    },
};

menu.meal = 'Tofu';
menu.price = 10;
console.log(menu.todaysSpecial);
