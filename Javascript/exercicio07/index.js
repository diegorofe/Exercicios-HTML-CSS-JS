let spaceShipName = prompt("Informe o nome da nave:")

let character = prompt("Informe o caracter proibido")

let newName = " "

for(let i = spaceShipName.length -1; i >= 0; i--){
    
    
    //(spaceShipName[i] == character) ? newName += characterChosen : newName += spaceShipName[i]
if(spaceShipName[i] != character){
    newName += spaceShipName[i]
}else{ break
}
}

alert("Nome original da nave: "+ spaceShipName + "\nNome após ocultação: " + newName)