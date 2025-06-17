"use strict";

const getElement = selector => document.querySelector(selector);

// import statement(s)
import Dice from "./lib_dice.js";

document.addEventListener("DOMContentLoaded", () => {
    // global roll count to check for come out win/lose
    let ROLL_COUNT = 0;
    // create 2 dice
    const dice = new Dice(2);

    getElement("#new_game").addEventListener("click", () => {
        // reset count
        ROLL_COUNT = 0;
        // update page
        getElement("#roll").disabled = false;
        getElement("#new_game").disabled = true;
        getElement("#point").textContent = "0";
        getElement("#current_roll").textContent = "0";
        getElement("#message").textContent = "";
    });

    getElement("#roll").addEventListener("click", () => {
        // increment ROLL_COUNT every click
        ROLL_COUNT += 1;

        // roll dice
        const roll = dice.roll();
        getElement("#current_roll").textContent = roll;

        // if it's the first roll, check for come out win/lose, else set the point
        if (ROLL_COUNT === 1) {
            if (roll === 7 || roll === 11) {
                getElement("#message").textContent = `You rolled ${roll} on the come out roll - you win!`;
                getElement("#roll").disabled = true;
                getElement("#new_game").disabled = false;
            }
            else if (roll === 2 || roll === 3 || roll === 12) {
                getElement("#message").textContent = `You rolled ${roll} on the come out roll - you lose.`;
                getElement("#roll").disabled = true;
                getElement("#new_game").disabled = false;
            }
            else {
                getElement("#point").textContent = roll;
            }
        }
        // else handles the rest of the game
        else {
            let point = getElement("#point").textContent;
            if (roll == point) {
                getElement("#message").textContent = `You rolled a ${roll} - you win!`;
                getElement("#roll").disabled = true;
                getElement("#new_game").disabled = false;
            }
            else if (roll == 7) {
                getElement("#message").textContent = `You rolled a ${roll} - you lose.`;
                getElement("#roll").disabled = true;
                getElement("#new_game").disabled = false;
            }
        }
        
    });
});