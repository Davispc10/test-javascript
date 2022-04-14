function findBiggestValue(){
    let array = []

    for(let i = 0; i < 20; i++){
        array[i] = Math.random()*100
    }
    
    console.log("Maior valor: ", Math.max(...array))
}

findBiggestValue()