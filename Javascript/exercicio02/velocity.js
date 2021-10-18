let nomePiloto = prompt("Piloto, informe seu nome.");
let velocity = 0;
velocity = prompt("A que velocidade você gostaria de acelerar a nave?");

let conf = confirm("Estamos indo para a velocidade " + velocity + "km/s ok?");


//zero ou menor
if(velocity <= 0){
alert("A nave está parada. Considere partir e aumentar a velocidade!");
} else if(velocity >0 && velocity<40){
//menor que 40
alert("Você está devagar, podemos aumentar mais.");
} 

else if(velocity >=40 && velocity < 80){
//maior ou igual a 40 e menor que 80
alert("Parece uma boa velocidade para manter.");
}

else if(velocity >=80 && velocity < 100){
//igual a 80 e menor que 100
alert("Velocidade alta. Considere diminuir.");
}

else{
//maior ou igual a 100
alert("Velocidade perigosa. Controle automático forçado");
}

alert("Piloto: " + nomePiloto + "\nVelocidade: " + velocity);



