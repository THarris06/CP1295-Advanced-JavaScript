"use strict";

const getElement = selector => document.querySelector(selector);

const countdown = () => {
    const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  

        // make sure user entered event and date 
        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // convert event date string to Date object and check for validity
        const eventDate = new Date(eventDateString);
        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // calculate days
        const today = new Date();
        const msFromToday = eventDate.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        const daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // calculate hours, minutes, seconds
        const totalSeconds = Math.floor(msFromToday / 1000);  // Convert milliseconds to seconds

        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.abs(totalSeconds) % 60;

        // create and display message 
        const displayDate = eventDate.toDateString();
        let msg = "";
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${eventName}! (${displayDate})`;
        } else if (daysToDate > 0) {
            msg = `${daysToDate} day(s), ${hours} hour(s), ${minutes} minutes, ${seconds} seconds until ${eventName}! (${displayDate})`;
        } else if (daysToDate < 0) {
            msg = `${eventName} happened ${Math.abs(daysToDate)} 
                   day(s) ago. (${displayDate})`;
        }
        messageLbl.textContent = msg;
}

document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        setInterval(countdown, 1000)
    });

    // set focus on first text box
    getElement("#event").focus();
});