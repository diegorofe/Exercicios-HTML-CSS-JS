alert("Este arquivo será utilizado para calcular a diferença de idade de 2 pessoas");

let name_novo = prompt("Informe o nome da pessoa mais nova");
let idade_novo = prompt("Informe a idade pessoa mais nova");

let name_velho = prompt("Informe o nome da pessoa mais velha");
let idade_velho = prompt("Informe a idade pessoa mais velha");

let num = idade_velho-idade_novo;

alert("Dados do mais velho: "+ name_velho + " tem " + idade_velho + " anos." +"\n"
    + "Nome do mais novo: "+ name_novo + " tem " + idade_novo + " anos." +"\n" 
   +  "Diferença das idade: " + num );
        
