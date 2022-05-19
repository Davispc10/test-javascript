# Teste Dinheirow Javascript - Estágio

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Questões:

1 - Crie um vetor Q de 20 posições (somente números). Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor;



2 - Para os seguintes exercícios considere o array de objetos:
```
[
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]
```
2.1 - Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.
```
Ex.:
Olá, Fulano de tal!
Olá, Juca da silva!
```
2.2 - Imprima a soma das idades.

2.3 - Imprima o objeto se existir alguem com menos 25 anos.

2.4 - Imprima todos os elementos em que a idade é menor que 30 anos.

2.5 - Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.

3 - Abaixo temos o código de validação de cpf, sua função é refatorar o código abaixo para que fique o mais legível possível seguindo boas práticas de clean code.
- Entenda o algorítmo: https://www.macoratti.net/alg_cpf.htm
``` js
exports.validate = function (str) {

	if (str !== null) {
        if (str !== undefined) {
            if (str.length >= 11 || str.length <= 14){

                str=str
                    .replace('.','')
                    .replace('.','')
                    .replace('-','')
                    .replace(" ","");  
    
                if (!str.split("").every(c => c === str[0])) {
                    try{  
                        let     d1, d2;  
                        let     dg1, dg2, rest;  
                        let     digito;  
                            let     nDigResult;  
                        d1 = d2 = 0;  
                        dg1 = dg2 = rest = 0;  
                            
                        for (let nCount = 1; nCount < str.length -1; nCount++) {  
                            // if (isNaN(parseInt(str.substring(nCount -1, nCount)))) {
                            // 	return false;
                            // } else {
    
                                digito = parseInt(str.substring(nCount -1, nCount));  							
                                d1 = d1 + ( 11 - nCount ) * digito;  
                
                                d2 = d2 + ( 12 - nCount ) * digito;  
                            // }
                        };  
                            
                        rest = (d1 % 11);  
                
                        dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
                        d2 += 2 * dg1;  
                        rest = (d2 % 11);  
                        if (rest < 2)  
                            dg2 = 0;  
                        else  
                            dg2 = 11 - rest;  
                
                            let nDigVerific = str.substring(str.length-2, str.length);  
                        nDigResult = "" + dg1 + "" + dg2;  
                        return nDigVerific == nDigResult;
                    }catch (e){  
                        console.error("Erro !"+e);  
    
                        return false;  
                    }  
                } else return false
    
            }else return false;
        }


	} else return false;

}
```
## Por onde começo?
Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

Boa sorte!
