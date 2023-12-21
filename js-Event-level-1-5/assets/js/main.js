// - In dieser Übung wirst du dich weiter mit [JS Events](https://www.w3schools.com/js/js%5Fevents.asp) beschäftigen.
// - Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
// - Der HTML und CSS Code befindet sich im Code-Snippet.
// - Nutze getElementById(), Anzahl = 0; (es ist wichtig, hier zu initiieren!), Anzahl += 1; und innerHTML.

let clickMe = 0

function clickCounter() {
    clickMe += 1
    document.getElementById("clickMe").innerHTML = clickMe
}