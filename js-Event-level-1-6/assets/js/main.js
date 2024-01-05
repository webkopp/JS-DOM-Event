// - In dieser Übung lernst du den [Eventhandler change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change%5Fevent) kennen.
// - Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.
// - Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.
// - Nutze: event.target.value, addEventListener("change", (event) => {...} ) und innerHTML oder textContent.

const selection = document.querySelector("#select")
const output = document.querySelector(".output")
selection.addEventListener("change", () => {
    if (selection.value !== ""){

        output.innerHTML = "Du hast " + selection.value + " gewählt"
    }else {
        output.innerHTML = "Du musst erst wählen"
    }
})