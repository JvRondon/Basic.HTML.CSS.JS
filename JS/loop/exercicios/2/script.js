let spaceship = ""
let newSpaceship = ""
let whichCarachterChange = ""
let NewCarachter = ""
spaceship = prompt("Qual o nome da nave?")

whichCarachterChange = prompt("Qual letra quer trocar?")

NewCarachter = prompt("Por qual letra quer trocar?")

for(let i = 0; i <spaceship.length; i++){
    if(spaceship[i] == whichCarachterChange){
        newSpaceship += NewCarachter
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log("Esse é o novo nome da nave: " + newSpaceship + "!")