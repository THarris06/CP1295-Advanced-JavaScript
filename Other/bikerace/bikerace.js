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
        //clear error messages
        for (let element of form.elements) {
            const span = element.nextElementSibling;
            if (span) span.textContent = "";
        }

        // const first = getElement("#first");
        // const last = getElement("#last");
        const birth = getElement("#birth");
        const guardian = getElement("#guardian");
        
        const birthDate = new Date(birth.value);

        //perform custom validation so birth date is at least 16 years ago
        if (birth) {
            const limit = new Date();
            limit.setFullYear(limit.getFullYear() - 16);
            
            if (birthDate > limit) {
                guardian.required = true;

                if (!guardian.value) {
                    guardian.setCustomValidity("Guardian is required if under 16.");
                }
                else {
                    guardian.setCustomValidity("");
                }

                birth.setCustomValidity("");
            }
            else {
                guardian.required = false;
                guardian.setCustomValidity("");
                birth.setCustomValidity("");
            }
            
        }
    
        // trigger check form and if error, prevent default submission
        if(!form.checkValidity()) { 
            evt.preventDefault();
        }

    });

});