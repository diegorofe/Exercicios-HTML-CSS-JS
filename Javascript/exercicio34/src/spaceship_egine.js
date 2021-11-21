export default class {
    constructor(spaceship) {
        this.spaceship = spaceship


    }

    async turnOn() { 
    try {    
            let currentChargeChecking = this.checkCurrentLoad()
            let shieldChecking = this.testeShield()
            let results = await Promise.all([currentChargeChecking, shieldChecking])
            this.spaceship.shield = await this.shieldNormalize(results[1])
            console.log(`(${this.spaceship.name}) Partida autorizada Escudo (${this.spaceship.shield}) - Carga: (${this.spaceship.currentCharge})`)

        }catch(error){
            console.log(`${this.spaceship.name} Partida não autoriada: ${error}`)
        }

    }

    async checkCurrentLoad() {

        let currentCharge = this.spaceship.currentPercentCharge()
        if (currentCharge < 30) {
            return Promise.reject(`Carga em apenas ${currentCharge}GJ`)
        }
        return (currentCharge)
    }

    async testeShield() {

        let doubleShield = this.spaceship.shield * 2
        if (doubleShield < 100) {
            return Promise.reject("Escudo em sobrecarga")
        }
        return doubleShield
    }

    async shieldNormalize() {

        let nomalizeShield = shield * 0.7
        if (nomalizeShield > 120) {
            return Promise.reject("Escudo em sobrecarga!")
        }
        return nomalizeShield

    }
}