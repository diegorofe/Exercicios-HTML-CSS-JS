class BattleSpaceship extends Spaceship{
    constructor(name, crewQuantity, weaponsQuantity ){
        super(name, crewQuantity)
        this.weaponsQuantity = weaponsQuantity
        this.kind = "Batalha"
    }
}