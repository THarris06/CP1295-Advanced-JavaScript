class Order {
    constructor(burger, drink, fries) {
        this.burger = burger;
        this.drink = drink;
        this.fries = fries;
    }
}

class Burger {
    constructor(type, size, toppings) {
        if (type == undefined && size == undefined) {
            return undefined;
        }
        else {
            this.type = type || 'regular';
            this.size = size || 'single';
            this.toppings = toppings || undefined;
        } 
    }
}

class Drink {
    constructor(type = 'water', size = 'small') {
        this.type = type;
        this.size = size;
    }
}

class Fries {
    constructor(type = 'regular', size = 'small') {
        this.type = type;
        this.size = size;
    }
}