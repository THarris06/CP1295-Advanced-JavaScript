"use strict";

function isEmpty(str) {
    return !str || str.trim().length === 0;
}   

function anyEmpty(...strings) {
    return strings.some(str => !str || str.trim().length === 0);
}   

function isNegativeNumber(value) {
    const num = Number(value);
    return isNaN(num) || num <= 0;
}

export default {isEmpty, anyEmpty, isNegativeNumber};