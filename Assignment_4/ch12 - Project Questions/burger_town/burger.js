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

    let fullOrder = [];

    getElement("#add_order").addEventListener("click", () => {

        getElement("#order_details").innerHTML = "";

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
        fullOrder.push(order);

        // Display order in the HTML
        let html = "";
        let total = 0;

        // Display all burgers
        fullOrder.forEach((item) => {
            if (item.burger && item.burger.type !== undefined) {
                let burger = item.burger;
                let price = burger.price;
                total += price;

                if (burger.type == 'cheese') {
                    html += `<p><strong>${burger.size} ${burger.type}burger - $${price.toFixed(2)}</strong>`;
                } else {
                    html += `<p><strong>${burger.size} burger - $${price.toFixed(2)}</strong>`;
                }

                if (burger.toppings && burger.toppings.length > 0) {
                    burger.toppings.forEach((topping) => {
                        html += `<br>- ${topping}`;
                    });
                }
                html += `</p>`;
            }
        });

        // Display all drinks
        fullOrder.forEach((item) => {
            if (item.drink) {
                let drink = item.drink;
                let price = drink.price;
                total += price;

                html += `<p><strong>${drink.size} ${drink.type} - $${price.toFixed(2)}</strong></p>`;
            }
        });

        // Display all fries
        fullOrder.forEach((item) => {
            if (item.fries) {
                let fries = item.fries;
                let price = fries.price;
                total += price;

                if (fries.type == 'curly') {
                    html += `<p><strong>${fries.size} ${fries.type} fries - $${price.toFixed(2)}</strong></p>`;
                }
                else {
                    html += `<p><strong>${fries.size} fries - $${price.toFixed(2)}</strong></p>`;
                }
            }
        });

        // Display total
        html += `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;

        // Add to HTML
        getElement("#order_details").innerHTML += html;
        
    }); 

    getElement("#clear_order").addEventListener("click", () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
        document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
        getElement("#order_details").innerHTML = '';
    });
    
}); 