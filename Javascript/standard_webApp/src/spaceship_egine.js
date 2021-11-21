export default class {
    constructor(spaceship) {
        this.spaceship = spaceship

    
    }

    turnOn() {
        let currentChargeChecking = this.checkCurrentLoad()
        let shieldChecking = this.testeShield()
        Promise.all([currentChargeChecking, shieldChecking]).then(results => {
            return this.shieldNormalize(results[1])
            
        }).then(newShield => {
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada Escudo (${this.spaceship.shield}) - Carga: (${this.spaceship.currentCharge})`)
        }).catch(error => {
            console.log(`${this.spaceship.name} Partida não autoriada: ${error}`)
        })
       
    }

    checkCurrentLoad() {
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.currentPercentCharge()
            if(currentCharge >= 30) {
                resolve(currentCharge)
            } else {
                reject(`Carga em apenas ${currentCharge}GJ`)
            }

        })
    }

    testeShield() {
        return new Promise((resolve, reject) => {
            let doubleShield = this.spaceship.shield * 2
            if(doubleShield >= 100){
                resolve(doubleShield)
            } else { 
                reject("Escudo em sobrecarga")
            }
        })
    }

    shieldNormalize() {
        return new Promise((resolve, reject) => {
            let nomalizeShield =  shield * 0.7
            if(nomalizeShield > 120) {
                reject("Escudo em sobrecarga!")
            } else {
                resolve(nomalizeShield)
            }
        })
    }
}