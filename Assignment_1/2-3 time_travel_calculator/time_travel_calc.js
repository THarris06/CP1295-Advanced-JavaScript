"use strict";

distance = parseFloat(prompt("How many miles?"));
speed = parseFloat(prompt("How fast?"));
let hours = Math.floor(distance / speed)
let minutes = Math.floor((distance / speed - hours) * 60);

alert("Distance: " + distance + " Miles" +
    "\nSpeed: " + speed + " MPH" +
    "\nTravel Time: " + hours + " hours, " + minutes + " minutes");