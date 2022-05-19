//Questão 01

/*let Q = []
let maxValue = 0;
let position = 0;

for (let i=0; i<20; i++) {
    Q[i] = Math.floor(Math.random() * 101);

    if (maxValue <= Q[i]){
        maxValue = Q[i];
        position = i;
    };
};

console.log(Q);
console.log(maxValue);
console.log(position);*/

let Q = Array.from({length: 20}, () => Math.floor(Math.random() * 101));

let arrInfo = {
    maxValue: 0,
    position: 0
};

Q.forEach((value, index) =>{
    newValue=value

    if(newValue >= value){
        arrInfo.maxValue = newValue;
        arrInfo.position = index;
    }
})

console.log(Q);
console.log(arrInfo);