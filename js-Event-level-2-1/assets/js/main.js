// - Schreibe eine kleine App, die die Hintergrundfarbe deiner Webseite ändert. Schaue dir die Vorschau an und versuche es umzusetzen.
// - HTML und CSS befinden sich im Code-Snippet.

// function Mycolor() {
//     let element = document.getElementById("#grauTaste")
//     element.style.backgroundColor = "plum"
//     }

const grey = document.getElementById("grauTaste")
grey.addEventListener("click", (event) => {
    document.body.style.backgroundColor = "grey"
})

const white = document.getElementById("weissTaste")
white.addEventListener("click", (event) => {
    document.body.style.backgroundColor = "white"
})

const blue = document.getElementById("blauTaste")
blue.addEventListener("click", (event) => {
    document.body.style.backgroundColor = "blue"
})

const yellow = document.getElementById("gelbTaste")
yellow.addEventListener("click", (event) => {
    document.body.style.backgroundColor = "yellow"
})