"use strict";

export function roll(diceObj) {
    let total = 0;
    for (let i = 0; i < diceObj.dice.length; i++) {
        total += Math.trunc(Math.random() * 6) + 1;
    }
    return total;
}

export function processGame(roll, point, rollCount) {
    if (rollCount == 1) {
        // Come out roll
        if (roll == 7 || roll == 11) {
            return `You rolled ${roll} on the come out roll - you win!`;
        }
        else if (roll == 2 || roll == 3 || roll == 12) {
            return `You rolled ${roll} on the come out roll - you lose.`;
        }
        else {
            return '';
        }
    }
    else {
        // Subsequent rolls
        if (roll == point) {
            return `You rolled a ${roll} - you win!`;
        }
        else if (roll == 7) {
            return `You rolled a ${roll} - you lose.`;
        }
        else {
            return '';
        }
    }
}

export default { roll, processGame };