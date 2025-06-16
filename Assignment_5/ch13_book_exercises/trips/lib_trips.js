"use strict";

import Trip from './lib_trip.js';

const trips = [];

function push(trip) {
    if (trip instanceof Trip) {
        trips.push(trip);
    } else {
        throw new Error("Must be a Trip object.");
    }
}

function avgMpg() {
    let totalMiles = 0;
    let totalGallons = 0;
    for (let trip of trips) {
        totalMiles += trip.miles;
        totalGallons += trip.gallons;
    }
    return totalMiles / totalGallons;
}

function toString() {
    let str = "";
    for (let trip of trips) {
        str += trip + "\n";
    }
    str += "\nAverage MPG: " + avgMpg().toFixed(1);
    return str;
}

export default {
    push,
    get avgMpg() {
        return avgMpg();
    },
    toString
};