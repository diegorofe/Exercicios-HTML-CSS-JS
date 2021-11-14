
// <option disabled selected data-default></option>
class App {
    
addPropety() {
    
    
    event.preventDefault()   
    let kind = document.querySelector("select[name='kind'] option:checked").textContent
    let area = document.querySelector("input[name='area']").value
    let rented = document.querySelector("input[name='rented']").checked

    let property = new Property(kind, area, rented)
    this.addOnPropretyList(property)
    this.cleanForm()
}



addOnPropretyList(property) {

    let listElement = document.createElement('li')
    let propertyInfo = " Tipo de imóvel: " + property.kind + " | " + property.area + "m² " 

    if(property.rented){
        let rentedMark = this.createRentedMark()
        listElement.appendChild(rentedMark)
      
    } else{
        let rentedOn = this.createRentedOn()
        listElement.appendChild(rentedOn)
    }
    
    listElement.innerHTML += propertyInfo
    let butttonToRemove = this.createRemoveButton()
    listElement.appendChild(butttonToRemove)
    document.getElementById("realty-list").appendChild(listElement)  
     
}

createRentedOn(){
    let rentedOn = document.createElement("span")
    rentedOn.style.backgroundColor = "green"
    rentedOn.innerText = "Disponível"
    return rentedOn
}

createRentedMark(){

    let  rentedMark = document.createElement("span")
    rentedMark.style.color = "white"
    rentedMark.style.backgroundColor = "red"
    rentedMark.innerText = "Alugado"
    return rentedMark
}

createRemoveButton() {

    let butttonToRemove = document.createElement("button")
    butttonToRemove.setAttribute("onclick" , "app.remove(this)")
    butttonToRemove.innerText = "Remover"
    return butttonToRemove
}

cleanForm() {
    
    document.querySelector("form").reset()
  
}

remove(button) {
    
    let liToRemove = button.parentNode
    document.getElementById("realty-list").removeChild(liToRemove)
}


}

