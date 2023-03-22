"use strict";

const obama = {
    name: "Barack Obama",
    nickname: "'Hussein'",
    image: "https://static.wikia.nocookie.net/southpark/images/f/f0/Barack-obama.png",
    occupation: "President of the United States (formerly)",
    age: 61,
    voicedBy: "Trey Parker",
    gender: "Male",
    religion: "Protestant",
    catchPhrase: "My fellow Americans",
    hairColor: "Black",
    schoolGrade: undefined,
    episodes: "S01E01, S01E02",
    appearances: 5,
    firstAppearance: "S12E02"

}

window.addEventListener("load", initApp);

function initApp() {
    const data = getData();
    //showAllChar(data)

    showChar(obama)   
    showChar(obama)
    showChar(obama)
    showChar(obama)
    showChar(obama)
    showChar(obama)
}


function getData() {
    const data = [];
    return data
}

function showAllChar(list) {
    //For x of y{showChar(x)}
}

function showChar(obj) {
    const html = /*html*/ `
    <article class="grid_item">
        <img src=${obj.image}>
        <h3>${obj.name}</h3>
        <h4>${obj.occupation}</h4>
    </article>
    `

    document.querySelector("#output").insertAdjacentHTML("beforeend", html);

    document.querySelector("article:last-child").addEventListener("click", charClicked);

    function charClicked() {
        showDialog(obj)
    }

}

function showDialog(obj) {
    // Vi laver const dialog = printer et dialog element ud.
    // Kan kalde støtte funktioner for at formatte date f.eks (obj.date = formatDate(date))
    
    console.log(obj.gender)
    console.log("hello");
    document.querySelector("#dialog").classList.remove("hidden")
    document.querySelector("#btn_close").addEventListener("click", closeDialog)
}

function closeDialog() {
    console.log("close");
    document.querySelector("#dialog").classList.add("hidden")
}