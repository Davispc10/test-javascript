const data = [
    { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
]

// 2.1
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

data.forEach((person) => {
    const firstName = capitalize(person.nome);
    const lastName = capitalize(person.sobrenome);

    console.log("Olá, " + firstName + " " + lastName + "!");
});

// 2.2
let sumOfAges = 0;

data.forEach((person) => {
    sumOfAges += person.idade;
});

console.log(sumOfAges);

// 2.3
const filtered1 = data.filter((person) => person.idade === -25)
console.log(filtered1);

// 2.4
const filtered2 = data.filter((person) => person.idade < 30)
console.log(filtered2);

//2.5
data.sort((person1, person2) => {
    return person1.idade < person2.idade ? -1 :
        person1.idade > person2.idade ? 1 :
        person1.id - person2.id;
});

console.log(data);