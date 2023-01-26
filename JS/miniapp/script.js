let realeaseDateEntry = prompt("Informe a data de partida da nave: (formato DD/MM/YYYY)")

let realeaseDate = moment(realeaseDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - realeaseDate

let chosenOption = promt("Escolha de que forma gostaria de ver a diferença:\n 1 - Segundos\n2 - Minutos\n 3 - Horas\n 4 - Dias")

if (chosenOption == '1' ){
    let secondsOfDeparture = Math.round(dateDiff/1000)
    alert("Tempo de vôo: "+ secondsOfDeparture +" segundos")
}else if(chosenOption == '2') {
    let minutesOfDeparture = Math.round(dateDiff / 1000/60)
    alert("Tempo de vôo: "+ minutesOfDeparture +" minutos")
}else if(chosenOption == '3'){
    let hoursOfDeparture = Math.round(dateDiff / 1000/3600)
    alert("Tempo de vôo: "+ hoursOfDeparture +" horas")
}else if(chosenOption == '4'){
    let daysOfDeparture = Math.round(dateDiff / 1000/3600/24)
    alert("Tempo de vôo: "+ daysOfDeparture +" dias")
} else {
    alert("OPÇÃO INVÁLIDA!")
}