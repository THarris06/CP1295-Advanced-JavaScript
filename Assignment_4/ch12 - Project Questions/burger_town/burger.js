"use strict";
const getElement = selector => document.querySelector(selector);

function getRadioValue(radio_name) {
    const radios = document.getElementsByName(radio_name);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {

    getElement("#add_order").addEventListener("click", () => {
        // create burger
        const burger_type = getRadioValue("burger_type");
        const burger_size = getRadioValue("burger_size");
        let burger_toppings = [];
        const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkedCheckboxes.forEach((checkbox) => {
            burger_toppings.push(checkbox.value);
        });
        const burger = new Burger(burger_type, burger_size, burger_toppings);

        // create drink
        const drink_type = getRadioValue("drink_type");
        const drink_size = getRadioValue("drink_size");
        const drink = new Drink(drink_type, drink_size);

        // create fries
        const fry_type = getRadioValue("fry_type");
        const fry_size = getRadioValue("fry_size");
        const fries = new Fries(fry_type, fry_size);

        // Create Order
        const order = new Order(burger, drink, fries);

        // Display order in the HTML
        let html = `<h3>Your Order:</h3>`;

        if (order.burger) {
            html += `<p><strong>Burger:</strong> ${order.burger.size} ${order.burger.type}`;
            if (order.burger.toppings && order.burger.toppings.length > 0) {
                html += ` with ${order.burger.toppings.join(', ')}`;
            }
            html += `</p>`;
        }
        if (order.drink) {
            html += `<p><strong>Drink:</strong> ${order.drink.size} ${order.drink.type}</p>`;
        }
        if (order.fries) {
            html += `<p><strong>Fries:</strong> ${order.fries.size} ${order.fries.type}</p>`;
        }

        getElement("#order_details").innerHTML = html;

    }); 

    getElement("#clear_order").addEventListener("click", () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
        document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
        getElement("#order_details").innerHTML = '';
    });
    
}); 