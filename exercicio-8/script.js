//Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

alert("Insira o valor de 5 idades para calcular a media");


let total = 0;

const input = prompt('Digite idades separadas por vírgula: ,');
const age = input.split(',');

for(let i=0; i < age.length; i++) {

    total += parseInt(age[i]);
}

const media = total / age.length;

document.write(`<p>Idades: ${age}</p>`);
document.write(`<p>Média: ${media}</p>`);




