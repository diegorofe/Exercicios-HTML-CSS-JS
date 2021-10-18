let spaceShip = prompt("Informe o nome da nave")
let velocityInit = 0

optionMenu(velocityInit)

function optionMenu(velocity){
    let option = prompt("Escolha umas das opções para a nave:\n1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir os dados de bordo\n4- Sair do programa")
    switch(option){
        case "1":
        alert(velocityUp(velocity))
        optionMenu(velocityUp(velocity))
        break
        case "2":
            alert(slowDown( velocity))
            optionMenu(slowDown(velocity))
            break
        case "3":
            printSpaceShip(velocity)
            break
        case "4":
            break
        default: optionMenu(velocity)
    }
}

function velocityUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity){
    let newVelocity = velocity
    //(velocity >= 5) ? return newVelocity : alert("A nave não pode ter uma velocidade negativa. Retornaremos ao menu!" + optionMenu()) 
    
    if(velocity >= 5){
        
        return newVelocity - 5

    }else{
        alert("A nave não pode ter uma velocidade negativa. Retornaremos ao menu!")
        optionMenu(newVelocity)
    }

}

function printSpaceShip(velocity){
    alert("A nave " + "??  está a uma velocidade atual de " + velocity)
}