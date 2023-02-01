let nomeNave = prompt("Insira o nome da nave:");
let velocidade = 0;

while (true) {
  let opcao = prompt(
    "Menu de opções:\n1 - Acelerar 5 km\n2 - Desacelerar 5 km\n3 - Mostrar diário de bordo\n4 - Sair"
  );

  switch (opcao) {
    case "1":
      velocidade += 5;
      alert("Acelerando...");
      break;
    case "2":
      if (velocidade > 0) {
        velocidade -= 5;
        alert("Desacelerando...");
      } else {
        alert("A velocidade já está em 0. Não é possível desacelerar.");
      }
      break;
    case "3":
      alert(`Nome da nave: ${nomeNave}\nVelocidade atual: ${velocidade} km/h`);
      break;
    case "4":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida. Escolha novamente.");
  }
}