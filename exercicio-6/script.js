//Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

const number = prompt("Digite o numero na tela para mostrar a sua tabuada")

for (let i = 1; i <= 10; i++) {

    let result = i * number;
    document.write(`<p> ${number} x ${i}: ${result}</p>`);
}