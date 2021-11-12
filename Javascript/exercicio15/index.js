function show() {
    let element = document.getElementById("name")
    console.log(element.value)
}

function show() {
    let elements = document.getElementsByName("phone")
    console.log(elements)
}

function show() {
    let elements = document.getElementsByName("phone")
    console.log(elements[0].value)
}

function show() {
    let elements = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements[1].value)
    
}

function show() {
    let elements = document.getElementsByTagName("input")
    console.log(elements)
    
}