//Faça um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.


const number = prompt("Digite um numero");

let pair = [];
let odds = [];

for (let i = 1; i <= number; i++) {

    if(i % 2 === 0) {
        pair.push(i);
    } else {
        odds.push(i);
    }

}

document.write(`<p> Numeros pares: ${pair} </p>`);
document.write(`<p> Numeros impares: ${odds} </p>`);