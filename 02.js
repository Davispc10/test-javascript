function toCapitalCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
}

var array = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

var ageSum = 0

function sumOfAllAges(index){
    if(index == array.length-1){
        console.log("Soma das idades: ", ageSum)
    }
}

function isUnderTweentyFive(name, age){
    if(age <= 25){
        console.log(toCapitalCase(name), "tem", age, "anos")
    }
}

function isUnderThirty(name, age){
    if(age <= 30 && age>= 26){
        console.log(toCapitalCase(name), "tem", age, "anos")
    }
}

function greetings(){ 
    array.forEach((element, i) => {
        ageSum = element.idade + ageSum
        console.log("Olá,", toCapitalCase(element.nome), element.sobrenome + "!")
        isUnderTweentyFive(element.nome, element.idade)
        isUnderThirty(element.nome, element.idade)
        sumOfAllAges(i)
    }) 
}

function sort(array){
    let aux = array[0]
    
    for(let i = 0; i < array.length-1; i++){ 
        for(let j = 0; j < array.length-1; j++){  
    
            if (array[j].idade == array[j+1].idade){ 
                if(array[j].id < array[j+1].id){ 
                    aux = array[j]
                    array[j] = array[j+1] 
                    array[j+1] = aux
                }
            }
    
            if (array[j].idade < array[j+1].idade){ // 
                aux = array[j]
                array[j] = array[j+1] 
                array[j+1] = aux
            }
            
        }
    }
    
    array.forEach(element=>{
        console.log(element)
    })
}

greetings()
sort(array)