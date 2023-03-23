//Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        
        const multiplication = i * j;
        const result = (`${i} x ${j} = ${multiplication}`);

        document.write(`<p>${result}</p>`);
    }   

    
}



