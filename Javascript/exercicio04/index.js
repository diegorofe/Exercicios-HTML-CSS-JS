let distanceLightYears = prompt("Informe a distância em anos-luz");

let chosenUnd = prompt("Escolha uma das opções abaixo para converção:\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)");

let distanceConverted = 0;

const pc = 0.30660;
const au = 63241.1;
const km = 9.5 * Math.pow(10, 12)


switch(chosenUnd){
    case "1":
        chosenUnd = "Parsec(pc)"
        distanceConverted = distanceLightYears * pc
    alert("Distância em anos-luz informada: " + distanceLightYears + "\nConversão desejada: " + distanceConverted + " " + chosenUnd )
        break
        case "2":
            chosenUnd = "Unidade astronômica(AU)"
            distanceConverted = distanceLightYears * au
        alert("Distância em anos-luz informada: " + distanceLightYears + "\nConversão desejada: " + distanceConverted + " " + chosenUnd )
            break
        case "3":
                chosenUnd = "Quilômetro(Km)"
                distanceConverted = distanceLightYears * km
            alert("Distância em anos-luz informada: " + distanceLightYears + "\nConversão desejada: " + distanceConverted + " " + chosenUnd )
             break
           
            default:
                alert("Distância em anos-luz informada: " + distanceLightYears + "\nConversão desejada: Conversão fora do escopo"  )
}