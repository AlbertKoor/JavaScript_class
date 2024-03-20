console.log("Eu funciono")
console.log("Estou no Html , arquivo de script INTERNO")

let meuNum = 10;
let outroNum = 15;
//aqui acontece a reatribuição
console.log(meuNum);
meuNum = 20;
console.log(meuNum);


console.log(meuNum + outroNum);

console.log(` Meu número é: ${meuNum + outroNum}`);




const num = 42;
console.log(typeof num); // "number"

const str = "Olá, mundo!";
console.log(typeof str); // "string"

const flag = true;
console.log(typeof flag); // "boolean"

let naoDeclarada;
console.log(typeof naoDeclarada); // "undefined"