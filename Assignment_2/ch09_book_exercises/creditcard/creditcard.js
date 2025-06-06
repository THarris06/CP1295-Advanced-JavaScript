"use strict";

const getElement = selector => document.querySelector(selector);

const clearMessages = form => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        if (span) span.textContent = "*";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    form.noValidate = true;

    // attach invalid event handlers
    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const elem = evt.currentTarget;
            const msg = elem.title ? elem.title : elem.validationMessage;
            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        })
    }

    form.addEventListener("submit", evt => {

        // handle submit event
        clearMessages(form);

        const expiry = getElement("#expdate");
        const dateParts = expiry.value.split("/");
        const expiryDate = new Date("20" + dateParts[1], dateParts[0]);
        const today = new Date();

        if (today > expiryDate) {
            expiry.nextElementSibling.textContent = "Expiry date needs to be in the future";
            evt.preventDefault();
        }
        else {
            expiry.nextElementSibling.textContent = "*";
        }

        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    });

});