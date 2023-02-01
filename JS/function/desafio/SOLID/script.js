let nomeNave = prompt("Qual o nome da nave?")
let velocidadeNave = 0
let opcao = ""
let loop = true

function Acelerar(){
    velocidadeNave += 5
    alert("Acelerando....")
}

function Desacelerar(){
    velocidadeNave -= 5
    alert("Desacelerando....")
}

function MostrarDiario(){
    alert("Preparando diário...")
    alert("Nome da Nave: "+ nomeNave + "\nVelocidade Atual: " + velocidadeNave)
}

while(loop == true){
   let opcao= prompt("MENU\n1-Acelerar\n2-Desacelerar\n3-Diario de bordo\n4-Sair")
   if(opcao == 1){
    Acelerar()
} else if(opcao == 2){
    Desacelerar()
}else if(opcao == 3){
    MostrarDiario()
}else if(opcao == 4){
    alert("SAINDO...")
    loop = false
}else{
    alert("Opção inválida!")
}
}
