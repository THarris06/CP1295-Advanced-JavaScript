"use strict";

class Die {
    constructor(sides = 6) {
        this.sides = sides;
    }
}

export default class Dice {
    constructor(numberOfDice = 2) {
        this.dice = Array.from({ length: numberOfDice}, () => new Die())
    }
}