"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    
    //prevent html validation
    form.noValidate = true;

    // attach invalid event handlers
    for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const span = evt.currentTarget.nextElementSibling;
                if (span) span.textContent = evt.currentTarget.validationMessage;
            });
        }

    form.addEventListener("submit", evt => {
        evt.preventDefault();
        //clear error messages
        for (let element of form.elements) {
            const span = element.nextElementSibling;
            if (span) span.textContent = "";
        }

        const first = getElement("#first").value;
        const last = getElement("#last").value;
        const birth = new Date(getElement("#birth").value);
        const guardian = getElement("#guardian").value;
        console.log(first, last, birth, guardian);
        
        //perform custom validation so birth date is at least 16 years ago
        if (birth) {
            const limit = new Date();
            limit.setFullYear(limit.getFullYear() - 16);
            
            if ((birth.getFullYear() > limit.getFullYear())) {
                const msg = "must be older than 16 OR enter a guardian";
                
                getElement("#birth").setCustomValidity(msg);
            }
            
        }
    
        // trigger check form and if error, prevent default submission
        if(!form.checkValidity()) { 
            evt.preventDefault();
        }

    });

});