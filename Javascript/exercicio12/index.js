
//create object spaceship
class Spaceship{
constructor(name, crewQuantity){
this.name = name;
this.crewQuantity = crewQuantity;
this.isHitched = false;
this.entraceDoorOpen = false
}

//method
hitch(){
    this.isHitched = true
    this.entraceDoorOpen = true
}


}

function showMenu(){
    let chosenOption
    while (chosenOption!= "1" && chosenOption!= "2" && chosenOption!= 3) {
        chosenOption = prompt("Selecione a opção desejada: "+
"\n1- Realizar engate"+
"\n2- Imprimir Naves" +
"\n3- Sair do programa") 
    }

    return chosenOption
}


function createSpaceship(){
    let spaceshipName = prompt("informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)

    return spaceship
}

function printSpaceship(spaceship){

    let spaceshipList = ""
    spaceship.forEach((spaceship, index) => {

        spaceshipList += (index +1) + "-" + spaceship.name + "(" + spaceship.crewQuantity + " tripulantes)\n"
        
    });

     
    alert(spaceshipList)
}


let hitchedSpaceship = []

let chosenOption

while (chosenOption!=3) {
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
          let spaceshipToadd = createSpaceship()
          spaceshipToadd.hitch()
          hitchedSpaceship.push(spaceshipToadd)
          break
        case "2":
            printSpaceship(hitchedSpaceship)
            break
    }
}







