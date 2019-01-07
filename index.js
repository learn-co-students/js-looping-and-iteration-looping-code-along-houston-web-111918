// Code your solutions in this file

function printBadges(array){

    for(let x = 1; x <= array.length; ++x){
    
       console.log(`Welcome ${array[x-1]}! You are employee #${x}.`)
        // USE BACK TICKS FOR INTERPOLATION!!!!!
    }
    return array
}

function tailsNeverFails(){
    let tails = 0
    while(Math.random() >= 0.5){
        tails++
    }
    return `You got ${tails} tails in a row!`
}

