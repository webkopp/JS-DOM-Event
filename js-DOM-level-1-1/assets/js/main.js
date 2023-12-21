// - Lernziel: die dynamische Erstellung von HTML-Elementen und ihre Integration in das DOM mithilfe der createElement-Methode in JavaScript.
// - Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
// - Schreibe die Function “addElement”. Beim Klicken auf den Button sollte das eingegebene Element der Liste hinzugefügt werden. Nutze hierfür JS um dynamisch neue Listenelemente hinzuzufügen.
// - Das Eingabefeld soll nach jedem Hinzufügen geleert werden.
// - Das HTML ist vorgegeben (siehe Code-Snippet).
// - Du kannst folgendes nutzen: createElement, appendChild, getElementById, textContent, EventListener.

// # ✨ Bonus
// - Leider kann man auch leere Eingaben der Liste hinzufügen.
// - Passe deinen Code so an, dass vorher geprüft wird, ob die Eingabe gültig ist und somit leere Eingaben auch nicht hinzugefügt werden können.
// - Du kannst folgendes nutzen: Conditionals und string-Methods.

let myProducts = document.querySelector("#inputText")

let toMyList = document.querySelector("#myList")

myProducts.addEventListener("change", () => {
    let li = document.createElement("li")
    li.textContent = myProducts.value
    toMyList.appendChild(li)
})