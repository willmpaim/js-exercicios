//Faça um programa que lê o tamanho dos lados de um quadrado e imprime um quadrado do mesmo tamanho usando asteriscos.

let width = 5;
let result = '';

for(let i=1; i <= width; i++) {

    for(let j=1; j <= width; j++) {
        result += '*';
    }
    result += '\n';
}
alert(result);