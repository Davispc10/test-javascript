//Questão 03

exports.validate = function (str) {
    if (str && (str.length >= 11 && str.length <= 14)) return false;
    if (!str.split("").every(c => c === str[0])) return false;
        
    str=str
    .replace('.','')
    .replace('.','')
    .replace('-','')
    .replace(" ","");  


    try{  
        let d1, d2 = 0;

        str.split("").forEach((char, i) => {
            const digit = parseInt(char);
            d1 += (11 - i) * digit;
            d2 += (12 - i) * digit;
        });
    
        let rest = d1 % 11;  
        let dg1 = rest < 2 ? 0 : 11 - rest;  

        d2 += 2 * dg1;  
        rest = d2 % 11; 

        let dg2 = rest < 2 ? 0 : 11 - rest;  

        let nDigVerific = str.substring(str.length-2, str.length);  
        let nDigResult = "" + dg1 + "" + dg2;  

        return nDigVerific == nDigResult;
    }   
    
    catch(e){  
        console.error(`Erro !" ${e}`);
        return false;         
    }  
}