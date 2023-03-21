"use strict";

const obama = {
    name: "Barack Obama",
    nickname: "Hussein",
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
    appearances: 29,
    firstAppearance: "S12E02"

}

window.addEventListener("load", initApp);

function initApp() {
    
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
}