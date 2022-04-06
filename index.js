//Exercicio 1
console.log("Exercicio 1 \n");

const Q = [19, 15, 18, 17, 16, 20, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 30, 2, 1];
let maior = Q[0];
let pos = 0;

Q.forEach(maiorValor);

function maiorValor(valor, indice){
    if(maior<Q[indice]){
        maior = Q[indice];
        pos = indice;
    }
}

console.log("O maior valor é : "+Q[pos]+" de índice: "+ pos);
console.log("");
//exercicio 2.1
console.log("Exercicio 2.1 \n");

const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

pessoas.forEach(saudarPessoa);

function saudarPessoa(pessoa){
    console.log("Olá, "+ pessoa.nome + " "+ pessoa.sobrenome);

}
console.log("");
//Exercicio 2.2
console.log("Exercicio 2.2 \n");

let idade = 0;

pessoas.forEach(somaIdades);

function somaIdades(pessoa){
idade = idade + pessoa.idade;
}

console.log("A soma das idades é: "+ idade);
console.log("");
//Exercicio 2.3 e 2.4
//2.3
let idadeMaior = 0;
console.log("Exercicio 2.3 \n");
pessoas.forEach(testeIdade);

function testeIdade(pessoa){
    if(pessoa.idade < 25){
        idadeMaior = idadeMaior + 1;
    }
}
if (idadeMaior>1){
    console.log(pessoas);
}

//2.4
console.log("Exercicio 2.4 \n");

var idadeX = 30;
pessoas.forEach(menorDeIdadeX);
function menorDeIdadeX(pessoa){
    if(pessoa.idade < idadeX){
        console.log(pessoa);
    }
}

//Exercicio 2.5
console.log("Exercicio 2.5 \n");
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
console.log("Exercicio 3 (somente no arquivo) \n ");
//código refatorado abaixo 

function retirarPontuacoes(cpf){
    cpf=cpf.replace('.','').replace('.','').replace('-','').replace(" ","");
    return cpf;
}
function calculoDigitos(cpf){
    let d1, d2, dg1, dg2, rest, digito, nDigResult;  
    d1 = d2 = dg1 = dg2 = rest = 0;  

    for (let nCount = 1; nCount < cpf.length -1; nCount++) {  
        digito = parseInt(cpf.strcpfing(nCount -1, nCount));  							
        d1 = d1 + ( 11 - nCount ) * digito;
        d2 = d2 + ( 12 - nCount ) * digito;  

    };
    rest = (d1 % 11);  
    dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
    d2 += 2 * dg1;  
    rest = (d2 % 11);  
    if (rest < 2){  
        dg2 = 0;  
    }
    else{  
        dg2 = 11 - rest;  
    }
    nDigResult = "" + dg1 + "" + dg2;  
    return nDigResult;
}

exports.validar = function (cpf) {
	if (cpf !== null) {
        if (cpf !== undefined) {
            if (cpf.length >= 11 || cpf.length <= 14){
              //Retira os . e - do cpf
                cpf = retirarPontuacoes(cpf);
                if (!cpf.split("").every(c => c === cpf[0])) {
                    try{  
                        //realiza os calculos para descobrir o primeiro digito verificador, e usando ele, é usado para descobrir o segundo digito.
                       let digitoVerificador = calculoDigitos(cpf);
                       let nDigVerific = cpf.substring(cpf.length-2, cpf.length);  
                        //verifica se o digito verificador usado está correto e retorna verdadeiro ou falso.
                       return digitoVerificador == nDigVerific;
                    }catch (e){  
                        console.error("Erro !"+e);  
                        return false;  
                    } 
                } else 
                console.log("Erro na divisão do cpf em substrings");
                return false;
            }else 
            console.log("CPF menor que 11 caracteres ou maior que 14 caracteres");
            return false;
        } else 
        console.log("CPF indefinido");
        return false;
	} else 
    console.log("CPF nulo");
    return false;
}

