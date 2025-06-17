"use strict";

const getElement = selector => document.querySelector(selector);

// import Dice and new StreetCraps module
import Dice from "./lib_dice.js";
import StreetCraps from "./lib_street_craps.js";

document.addEventListener("DOMContentLoaded", () => {
    const dice = new Dice(2);
    const game = new StreetCraps();

    getElement("#new_game").addEventListener("click", () => {
        game.reset();
        getElement("#roll").disabled = false;
        getElement("#new_game").disabled = true;
        getElement("#point").textContent = "0";
        getElement("#current_roll").textContent = "0";
        getElement("#message").textContent = "";
    });

    getElement("#roll").addEventListener("click", () => {
        const roll = dice.roll();
        getElement("#current_roll").textContent = roll;

        const result = game.processRoll(roll);

        if (game.rollCount === 1 && !game.isGameOver) {
            getElement("#point").textContent = game.point;
        }

        getElement("#message").textContent = result.message;

        if (result.gameOver) {
            getElement("#roll").disabled = true;
            getElement("#new_game").disabled = false;
        }
    });
});
