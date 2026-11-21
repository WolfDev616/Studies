// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem
// considerados "truthy".
// Função: compararValores

// Exemplo Entrada: // compararValores(5, "texto");
// // compararValores(0, "texto");
// Exemplo Saída: // true
// // false

// Conforme tabela de conversão para Boolean presente na especificação da linguagem:

//     São truthy os valores dos tipos Object, Symbol (introduzido no ES6), strings não vazias e números diferentes de ±0.
//     São falsey os valores null, undefined, ±0, NaN e strings vazias.


function verifyValues(a, b) {
    if (a && b) {
        console.log(`Truthy`)
        return true
    }  else {
        console.log(`Falsy`)
        return false
         
    }
}


verifyValues([], "Andreas")


// [] is object and object is truthy. 