//Questão 02

let info = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

// 2.1
function converter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

info.forEach((person) => {console.log(`Seja bem vindo, ${converter(person.nome)} ${person.sobrenome} !\n`)});

// 2.2
console.log(`A soma das idades é: ${info.reduce((total, current) => total + current.idade, 0)}\n`);


//2.3
console.log("Essa Pessoa tem menos de 25 anos:\n", info.find((person) => person.idade < 25))


//2.4
console.log("Pessoas abaixo de 30 anos:\n", info.filter((person) => person.idade < 30));


//2.5
console.log(info.sort((perA, perB) => {
    if(perA.idade === perB.idade) 
         return perA.id - perB.id 
    
    return perB.idade - perA.idade 
}));