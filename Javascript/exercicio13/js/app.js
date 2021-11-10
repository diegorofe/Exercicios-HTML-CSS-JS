class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship()
    let chosenOption

    do {
        chosenOption = this.showInitialMenu()
        this.redrectFeature(chosenOption)
    }while (chosenOption != "3") 
        
    this.printAndExit()
    
    }


    enrollSpaceship() {
        let spaceshipName = prompt("Informe o nome da nave")
        let crewQuantity = prompt("Informe a quantidade de tripulantes")
        let spaceshipKind = this.askForSpaceshipKind()
        if(spaceshipKind == "1"){
            let weaponsQuantity = prompt("Quantas armas a nave possui?")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity )
        }else{
            let sitQuantity = prompt("Quantos lugares a nave tem?")
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitQuantity)
        }

}

askForSpaceshipKind(){
    let chosenOption
    
    while (!["1", "2"].includes(chosenOption)) {
       chosenOption = prompt("Escolha o tipo de nave:\n"
        +"1- Nave de Batalha\n"
        +"2- Nave de transporte")
    }
           
        return chosenOption
    }

showInitialMenu(){

    const promptMensage = "O que você deseja fazer?\n"+
                            "1- Acelerar a nave\n"+
                            "2- Trocar a nave\n"+
                            "3- Imprimir e sair"
    let chosenOption = prompt(promptMensage)
    while (!["1","2","3"].includes(chosenOption)) {
        chosenOption = prompt(promptMensage)
        
    }

    return chosenOption

}

redrectFeature(chosenOption){
    switch(chosenOption){
        case "1":
            this.accelerateSpaceship()
            break
        case "2":
            this.enrollSpaceship()
            break
    }
}

accelerateSpaceship() {
let accelerateSpaceship = Number(prompt("Quanto você gostaria de acelerar?"))
this.spaceship.speedUp(accelerateSpaceship)
}

printAndExit() {
    let finalMessage =  "Nome: " + this.spaceship.name + "\n" +
                        "Tipo de nave: "+ this.spaceship.kind + "\n" +
                        "Quantidade de Tripulantes: " +  this.spaceship.crewQuantity + "\n" +
                        "Velocidade atual: " + this.spaceship.currentVelocity + "\n"
    alert(finalMessage)
}

}
