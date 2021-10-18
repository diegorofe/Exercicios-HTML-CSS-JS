/*
let velocityInit = 150

for(let i = 0;velocityInit > 0 ; i++){
    (velocityInit>=20) ? velocityInit -= 20 : velocityInit -= 10
    alert(velocityInit)
}
*/

//Se aprofundando em funções

function slowDown(velocity, printer){
    let deceleration = 20

    while(velocity>0){
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada comportas podem ser abertas")
}

let spaceShipVelocity = 150

slowDown(spaceShipVelocity, velocity => console.log("Velocidade atual: "+ velocity))