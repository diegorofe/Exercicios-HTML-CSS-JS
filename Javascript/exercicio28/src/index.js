import Planet from './planet'

import { convertAUtoKm } from './planet_operation'

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("MVenus", 0.72),
    new Planet("MTerra", 1),
    new Planet("Marte", 1.52),
    new Planet("Mercúrio", 5.2),
    new Planet("Júpiter", 9.53),
    new Planet("Saturno", 19.1),
    new Planet("Netuno", 30),
]

planets.forEach(planet => {
    let distanceFromSun = convertAUtoKm(planet.auToSun).toFixed(2)
    console.log(planet.name + " - "+ planet.auToSun + "AU - " + distanceFromSun + "km")
    console.log(planet.name + " - "+ planet.auToSun + "AU - " + distanceFromSun + "km")
    
})