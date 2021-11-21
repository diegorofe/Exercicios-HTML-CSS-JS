import Spaceship from "./spaceship";
import spaceship_egine from "./spaceship_egine";

const sophia = new Spaceship("Sopia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const dwarfStar = new Spaceship("Estrela-Anã", 20, 4 )

const sophiaEngine = new spaceship_egine(sophia)
const amisterdaEngine = new spaceship_egine(amsterda)
const dwarfStarEngine = new spaceship_egine(dwarfStar)

sophiaEngine.turnOn()
amisterdaEngine.turnOn()
dwarfStarEngine.turnOn()


