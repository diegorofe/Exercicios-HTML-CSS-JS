let spaceShipName = prompt("Informe o nome da nave:")

let character = prompt("Qual o caracter que você deseja substituir?")

let characterChosen = prompt("Informe o novo caracter")

let newName = ""

for(let i = 0; i < spaceShipName.length; i++){
    
    (spaceShipName[i] == character) ? newName += characterChosen : newName += spaceShipName[i]

}

alert(newName)