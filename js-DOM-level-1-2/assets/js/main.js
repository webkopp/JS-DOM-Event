// - Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// - HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze zum Beispiel: getElementsByClassName, for-loop oder length.

// # ✨ Bonus
// - Wenn man nochmal auf den Button klickt, ändert sich die Hintergrundfarbe wieder zurück.

const myFunction = () => {
    const itemsOfHTML = document.getElementsByClassName("example")

    for (items of itemsOfHTML) {
        if(items.style.backgroundColor === ""){
            items.style.backgroundColor = "black"
            items.style.color = "white"
        }else if (items.style.backgroundColor === "black"){
            items.style.backgroundColor = ""
            items.style.color = ""
        }
    }
}