// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano
// indicando se o número é primo.
// Função: ehPrimoExemplo Entrada: // ehPrimo(7);
// // ehPrimo(4);
// Exemplo Saída: // true
// // false

function checkIfPrime(number) {
    
  if (number < 2) return false;


  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

// Testes
console.log(checkIfPrime(17)); 

