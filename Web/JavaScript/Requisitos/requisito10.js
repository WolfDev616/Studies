// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
// palavra é um palíndromo.
// Função: ehPalindromo
// Exemplo Entrada: // ehPalindromo("arara");
// // ehPalindromo("cachorro");
// Exemplo Saída: // true
// // false

const wordString = "Ana"

function checkpalindromeWord(word) {
    let isPalindrome = false;
    let lowerCaseWord = word.toLowerCase();
    let reversedWordString = lowerCaseWord.split('').reverse().join('');
    if (lowerCaseWord === reversedWordString) {
        return isPalindrome = true
    } else {
        return isPalindrome = false
    }
}

console.log(checkpalindromeWord(wordString))



