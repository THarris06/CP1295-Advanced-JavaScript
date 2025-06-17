"use strict";

class Die {
    constructor(sides = 6) {
        this.sides = sides;
    }
    
    roll() {
        return Math.trunc((Math.random() * this.sides) + 1);
    }
}

export default class Dice {
    constructor(numberOfDice = 2) {
        this.dice = Array.from({ length: numberOfDice}, () => new Die())
    }

    roll() {
        return this.dice.reduce((sum, die) => sum + die.roll(), 0)
    }
}