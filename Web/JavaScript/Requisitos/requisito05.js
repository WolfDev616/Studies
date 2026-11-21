// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.


// Requisito 5: Crie uma função que receba uma frase como parâmetro e retorne um array
// contendo as palavras que compõem essa frase, separadas por espaços.
// Função: dividirFrase
// Exemplo Entrada: // dividirFrase("Esta é uma frase de exemplo.");
// Exemplo Saída: // ["Esta", "é", "uma", "frase", "de", "exemplo."]

let string = "We ain't gonna take it"

function splitString(string) {
    let splitStringArray = string.split(" ")
    console.log(splitStringArray)
    console.log(`The sentence was split into: ${splitStringArray}`)
}

splitString(string)
