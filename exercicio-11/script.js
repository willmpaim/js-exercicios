//Faça um programa que recebe a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos.

let width = 5;
let result = '';

for(let i=1; i <= width; i++) {

    for(let j=1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
alert(result);