// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a
// seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que
// decodifique a frase, revertendo as substituições.
// Funções: codificar e decodificar
// Exemplo Entrada: // const frase = "a casa e o sol";
// const resultado = codificar(frase);
// const frase2 = "1 c1s2 2 4 s4l";
// const resultado2 = decodificar(frase2);
// Exemplo Saída: // "1 c1s2 2 4 s4l"
// // "a casa e o sol"

let message = "Patrolling the Mojave almost makes you wish for a nuclear winter."


function encodeMessage(message) {
    
    const vowelsNewValues = {
        a: "#",
        e: "&",
        i: "<",
        o: "%",
        u: "¬"
}
    
    return encodedMessage = message.replace(/[aeiou]/g, i => vowelsNewValues[i]);
}




function decodeMessage(message) {

    const vowels = {
        "#": "a",
        "&": "e",
        "<": "i",
        "%": "o",
        "¬": "u"
    }
    
    return decodedMessage = message.replace(/[#&<%¬]/g, i => vowels[i])

}

console.log(encodeMessage(message))

console.log(decodeMessage(encodedMessage))