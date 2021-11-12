function fundoAzul() {
    let element = document.getElementById("style-text")

    element.style.backgroundColor = "blue"
}

function transparent() {
    document.getElementById("style-text").style.background = "transparent"
}

function setRedFont() {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

function removeColor() {
    document.getElementById("style-text").classList.remove("red-color")
}