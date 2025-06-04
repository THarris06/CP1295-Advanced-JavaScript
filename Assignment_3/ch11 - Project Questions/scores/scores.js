"use strict";

const getElement = selector => document.querySelector(selector);

let students = [['tyson', 'harris', 80], ['steven', 'loveys', 70], ['matt', 'king', 60]];

const displayScores = () => {
    const sortValue = getElement("#sort").value;
    const filterValue = getElement("#filter").value;

    // filter scores
    const filteredStudents = [];
    for (let student of students) {
        if (student[2] >= filterValue) {
            filteredStudents.push(student);
        }
    }

    // sort filtered scores
    if (sortValue == 'fname') {
        filteredStudents.sort((a, b) => a[0].localeCompare(b[0]));
    }
    else if (sortValue == 'lname') {
        filteredStudents.sort((a, b) => a[1].localeCompare(b[1]));
    }
    else if (sortValue == 'score') {
        filteredStudents.sort((a, b) => b[2] - a[2]);
    }
    
    // calculate the average and build display string
    let average = 0;
    let display_string = '';
    for (let student of filteredStudents) {
        display_string += student[0] + ', ' + student[1] + ': ' + student[2] + '\n';
        average += student[2];
    };
    average /= filteredStudents.length;

    // display 
    getElement("#score_list").textContent = display_string;
    getElement("#avg").textContent = average.toFixed(2);
};

document.addEventListener("DOMContentLoaded", () => {
    
    getElement("#add_score").addEventListener("click", () => {   
        const first_name = getElement("#first_name").value;
        const last_name = getElement("#last_name").value;
        const score = parseInt(getElement("#score").value);

        students.push([first_name, last_name, score]);
    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        const inputs = document.querySelectorAll("input");
        for (let input of inputs) {
            if (input.type != 'button') {
                input.value = '';
            }
        }
        getElement("#score_list").textContent = '';
        getElement("#avg").textContent = '';
        inputs[0].focus();
    });

    getElement("#sort").addEventListener("change", () => {
        displayScores()
    });
    
    getElement("#filter").addEventListener("change", () => {
        displayScores()
    });

    // set focus on first text box on load
    getElement("#first_name").focus();
});