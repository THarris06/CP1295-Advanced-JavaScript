class Order {
    constructor(burger, drink, fries) {
        this.burger = burger;
        this.drink = drink;
        this.fries = fries;
    }
}

class Burger {
    constructor(type, size, toppings = []) {
        if (type === undefined && size === undefined) {
            return null;
        }

        this.type = type || 'regular';
        this.size = size || 'single';
        this.toppings = toppings;

        this.price = this.calculatePrice();
    }

    calculatePrice() {
        let basePrice = 5;

        // Add $1 for cheese
        if (this.type == 'cheese') {
            basePrice += 1;
        }

        // Add $2 for double
        if (this.size == 'double') {
            basePrice += 2;
        }

        // Toppings are free
        return basePrice;
    }
}


class Drink {
    constructor(type = 'water', size = 'small') {
        this.type = type;
        this.size = size;

        this.price = this.calculatePrice();
    }

    calculatePrice() {
        const sizeUpcharge = {
            'small': 0,
            'medium': 1,
            'large': 2
        };

        if (this.type == 'water') {
            return 0;
        }

        let basePrice = 0;
        if (this.type == 'soda') {
            basePrice = 1.75;
        } else if (this.type == 'tea') {
            basePrice = 1.00;
        }

        return basePrice + (sizeUpcharge[this.size] || 0);
    }
}


class Fries {
    constructor(type = 'regular', size = 'small') {
        this.type = type;
        this.size = size;

        this.price = this.calculatePrice();
    }

    calculatePrice() {
        const sizeUpcharge = {
            'small': 0,
            'medium': 0.75,
            'large': 1.50
        };

        return 2.25 + (sizeUpcharge[this.size] || 0);
    }
}