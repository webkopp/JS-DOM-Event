// - Diesmal sollst du eine Funktion schreiben, die beim Anklicken der Boxen die Farbe der angeklickten Box ändert.
// - Der HTML Code ist vorgegeben (siehe Code-Snippet).


function changeColor() {
    let divCard = document.querySelectorAll(".card")
    divCard.forEach(boxColor => {
        boxColor.addEventListener("click", () => {
            boxColor.style.background = "plum"
        })
    })
}