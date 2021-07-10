// Code your solutions in this file

function printBadges(arrayOfNames){
    for(let i=0; i<arrayOfNames.length; i++){
        console.log("Welcome " + arrayOfNames[i] + "! You are employee #" + (i+1) +".")
    }

    return arrayOfNames
}

function tailsNeverFails(){
    let flip = Math.random() // .994
    let i = 0

    while (flip >= 0.5) {
        console.log(flip)
        i++
        flip = Math.random()
    }
    // more efficient -->
    // while(Math.random() >= .5) { i++ }
    return `You got ${i} tails in a row!`

}
