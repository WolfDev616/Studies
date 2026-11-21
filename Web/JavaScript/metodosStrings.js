// Módulo 5

// Exercícios - Métodos nativos String



// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.



// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// maiúsculas.
// Exemplo de Saída: // “JAVASCRIPT é divertido”

let affirmation = "Javascript é divertido"

console.log(affirmation.replace("Javascript", "Javascript".toUpperCase()));





// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// em seguida, converta essa palavra para letras minúsculas.
// Exemplo de Saída: // “ aprendendo”

let affirmation2 = "Aprendendo Javascript"

let clippedWord = affirmation2.substring(0, 11).toLowerCase();
console.log(clippedWord);





// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
// “Javascript”.
// Exemplo de Saída: // “Aprendendo Javascript”

let affirmation3 = "Aprendendo Python";
let clipperWord2 = affirmation3.substring(11);


console.log(affirmation3.replace(clipperWord2, "Javascript"));





// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista.
// Exemplo de Saída: “["cadeira", "mesa", "armário"]”

let affirmation4 = "cadeira, mesa, sofá, armário"

let slicedAffirmation4 = affirmation4.split(/,\s*/);
console.log(slicedAffirmation4);

slicedAffirmation4Final = slicedAffirmation4.filter(item => item !== "sofá");
console.log(slicedAffirmation4Final);