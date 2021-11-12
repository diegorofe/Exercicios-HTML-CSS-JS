 function saveHouse() {

    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let city = document.querySelector("input[name='city']").value
    let neighbordhood = document.querySelector("input[name='neighbordhood']").value



    let newList = document.createElement('li')
    newList.innerText = area + "m², número " + number + "(" + neighbordhood + "," + city



    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")


    newList.appendChild(removeButton)

    console.log(newList)

    document.getElementById("house-List").appendChild(newList)

 }


 function removeHouse(button) {

    let liRemove = button.parentNode
    document.getElementById("house-List").removeChild(liRemove)

 }