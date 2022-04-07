//Exercicio 1
console.log(" \nExercicio 1");

const Q = [19, 15, 18, 17, 16, 20, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 30, 2, 1];
let maior = Q[0];
let posicao = 0;

Q.forEach(maiorValor);

function maiorValor(valor, indice){
    if(maior<Q[indice]){
        maior = Q[indice];
        posicao = indice;
    }
}

console.log("O maior valor é : "+Q[posicao]+" de índice: "+ posicao);
//exercicio 2.1
console.log(" \n Exercicio 2.1");

const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

pessoas.forEach(saudarPessoa);

function saudarPessoa(pessoa){
    console.log("Olá, "+ pessoa.nome + " "+ pessoa.sobrenome+"!");

}
//Exercicio 2.2
console.log("\nExercicio 2.2 ");

let idade = 0;

pessoas.forEach(somaIdades);

function somaIdades(pessoa){
idade = idade + pessoa.idade;
}

console.log("A soma das idades é: "+ idade);
//Exercicio 2.3 e 2.4
//2.3
let maioresIdade = 0;
console.log("\n Exercicio 2.3 ");
pessoas.forEach(testeIdade);

function testeIdade(pessoa){
    if((pessoa.idade < 25) && (maioresIdade == 0)){
        console.log(pessoa);
        maioresIdade += 1;
    }
}

//2.4
console.log("\n Exercicio 2.4 ");

var idadeX = 30;
pessoas.forEach(menorDeIdadeX);
function menorDeIdadeX(pessoa){
    if(pessoa.idade < idadeX){
        console.log(pessoa);
    }
}

//Exercicio 2.5
console.log(" \nExercicio 2.5");
let tamanhoTotal = 0;
pessoas.forEach(tamanho);

function tamanho(){
tamanhoTotal = tamanhoTotal + 1;
}
for(var i =0; i<tamanhoTotal; i++){

    for(var j=0; j<tamanhoTotal; j++){
        if(pessoas[i].idade>pessoas[j].idade){
            var temp = pessoas[j];
            pessoas[j] = pessoas[i];
            pessoas[i] = temp;
        } else if(pessoas[i].idade == pessoas[j].idade){
            if(pessoas[i].id>pessoas[j].id){
                var temp = pessoas[j];
               pessoas[j] = pessoas[i];
                pessoas[i]= temp;

           }
        }

    }
}

console.log("Array ordenado em forma decrescente, em caso de empate, maior id vem primeiro");
pessoas.forEach(imprimirTodos);

function imprimirTodos(pessoa){
    console.log(pessoa);
}
//Exercicio 3
console.log("\nExercicio 3 (somente no arquivo)  ");
//código refatorado abaixo 

function retirarPontuacoes(cpf){
    cpf=cpf.replace('.','').replace('.','').replace('-','').replace(" ","");
    return cpf;
}
function calculoDigitos(cpf){
    let calculoDigito1, calculoDigito2, DigitoVerificador1, DigitoVerificador2, rest, digito, nDigResult;  
    calculoDigito1 = calculoDigito2 = DigitoVerificador1 = DigitoVerificador2 = rest = 0;  

    for (let nCount = 1; nCount < cpf.length -1; nCount++) {  
        digito = parseInt(cpf.strcpfing(nCount -1, nCount));  							
        calculoDigito1 = calculoDigito1 + ( 11 - nCount ) * digito;
        calculoDigito2 = calculoDigito2 + ( 12 - nCount ) * digito;  

    };
    rest = (calculoDigito1 % 11);  
    DigitoVerificador1 = (rest < 2) ? DigitoVerificador1 = 0 : 11 - rest;  
    calculoDigito2 += 2 * DigitoVerificador1;  
    rest = (calculoDigito2 % 11);  
    if (rest < 2){  
        DigitoVerificador2 = 0;  
    }
    else{  
        DigitoVerificador2 = 11 - rest;  
    }
    nDigResult = "" + DigitoVerificador1 + "" + DigitoVerificador2;  
    return nDigResult;
}

exports.validar = function (cpf) {
	//Verifica se o CPF é válido
    let tamanhoCpf = [11, 12, 13, 14];
    if ((cpf !== null) && (cpf !== undefined) && (tamanhoCpf.includes(cpf.lenght))){        
              //Retira os . e - do cpf
                cpf = retirarPontuacoes(cpf);
                if (!cpf.split("").every(c => c === cpf[0])) {
                    try{  
                        //realiza os calculos para descobrir o primeiro digito verificador, e usando ele, é usado para descobrir o segundo digito.
                       let digitoVerificador = calculoDigitos(cpf);
                       let numeroDigitadoVerificador = cpf.substring(cpf.length-2, cpf.length);  
                        //verifica se o digito verificador usado está correto e retorna verdadeiro ou falso.
                       return digitoVerificador == numeroDigitadoVerificador;
                    }catch (e){  
                        console.error("Erro !"+e);  
                        return false;  
                    } 
                } else 
                console.log("Erro na divisão do cpf em substrings");
                return false;
            }
        console.log("Erro de digitação do CPF");
        return false;
}

