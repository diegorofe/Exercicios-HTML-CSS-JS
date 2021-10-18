let departuretDateEntry  = prompt("Digite a data de partida (formato DD/MM/YYYY")

let departureDate = moment(departuretDateEntry, "DD/MM/YYYY")

let today = moment()



let dateDif = today - departureDate

let chosenOption = prompt("Escolha como deseja armazenar o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == 1){
    let secundsOfDeparture = Math.round(dateDif / 1000)
    alert("Tempo de voo: " + secundsOfDeparture + " segundos")
} else if(chosenOption == 2){
    let minutesOfDeparture = Math.round(dateDif / 1000 /60)
    alert("Tempo de voo: " + minutesOfDeparture + " minutos")
}else if(chosenOption == 3){
    let hoursOfDeparture = Math.round(dateDif / 1000 /3600)
    alert("Tempo de voo: " + hoursOfDeparture + " horas")
}else if(chosenOption == 4){
    let daysOfDeparture = Math.round(dateDif / 1000 /3600/24)
    alert("Tempo de voo: " + daysOfDeparture + " dias")
} else{
    alert("A opção que você escolheu é inválida!")
}