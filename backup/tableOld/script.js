"use strict";

window.addEventListener("load", initApp);


function initApp() {
    loadJsonFile()

}


function loadJsonFile() {
    fetch("persons.json").
        then(function (response) {
            return response.json();
        })
        .then(function (persons) {
            let placeholder = document.querySelector("#data_output");
            let out = "";
            for (const person of persons) {
                out += `
                <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.email}</td>
                <td>${person.number}</td>
                </tr>
                `;
            }
            placeholder.innerHTML = out;
    })
}