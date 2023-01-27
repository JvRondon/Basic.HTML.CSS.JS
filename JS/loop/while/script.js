let constallation = "Andromeda"
let pos= 0
let constallationLenght = constallation.length

while(pos<constallationLenght){
    if(constallation[pos] == "a" || constallation[pos] == "A"){
        console.log(pos)
    }
    pos +=1
}