const planet = require('./planet')
const planetOperation = require('./planet_operation')


let planets = [
    new planet("Mercúrio", 0.39),
    new planet("MVenus", 0.72),
    new planet("MTerra", 1),
    new planet("Marte", 1.52),
    new planet("Mercúrio", 5.2),
    new planet("Júpiter", 9.53),
    new planet("Saturno", 19.1),
    new planet("Netuno", 30),
]

planets.forEach(planet => {
    distanceFromSun = planetOperation.convertAUtoKm(planet.auToSun).toFixed(2)
    console.log(planet.name + " - "+ planet.auToSun + "AU - " + distanceFromSun + "km")
    console.log(planet.name + " - "+ planet.auToSun + "AU - " + distanceFromSun + "km")
    
})