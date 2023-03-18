"use strict";


window.addEventListener("load", initApp);

function initApp() {
    
    getFromLocalStorage()
}









/*============ SETTERS =================*/


function setData(firstName, lastName, email, number) {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setNumber(number);

}

function setFirstName(firstName) {
    localStorage.setItem("firstName", firstName);
}


function setLastName(lastName){
    localStorage.setItem("lastName", lastName);
    
}

function setEmail(email){
    localStorage.setItem("email", email);
    
}

function setNumber(number){
    localStorage.setItem("number", number)

}

/*========== GETTERS ==========*/

function getData() {
    getFirstName();
    getLastName();
    getEmail();
    getNumber();

}


function getFirstName() {
    return 
}

function getLastName() {
    
}

function getEmail() {
    
}

function getNumber() {
    
}