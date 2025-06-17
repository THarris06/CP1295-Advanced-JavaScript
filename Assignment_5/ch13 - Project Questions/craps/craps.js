"use strict";

const getElement = selector => document.querySelector(selector);

// import Dice and new StreetCraps module
import Dice from "./lib_dice.js";
import Craps from "./lib_street_craps.js";

document.addEventListener("DOMContentLoaded", () => {
    const dice = new Dice(2);
    let rollCount = 0;
    let point = 0;

    getElement("#new_game").addEventListener("click", () => {
        rollCount = 0;
        point = 0;
        getElement("#roll").disabled = false;
        getElement("#new_game").disabled = true;
        getElement("#point").textContent = "0";
        getElement("#current_roll").textContent = "0";
        getElement("#message").textContent = "";
    });

    getElement("#roll").addEventListener("click", () => {
        let roll = Craps.roll(dice);
        rollCount++;

        getElement("#current_roll").textContent = roll;

        const result = Craps.processGame(roll, point, rollCount);

        if (result != '') {
            getElement("#message").textContent = result;
            getElement("#roll").disabled = true;
            getElement("#new_game").disabled = false;
        }
        else if (point == 0) {
            getElement("#point").textContent = roll;
            point = getElement("#point").textContent;
        }
    });
});
