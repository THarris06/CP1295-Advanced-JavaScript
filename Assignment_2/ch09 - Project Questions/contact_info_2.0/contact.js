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
        
        const email = getElement("#email").value;
        const phone = getElement("#phone").value;

        console.log(email);
        console.log(phone);

        if (email == "" && phone == "") {
            getElement("#email").nextElementSibling.textContent = "Please enter a email or phone"
            evt.preventDefault();
        }

        const dob =  getElement("#dob").value;
        const dateParts = getElement("#dob").value.split("/");

        let dobDate = new Date(dateParts[2], dateParts[0]);

        console.log(dobDate);

        const today = new Date();

        if (today > dobDate) {
            getElement("#dob").nextElementSibling.textContent = "Date of birth needs to be in the past";
        }
        else {
             getElement("#dob").nextElementSibling.textContent = "";
        }

        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    })
})

