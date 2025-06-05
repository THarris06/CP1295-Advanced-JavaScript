"use strict";
const getElement = selector => document.querySelector(selector);

const padNum = num => num.toString().padStart(2, "0");

const clearContact = () => {
    sessionStorage.removeItem("contacts");
};
const saveContact = () => {
    const name = getElement("#name").value;
    const email = getElement("#email").value;
    const phone = getElement("#phone").value;
    const zip = getElement("#zip").value;
    const dob = new Date(getElement("#dob").value + "T00:00:00");
    
    const contact = [name, email, phone, zip, dob];
    
    const contacts = JSON.parse(sessionStorage.getItem("contacts") ?? "[]");
    contacts.push(contact);
    sessionStorage.setItem("contacts", JSON.stringify(contacts));
};
const displayContact = () => {
    const contacts = JSON.parse(sessionStorage.getItem("contacts") ?? "[]");
    if (contacts.length === 0) { return };
    const contact = contacts[contacts.length - 1];

    getElement("#name").value = contact[0] ?? "";
    getElement("#email").value = contact[1] ?? "";
    getElement("#phone").value = contact[2] ?? "";
    getElement("#zip").value = contact[3] ?? "";
    const dt = new Date(contact[4]);
    if(!(dt.toString() === "Invalid Date")) {
        const str = `${dt.getFullYear()}-${padNum(dt.getMonth() + 1)}-${padNum(dt.getDate())}`;
        getElement("#dob").value = str;
    }
};
const displayConfirmPage = () => {
    const contacts = JSON.parse(sessionStorage.getItem("contacts") ?? "[]");
    if (contacts.length === 0) { return };
    const contact = contacts[contacts.length - 1];
    
    getElement("#lbl_name").textContent = contact[0] ?? "";
    getElement("#lbl_email").textContent = contact[1] ?? "";
    getElement("#lbl_phone").textContent = contact[2] ?? "";
    getElement("#lbl_zip").textContent = contact[3] ?? "";
    getElement("#lbl_dob").textContent = new Date(contact[4]).toDateString() ?? "";
};

const clearMessages = () => {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        const span = input.nextElementSibling;
        if (span) span.textContent = "";
    }
    inputs[0].focus();
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form) {  // index.html
        // turn off default HTML validation messages
        form.noValidate = true;

        // attach invalid event handler for form controls
        for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const elem = evt.currentTarget;
                const msg = elem.title ? elem.title : elem.validationMessage;
                const span = elem.nextElementSibling;
                if (span) span.textContent = msg;
            });
        }

        // display data from web storage in contact form
        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();  

            // validate user has entered an email or a phone number
            const email = getElement("#email");
            const phone = getElement("#phone");

            let msg = (email.value == "" && phone.value == "") ? "Please enter an email or phone." : "";
            email.setCustomValidity(msg);

            // validate dob 
            const dob = getElement("#dob"); 
            const dobValue = new Date(dob.value + "T00:00:00");   // add time to correct UTC/local time issue
            if (dobValue.toString() == "Invalid Date") {
                msg = "Please enter a valid DOB."
            } else {
                let today = new Date();
                today = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // sets time to 00:00:00
                msg = (today <= dobValue) ? "DOB must be in the past." : "";
            }
            dob.setCustomValidity(msg);

            // validate form
            if(!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                // save contact info to web storage
                saveContact();
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    } else {     // confirm.html
        // display data from web storage in confirm page labels
        displayConfirmPage();
    }
}); 