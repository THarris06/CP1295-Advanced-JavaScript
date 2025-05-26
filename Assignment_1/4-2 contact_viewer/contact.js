"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555",
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

document.addEventListener("DOMContentLoaded", () => {
    let loop = true;
    while (loop == true) {

        let command = prompt(menuString);
        if (command == "exit" || command == null) {
            loop = false;
        }
        else {
            let command_parts = command.split(" ")

            if (command_parts[0] == "list") {
                let list = [];
                for (let contact of contacts) {
                    let contact_parts = contact.split("|")
                    list += (contact_parts[0] + " - " + contact_parts[1] + "\n")
                }
                alert(list)
            }
            else if (command_parts[0] == "get") {
                if (command_parts[1] - 1 >= contacts.length || command_parts[1] -1 < 0) {
                    alert(`No data for #${command_parts[1]}`)
                }
                else {
                    let contact = contacts[command_parts[1] -1].split("|")
                    alert(`Contact info for ${contact[1]} \nEmail: ${contact[2]} \nPhone: ${contact[3]}`)
                }
            }
            else {
                alert("Invalid command")
            }
        }
    };
});

