function findBiggestValue(){
    let array = []
    let aux = 0

    for(let i = 0; i < 20; i++){
        array[i] = Math.random()*100

        if(i==0){
            aux = array[i]
        }
		if(array[i] > aux){
            aux = array[i]
        }
    }
    
    console.log("Maior valor: ", aux)
}

findBiggestValue()