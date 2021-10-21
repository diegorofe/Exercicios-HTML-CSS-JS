
let spaceShip = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
    
}

function registerSpaceship(){
    spaceShip.name = prompt("Informe o nome da Nave")
    spaceShip.typeSpaceShip = prompt("Informe o tipo da nave")
    spaceShip.velocityMax = Number(prompt("Informe a velocidade máxima da nave em Km/s"))
}


function acceleration (){
    let acceleration = Number(prompt("Quanto você quer acelerar em Km/s?"))
    spaceShip.speedUp(acceleration)


    if(spaceShip.velocity > spaceShip.velocityMax){
        alert("A velocidade atual de " + spaceShip.velocity + "km/s,ultrapassa a velocidade máxima que é de " + spaceShip.velocityMax +"km/s")
        
    }
    
        
}

function speedStop(){
    alert("Dados da nave:\nNome: "+ spaceShip.name 
     + "\nTipo: " + spaceShip.typeSpaceShip
     + "\nVelocidade atual: " + spaceShip.velocity
     + "\nA nave será parada!")
     spaceShip.velocity = 0
}

function showMenu(){
    let chosenOption 
    do{
    chosenOption = prompt("Selecione uma opção para o que você deseja que a nave faça:\n1- Acelerar a nave\n2- Parar a nave\n3- Sair")
    
    switch(chosenOption){
        case "1":
            acceleration()
            break
        case "2":
            speedStop()
            break
        case "3":
            break
        default:
            alert("Opção inválida!")
    }
}while(chosenOption != "2")
}

registerSpaceship()
showMenu()



