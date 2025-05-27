"use strict";
const getElement = selector => document.querySelector(selector);

const clearMessages = form => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        // if statement to check span and ignore reset button
        if (span && span.id != "reset") {
            span.textContent = "*";
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    form.noValidate = true;

    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const elem = evt.currentTarget;
            const msg = elem.title ? elem.title : elem.validationMessage;
            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        })
    }

    form.addEventListener("submit", evt => {

        clearMessages(form);
        
        // check if either email or phone is filled
        const email = getElement("#email").value;
        const phone = getElement("#phone").value;

        if (email == "" && phone == "") {
            getElement("#email").nextElementSibling.textContent = "Please enter a email or phone"
            evt.preventDefault();
        }

        //check if dob is in the past
        const dob = getElement("#dob");
        const dobDate = new Date(dob.value + "T00:00:00")
        const today = new Date();

        console.log(dob.value, dobDate)

        if (today < dobDate) {
            dob.nextElementSibling.textContent = "DOB must be in the past";
            evt.preventDefault();
        }
        else {
            dob.nextElementSibling.textContent = "*";
        }

        // check form validity
        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    })
})

