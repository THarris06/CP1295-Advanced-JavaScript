"use strict";

function getElement(selector) {
    return document.querySelector(selector);
}  

function getInvoices() {
    let invoices = [];

    invoices.push(["Murach Books", 100.00, new Date("10/5/2024"), true]);
    invoices.push(["Savemart", 200.75, new Date("10/8/2024"), false]);
    invoices.push(["Carls Jr.", 150.25, new Date("10/6/2024"), true]);
    invoices.push(["Taco Bell", 85.00, new Date("10/23/2024"), true]);
    invoices.push(["Target", 45.00, new Date("10/01/2024"), false]);

    return invoices;
}

function getRadioStatus() {
    const radios = document.getElementsByName("paid_status");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function createCol(text) {
    const col = document.createElement("td");
    const textNode = document.createTextNode(text);
    col.appendChild(textNode);
    return col;
}
 
function displayInvoices(invoices) {
    const table = getElement("#invoice_table");

    // clear any existing invoices (but not header row)
    const rows = document.querySelectorAll("#invoice_table tr");
    for (let i = 1; i < rows.length; i++) {
        table.removeChild(rows[i]);
    }

    // add one row for each invoice
    invoices.forEach( invoice => {
        invoice[1] = invoice[1].toFixed(2);
        invoice[2] = invoice[2].toDateString();
        const row = document.createElement("tr");
        invoice.forEach( item => {
            const col = createCol(item);
            row.appendChild(col);
        })
        table.appendChild(row);
    })
}
 
function filterInvoices() {
    const invoices = getInvoices();
    
    // filter by date
    const startDate = new Date(getElement("#start_date").value);
    const endDate = new Date(getElement("#end_date").value);   
    let filtered = invoices.filter(invoice => {
        let invoiceDate = invoice[2];     

        // add code that finishes this filter
        return invoiceDate >= startDate && invoiceDate <= endDate;
    });

    // filter by paid status
    const paidFilter = getRadioStatus();
    if (paidFilter === 'paid') {
        filtered = filtered.filter(invoice => {
            return invoice[3] === true
        });
    } else if (paidFilter === 'unpaid') {
        filtered = filtered.filter(invoice => {
            return invoice[3] === false
        });
    }
    
    // display the filtered data
    displayInvoices(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    const invoices = getInvoices();
    displayInvoices(invoices);

    getElement("#filter_button").addEventListener("click", filterInvoices);
});