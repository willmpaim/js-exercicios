//Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.


let legalAge = 0;

const input = prompt('Digite idades separadas por vírgula:', '28,20,15,10,11,18,10,32,40,12');
const age = input.split(',');

for (let i = 0; i < age.length; i++) {

    const allAges = parseInt(age[i]);

    if (allAges >= 18) {
        legalAge++;
    }
}

document.write(`<p>Idades: ${age}</p>`);
document.write(`<p>Maiores de idade: ${legalAge}</p>`);
