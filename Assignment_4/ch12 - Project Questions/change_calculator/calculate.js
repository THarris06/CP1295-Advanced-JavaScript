"use strict";

const changeCalculator = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,

    countChange(cents) {
        this.quarters = Math.floor(cents / 25);        // get number of quarters
        cents = cents % 25;         // assign the remainder to the cents variable

        // calculate the number of dimes
        this.dimes = Math.floor(cents / 10);           // get number of dimes
        cents = cents % 10;         // assign the remainder to the cents variable

        // calculate the number of nickels
        this.nickels = Math.floor(cents / 5);

        // calculate the number of nickels and pennies
        this.pennies = cents % 5;
    },

    isValid(value, min, max) {
        if (!isNaN(value)) {
             if (value >= min && value <= max) {
                return true;
            }
            else { return false; }
        }
        else { return false; }
    }
}

const clearForm = () => {
    document.querySelector("#cents").value = "";
    document.querySelector("#quarters").value = "";
    document.querySelector("#dimes").value = "";
    document.querySelector("#nickels").value = "";
    document.querySelector("#pennies").value = "";
    document.querySelector("#cents").focus();
};

const calculateChange = () => {
    // get the number of cents from the user
    let cents = Math.floor(parseInt(document.querySelector("#cents").value));

    if (!changeCalculator.isValid(cents, 0, 99)) {
        alert("Please enter a valid number between 0 and 99");
        document.querySelector("#cents").select();
    } else {
        changeCalculator.countChange(cents);
        // display the results of the calculations
        document.querySelector("#quarters").value = changeCalculator.quarters;
        document.querySelector("#dimes").value = changeCalculator.dimes;
        document.querySelector("#nickels").value = changeCalculator.nickels;
        document.querySelector("#pennies").value = changeCalculator.pennies;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#calculate").addEventListener("click", calculateChange);  
    document.querySelector("#clear").addEventListener("click", clearForm);     
    document.querySelector("#cents").focus();     
});