const arr = [["Fenix", 1, true], ["Golias",10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]

let espaconaveMaior = arr.filter(espaconave => {
    return espaconave[1] > 9
}).map(espaconave =>{
    return espaconave[0]
})

let engatePendente = arr.findIndex(espaconave => {
    return espaconave[2] == false
})

let caixaAlta = arr.map(espaconave => {
    return espaconave[0].toUpperCase()
})

console.log(espaconaveMaior)
console.log(engatePendente)
console.log(caixaAlta)