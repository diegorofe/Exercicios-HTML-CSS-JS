let spaceShipName = prompt("Informe o nome da nave:")

let fold = prompt("Deseja entrar na dobra espacial?\n1- sim\n2- não")

let nextFold = prompt("NAVE EM MODO DE DOBRA\nDeseja realizar a próxima dobra espacial?\n1- sim\n2- não")

let cont =0

while( nextFold == "1"){
    nextFold = prompt("Deseja realizar a próxima dobra espacial?\n1- sim\n2- não")
    cont ++
}

alert("A nave " + spaceShipName + " realizou " + cont + " dobras consecutivas")