// Exercício 1

var produtos = ["ventilador", "sofá", "celular"];
produtos[1] = "notebook";

console.log(produtos)

// Exercício 2

var clientes = ["Luma", "Jéssica", "Alfredo"];
clientes[3] = "Carlos";


console.log(clientes);
console.log(clientes.pop());

//Exercício 3

let produto = ["Faca", "R$35,00", "Ótima"];
console.log(produto[0])

produto[1] = "R$32,00"

console.log(produto)

// Exercício 4

let venda = ["Pedro", "Panela", "R$55,50"];
venda.push("02/12/2025");

console.log(venda);

venda.splice(1, 1);
console.log(venda);

// Exercício 5

let estoque = ["Espada", "Poção", "Túnica", "Capa"];
let novoEstoque = [...estoque];

novoEstoque.push("Espada", "Escudo", "Tecido");
console.log(novoEstoque);
console.log(estoque)

let funcionario = {
    nome: "Paulo",
    salario: 2000,
    cargo: "Vendedor"
}

let novoFuncionario = {...funcionario};

novoFuncionario.nome = "Pedro"
novoFuncionario.cargo = "Repositor"

console.log(funcionario);
console.log(novoFuncionario);