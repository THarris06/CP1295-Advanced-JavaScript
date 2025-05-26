"use strict";
const getElement = selector => document.querySelector(selector);

const getSelectedProduct = alt => {
    if (alt == "espresso") {
        return [1.95, "Espresso"];
    }
    else if (alt == "latte") {
        return [2.95, "Latte"];
    }
    else if (alt == "cappuccino") {
        return [3.45, "Cappuccino"];
    }
    else if (alt == "coffee") {
        return [1.75, "Coffee"];
    }
    else if (alt == "biscotti") {
        return [1.95, "Biscotti"];
    }
    else if (alt == "scone") {
        return [2.95, "Scone"];
    }
};

document.addEventListener("DOMContentLoaded", () => {

    let images = document.querySelectorAll("#menu-list img");

    let totalCost = 0;

    for (let image of images) {
        let originalURL = image.src;
        let infoURL = image.id;

        image.addEventListener('mouseover', () => {
            image.src = infoURL;
        })
        image.addEventListener('mouseout', () => {
            image.src = originalURL
        })

        image.addEventListener("click", () => {
            let product = getSelectedProduct(image.alt);

            let selectElement = getElement("#order");

            let option = document.createElement("option");
            let text = document.createTextNode(`$${product[0]} - ${product[1]}`)
            option.appendChild(text);

            selectElement.appendChild(option);

            totalCost += product[0];
            getElement("#total").textContent = (`$${totalCost.toFixed(2)}`);
        })

    }

    getElement("#place_order").addEventListener("click", () => {
        document.getElementById("order_form").submit();
    })

    getElement("#clear_order").addEventListener("click", () => {
        document.getElementById("order").innerHTML = "";
    })

}); 