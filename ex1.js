// let Q = Array.from(Array(20).keys());
let Q = []

for (let i = 0; i < 20; i++) {
    Q.push(Math.floor(Math.random() * 100));
}

console.log(Q);

const biggestElement = (arr) => {
    arr.sort((a, b) => a - b);
    
    console.log(arr);

    const indexOfBiggestElement = arr.length - 1;
    const biggestElement = arr[arr.length - 1];

    console.log("index: " + indexOfBiggestElement + " value: " + biggestElement);
}

biggestElement(Q);