"use strict";

// const obama = {
//     name: "Barack Obama",
//     nickname: "'Hussein'",
//     image: "https://static.wikia.nocookie.net/southpark/images/f/f0/Barack-obama.png",
//     occupation: "President of the United States (formerly)",
//     age: 61,
//     voicedBy: "Trey Parker",
//     gender: "Male",
//     religion: "Protestant",
//     catchPhrase: '"My fellow Americans"',
//     hairColor: "Black",
//     schoolGrade: undefined,
//     episodes: "S12E02, S12E12, S14E01, S15E02, S16E14",
//     appearances: 5,
//     firstAppearance: "S12E02"

// }

let showingGrid = true;

window.addEventListener("load", initApp);

async function initApp() {
    const data = await getData("https://raw.githubusercontent.com/AliHMohammad/Data-Ali/main/obama.json");
    showAllChar(data)

    document.querySelector("#button_change_display").addEventListener("click", switchFont);
    // showChar(obama)
    //const obama = await getData("https://raw.githubusercontent.com/AliHMohammad/Data-Ali/main/obama.json")
    //showChar(obama)
}

function switchFont() {
    
    if (showingGrid) {
        showingGrid = false;
        document.querySelector("#grid_output").classList.add("hidden");
        document.querySelector("#table_section").classList.remove("hidden");
        document.querySelector("#button_change_display").textContent = "Change to Grid"
    } else if (!showingGrid) {
        showingGrid = true;
        document.querySelector("#table_section").classList.add("hidden");
        document.querySelector("#grid_output").classList.remove("hidden")
        document.querySelector("#button_change_display").textContent = "Change to Table"

    }

}

async function getData(link) {
    const response = await fetch(link);
    const data = await response.json();
    return data;
}

function showAllChar(list) {

    for (const obj of list) {
        showChar(obj);
    }
}

function showChar(obj) {
    
    const htmlGrid = /*html*/ `
    <article class="grid_item">
        <img src=${obj.image}>
        <h3>${obj.name}</h3>
        <h4>${obj.occupation}</h4>
    </article>
    `
    
    document.querySelector("#grid_output").insertAdjacentHTML("beforeend", htmlGrid);
    document.querySelector("article:last-child").addEventListener("click", charClicked);
    
    
    const htmlTable = /*html*/ `
    <tr>
        <td><img src=${obj.image}></td>
        <td>${obj.name}</td>
        <td>${obj.occupation}</td>
        <td>${obj.age}</td>
    </tr>
    `

    document.querySelector("#tbody_output").insertAdjacentHTML("beforeend", htmlTable);
    document.querySelector("tbody tr:last-child").addEventListener("click", charClicked);
    

    function charClicked() {
        showDialog(obj);
    }
}

function showDialog(obj) {
    
    // Kan kalde støtte funktioner for at formatte date f.eks (obj.date = formatDate(date))
    
    obj.nickname = nullNickname(obj.nickname);
    obj.schoolGrade = nullSchoolGrade(obj.schoolGrade);
    obj.catchPhrase = nullCatchphrase(obj.catchPhrase);
    obj.episodes = nullEpisodes(obj.episodes);
    obj.appearances = nullAppearances(obj.appearances);
    correctName(obj.name)

    document.querySelector("#dialog_h4intro").textContent = `${obj.name} is ${obj.age} years old and is voiced by ${obj.voicedBy}. His first appearance was in ${obj.firstAppearance}.`

    document.querySelector("#dialog_img_src").src = obj.image;
    document.querySelector("#dialog_h3title").textContent = obj.name.toUpperCase();
    document.querySelector("#dialog_name").textContent = obj.name;    
    document.querySelector("#dialog_nickname").textContent = obj.nickname;
    document.querySelector("#dialog_occupation").textContent = obj.occupation;
    document.querySelector("#dialog_age").textContent = obj.age;
    document.querySelector("#dialog_voicedby").textContent = obj.voicedBy;
    document.querySelector("#dialog_gender").textContent = obj.gender;
    document.querySelector("#dialog_religion").textContent = obj.religion;
    document.querySelector("#dialog_catchphrase").textContent = obj.catchPhrase;
    document.querySelector("#dialog_haircolor").textContent = obj.hairColor;
    document.querySelector("#dialog_schoolgrade").textContent = obj.schoolGrade;
    document.querySelector("#dialog_episodes").textContent = obj.episodes;
    document.querySelector("#dialog_appearances").textContent = obj.appearances;
    document.querySelector("#dialog_firstappearance").textContent = obj.firstAppearance;

    showStartAnimation()
    document.querySelector("#btn_close").addEventListener("click", closeDialog);
}

function closeDialog() {
    document.querySelector("#btn_close").removeEventListener("click", closeDialog);
    showCloseAnimation()
}

function showStartAnimation() {
    document.querySelector("#dialog").classList.add("slideLeftToRight");
    document.querySelector("#dialog").classList.remove("hidden")
}


function showCloseAnimation() {
    document.querySelector("#dialog").classList.add("slideRightToLeft");
    document.querySelector("#dialog").addEventListener("animationend", removeAnimationsAddHidden);
}

function removeAnimationsAddHidden() {
    document.querySelector("#dialog").removeEventListener("animationend", removeAnimationsAddHidden);
    document.querySelector("#dialog").classList.add("hidden");
    document.querySelector("#dialog").classList.remove("slideRightToLeft");
    document.querySelector("#dialog").classList.remove("slideLeftToRight");
}


/* ================= HELPER FUNCTIONS ================= */

function nullNickname(nickname) {

    if (!nickname || nickname == "undefined" || nickname == "null") {
        return "None"
    } else {
        return nickname
    }
}

function nullSchoolGrade(grade) {

    if (!grade || grade == "undefined" || grade == "null") {
        return "None"
    } else {
        return grade
    }
}

function nullCatchphrase(catchphrase) {

    if (!catchphrase || catchphrase == "undefined" || catchphrase == "null") {
        return "None"
    } else {
        return catchphrase
    }
}

function nullEpisodes(episodes) {

    if (!episodes || episodes == "undefined" || episodes == "null") {
        return "Unknown"
    } else {
        return episodes
    }
}

function nullAppearances(appearances) {

    if (!appearances || appearances == "undefined" || appearances == "null") {
        return "Unknown"
    } else {
        return appearances
    }
}

function correctName(name) {
    let arr = name.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        let namePart = arr[i];

        const firstLetter = namePart[0].toUpperCase();
        const restOfNamePart = namePart.toLowerCase().slice(1);

        const correctName = firstLetter.concat(restOfNamePart)
        arr[i] = correctName
    }

    // return arr.join(" ");
}