"use strict";


window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#add_person_button").addEventListener("click", showFan);
    //getFromLocalStorage()
}

function showFan() {
    console.log("ShowFan");
    this.removeEventListener("click", showFan);
    const addPersonFan = document.querySelector("#add_new_person_popup");
    runStartAnimation(addPersonFan)

    document.querySelector("#button_close").addEventListener("click", closeFan);
    document.querySelector("#button_add").addEventListener("click", saveForm);

}

function closeFan() {
    console.log("CloseFan");
    document.querySelector("#button_close").removeEventListener("click", closeFan)
    document.querySelector("#button_add").removeEventListener("click", saveForm);

    runEndAnimation();
}

function saveForm() {
    closeFan();
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#phone_number").value;

    const person = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        number: number
    };

    setJSON(person);

    //setData(firstName, lastName, email, number);
}


function runStartAnimation(addPersonFan) {
    addPersonFan.classList.remove("hidden");
    addPersonFan.classList.add("slideLeftToRight")
}

function runEndAnimation() {
    document.querySelector("#add_new_person_popup").classList.add("slideRightToLeft");
    document.querySelector("#add_new_person_popup").addEventListener("animationend", removeAnimation)

}

function removeAnimation() {
    console.log("RemoveAnimmation and add hidden");
    this.removeEventListener("animationend", removeAnimation);
    document.querySelector("#add_new_person_popup").classList.remove("slideLeftToRight");
    document.querySelector("#add_new_person_popup").classList.remove("slideRightToLeft");
    document.querySelector("#add_new_person_popup").classList.add("hidden");
    document.querySelector("#add_person_button").addEventListener("click", showFan);
}





/*============ SETTERS =================*/

function setJSON(object) {
    localStorage.setItem("Person", JSON.stringify(object))
}

function getJSON() {
    return JSON.parse(localStorage.getItem("Person"));
}



/*
function setData(firstName, lastName, email, number) {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setNumber(number);

}

function setFirstName(firstName) {
    localStorage.setItem("firstName", firstName);
}


function setLastName(lastName) {
    localStorage.setItem("lastName", lastName);

}

function setEmail(email) {
    localStorage.setItem("email", email);

}

function setNumber(number) {
    localStorage.setItem("number", number)

}
*/

/*========== GETTERS ==========*/




/*
function getData() {
    getFirstName();
    getLastName();
    getEmail();
    getNumber();

}


function getFirstName() {
    return localStorage.getItem("firstName");
}

function getLastName() {
    return localStorage.getItem("lastName");
}

function getEmail() {
    return localStorage.getItem("email");
}

function getNumber() {
    return localStorage.getItem("number");
}
*/