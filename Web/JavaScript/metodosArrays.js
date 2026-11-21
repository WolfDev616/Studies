// Módulo 5

// Exercícios - Métodos nativos Array


// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.


// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.
// Exemplo de Saída: // ['Produto B', 'Produto C']

let produtos = ["Sofá", "Mesa"];
produtos.push("Cômoda");
produtos.shift();
console.log(produtos); 



// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// disponíveis.
// Exemplo de Saída: // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']

let produtosCozinha = ["Filtro", "Forno"];
produtosCozinha.push("Geladeira");
console.log(produtosCozinha);

let produtosConcat = produtosCozinha.concat(produtos);
console.log(produtosConcat);



// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque.
// Exemplo de Saída: // true
// // false

let materiais = ['Caderno', 'Lápis', 'Estojo']

console.log(materiais.includes("Lápis"));
console.log(materiais.includes("Agenda"));




// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
// Exemplo de Saída: // true

let numberList = [2, 5, 8, 1]

console.log(
    numberList.some(item => item > 7)
);



// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
// Exemplo de Saída: // false.

let numberList2 = [4, 6, 8, 2]

console.log(numberList2.every(function(item) {
    if (item > 3)
        return true;
    else
        return false;
}))


// Verão abaixo do código refinada pelo chatgpt

let numberList3 = [5, 7, 9, 2, 6];

console.log(
    numberList3.every(item => item > 3)
);

// Extra: filter (funciona como "which")

console.log(
    numberList3.filter(item => item > 3)
);