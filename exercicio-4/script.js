//Faça um programa que mostre todos os números primos de 0 a 100.

function primeNumbers(num) {

    let numbers = [];

    function isPrime(num) {

        for(let i = 2; i <num; i++)
          if(num % i === 0) {
              return false
          };
        return num > 1;
      }

    for (var i = 0; i <= num; i++) {

      if (isPrime(i)) {
        numbers.push(i);
      }
    }
    return numbers;
  }
  
  document.write(`<p>${primeNumbers(100)}</p>`);