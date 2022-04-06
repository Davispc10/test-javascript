const CPF_SIZE = 11;
const LAST_TWO_DIGITS = 2;

const cleanStr = (str) => {
    return str.replace(/[ .-]/g, '');
}

const calculateDigit = (str) => {
    const vec = Array.from(Array(str.length), (_, index) => index + LAST_TWO_DIGITS).reverse();

    const sum = vec
        .map((element, index) => parseInt(str[index]) * element)
        .reduce((currentValue, element) => currentValue + element, 0);

    const remainder = sum % 11;

    return remainder < LAST_TWO_DIGITS ? 0 : 11 - remainder;
}

const validate = (str) => {
    if (!str || str === undefined) return false;

    str = cleanStr(str);

    if (str.length !== CPF_SIZE) return false;

    try {
        let validatedCpf = str.slice(0, str.length - LAST_TWO_DIGITS);

        const digitOne = calculateDigit(validatedCpf);
        validatedCpf = validatedCpf.concat(digitOne);

        const digitTwo = calculateDigit(validatedCpf);
        validatedCpf = validatedCpf.concat(digitTwo);
        
        return str === validatedCpf;
    } catch (e) {
        console.error(e);

        return false;
    }
}

console.log(validate("111.444.777-05"));