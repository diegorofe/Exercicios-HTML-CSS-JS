import "core-js"
import "regenerator-runtime/runtime"

import Spaceship from "./spaceship";
import spaceship_egine from "./spaceship_egine";

const sophia = new Spaceship("Sopia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdã", 14, 10, 40)
const dwarfStar = new Spaceship("Estrela-Anã", 20, 4, 80 )

const sophiaEngine = new spaceship_egine(sophia)
const amisterdaEngine = new spaceship_egine(amsterda)
const dwarfStarEngine = new spaceship_egine(dwarfStar)

sophiaEngine.turnOn()
amisterdaEngine.turnOn()
dwarfStarEngine.turnOn()
