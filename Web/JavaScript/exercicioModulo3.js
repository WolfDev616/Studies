// Exercício 1

let preco_produto = 200;
let desconto = 40;
let imposto = 12;
const preco_final_produto = preco_produto - desconto + imposto;

console.log(preco_produto)
console.log(desconto)
console.log(imposto)
console.log(`O valor final do produto é: R$ ${preco_final_produto},00`);

// Exercício 2

let preco_produto2 = 100;
let lucro = 30;
let valor_de_venda = preco_produto2 + lucro;

console.log(`O valor de venda do produto é: R$ ${valor_de_venda},00`)

// Exercício 3

let orcamento = 250
let preco_produto3 = 300
let desconto_produto3 = 50

let comparacao = orcamento >= preco_produto3 - desconto_produto3;
    console.log("O produto está dentro do orçamento.")

// Exercicio 4

let itens_em_estoque = "20";
let numero_minimo_estoque = 20;
let checagem_estoque = itens_em_estoque <= numero_minimo_estoque;
    console.log("É necessário comprar mais itens.")

// Exercício 5

let itens_em_estoque2 = 10;
let numero_minimo_estoque2 = 15;
let produtoDisponivel = Boolean(itens_em_estoque2 > 0);

if (produtoDisponivel = true && itens_em_estoque2 > numero_minimo_estoque2) {

    console.log(`O produto está disponível: ${produtoDisponivel}, e não é necessário abastecer o estoque.`)
}
else if (produtoDisponivel = true && itens_em_estoque2 < numero_minimo_estoque2) {

    console.log(`O produto está disponível: ${produtoDisponivel}, e é necessário abastecer o estoque.`)
}
else if (produtoDisponivel = false) {

    console.log(`O produto está disponível: ${produtoDisponivel}`) 
}