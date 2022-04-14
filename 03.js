/*
Abaixo temos o código de validação de cpf, sua função é refatorar o código abaixo para que fique 
o mais legível possível seguindo boas práticas de clean code.
*/

exports.validate = function (str) {

    if (str && (str.length >= 11 && str.length <= 14)) {
        str = str
            .replace('.', '')
            .replace('.', '')
            .replace('-', '')
            .replace(' ', '');

        if (!str.split("").every(c => c === str[0])) {
            try {
                let d1 = d2 = rest = 0;
                let dg1 = dg2 = 0;
                let digito;
                let nDigResult;

                for (let nCount = 1; nCount < str.length - 1; nCount++) {
                    digito = parseInt(str.substring(nCount - 1, nCount));
                    d1 = d1 + (11 - nCount) * digito;
                    d2 = d2 + (12 - nCount) * digito;
                };

                rest = (d1 % 11);

                dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
                d2 += 2 * dg1;
                rest = (d2 % 11);
                if (rest < 2)
                    dg2 = 0;
                else
                    dg2 = 11 - rest;

                let nDigVerific = str.substring(str.length - 2, str.length);
                nDigResult = "" + dg1 + "" + dg2;
                return nDigVerific == nDigResult;
            } catch (e) {
                console.error("Erro !" + e);

                return false;
            }
        } else return false
    } else return false;

}