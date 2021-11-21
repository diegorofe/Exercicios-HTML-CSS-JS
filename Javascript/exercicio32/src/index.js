const spaceship = {
    name: "Rontaro",
    currentBateryCharge: 50,
    consumptionPerKms: 0.00008
  }
  const updateBateryCharge = function(chargeConsumed) {
    return new Promise((resolve, reject) => {
      spaceship.currentBateryCharge -= chargeConsumed
      if(spaceship.currentBateryCharge > 0) {
        resolve(spaceship.currentBateryCharge)
      } else {
        reject("Bateria esgotada! Nave será desativada em alguns segundos.")
      }
    })
  }
  const calculateBateryConsumption = function(velocity, seconds) {
    return new Promise((resolve, reject) => {
      if(spaceship.consumptionPerKms <= 0 || velocity <= 0) {
        reject("Nave está parada!")
      } else {
        let chargeConsumed = spaceship.consumptionPerKms * velocity * hours
        resolve(chargeConsumed)
      }
    })
  }

  calculateBateryConsumption(98,3000).then(chargeConsumed => {
      return updateBateryCharge(100)
  }).then(newCharge => {
      console.log(`Carga atural: ${newCharge}`)
  }).catch(error => {
      console.log(error)
  })