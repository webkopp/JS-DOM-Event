// - Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// - HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze zum Beispiel: getElementsByClassName, for-loop oder length.

// # ✨ Bonus
// - Wenn man nochmal auf den Button klickt, ändert sich die Hintergrundfarbe wieder zurück.

let myFunction = () => {
    const divStil = document.getElementsByClassName("style")
    const changeColor = Array.from(document.getElementsByClassName("example"))

    changeColor.forEach((element) => {
        element.style.backgroundColor = "purple"
    })
}