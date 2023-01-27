let nomeNave = prompt("Qual o nome da nave?")
let velocidadeNave = 0
verdadeiro = true


while(verdadeiro){
    let opção = prompt("Selecione uma das opções abaixo:\n 1-Acelerar 5 km/h\n 2-Desacelerar 5 km/h\n 3-Mostrar diário de bordo\n4-Sair");
    
    switch(opção) {
        case "1":
            alert("Acelerando....")    
            velocidadeNave +=5
            break;

        case "2":
            if(velocidadeNave >0){
                alert("Desacelerando....")
                velocidadeNave-=5
                break;
            }else if(velocidadeNave <4){
                alert("Velocidade quase zerada!")
                break;
            }
        case "3":
            alert("Estamos na nave "+ nomeNave + " atualmente com " + velocidadeNave + " km/s!")
            break;
        
        case "4":
        verdadeiro = false;
        alert("Foi um ótimo vôo! Até mais piloto!")
        break;

        default:
            alert("Selecione opções válidas!")
        
  
    } 
}
