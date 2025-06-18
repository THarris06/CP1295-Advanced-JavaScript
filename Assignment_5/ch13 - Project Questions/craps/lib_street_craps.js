"use strict";
// import statement(s)

// private

// public
export function roll(dice) {
    return dice.roll();
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