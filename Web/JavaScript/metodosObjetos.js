// Módulo 5

// Exercícios - Métodos Objetos

// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
// precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
// valor total da venda, considerando o desconto. Adicione também um método chamado
// detalharVenda que retorne uma string detalhando a venda.

// Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
// um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
// valor total com o método calcularTotal.


const Venda = {
    produto: "guitarra",
    quantidade: 0,
    precoUnitario: 890.00,
    desconto: 0,
    quantidadeEstoque: 23,
    verificarDesconto,

    atualizarQuantidade: function(b) {
        this.quantidade = b
        return
    },

    aplicarDesconto: function(a) {
        this.desconto = a;
        return this.desconto;
    },

    calcularTotal: function() {
        let precoFinal = (this.quantidade * this.precoUnitario) - (this.quantidade * this.precoUnitario * this.desconto);
        return precoFinal;
    },
    detalharVenda: function() {
        let mensagemCompra = (`Você comprou ${this.quantidade} ${this.produto} por R$${this.calcularTotal()}.`);
        return mensagemCompra;
    },
    verificarEstoque: function() {
        if (this.quantidade < this.quantidadeEstoque) {
            console.log(`A compra pode ser realizada, o cliente solicitou ${this.quantidade} e há ${this.quantidadeEstoque} em estoque`)
        }
        else {
            console.log(`É necessário ajustar o estoque, o cliente solicitou ${this.quantidade} e há ${this.quantidadeEstoque} em estoque`)
        }
        return
    }
}


// Venda.verificarEstoque();
// Venda.atualizarQuantidade(5);
// Venda.aplicarDesconto(0.22);
// console.log(Venda.calcularTotal());
// console.log(Venda.detalharVenda());



// Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
// recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
// verifique o total da venda após a atualização.

// Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
// disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
// ou se é necessário ajustar a quantidade.

// Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
// Exiba as propriedades e valores em um formato legível.

const dadosVenda = Object.entries(Venda)
    .filter(([_, valor]) => typeof valor !== "function");

// console.log(dadosVenda)

// Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
// Exiba as propriedades do objeto.

const dadosVendaPropriedades = Object.keys(Venda)
    .filter(chave => typeof Venda[chave] !== "function");

// console.log(dadosVendaPropriedades)

// Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
// Exiba os valores das propriedades.

const dadosVendaValores = Object.values(Venda)
    .filter(valor => typeof valor !== "function");

// console.log(dadosVendaValores)

// Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
// verificação diretamente em uma mensagem fixa.

function verificarDesconto() {
    if (this.desconto !== 0) {
        console.log(`Há um desconto de ${this.desconto * 100}%`)
    }
    else {
        console.log(`Não há desconto para este item`)
    }
    return this.desconto;
}

// verificarDesconto();

// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
// valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
// NovaVenda.

const novaVenda = Object.assign({}, Venda,{
    produto: "amplificador",
    quantidade: 0,
    precoUnitario: 540.00,
    desconto: 0,
    quantidadeEstoque: 25,
});

console.log(novaVenda)

novaVenda.atualizarQuantidade(5);
novaVenda.verificarEstoque();
novaVenda.verificarDesconto();
console.log(novaVenda.calcularTotal());
console.log(novaVenda.detalharVenda());

// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
// enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
// nova propriedade data separadamente.

Object.defineProperty(Venda, "data", {
    value: "30/12/2025",
    enumerable: false,
});

console.log(`Data da venda: ${Venda.data}`)


// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
// Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
// se o desconto foi aplicado corretamente.

const DescontoEspecial = Object.create(Venda)
DescontoEspecial.desconto = 0.2
console.log(DescontoEspecial)
DescontoEspecial.quantidade = 2
console.log(DescontoEspecial.calcularTotal())
console.log(DescontoEspecial.detalharVenda())

// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
// foi removida com sucesso e exiba as propriedades restantes do objeto.

delete Venda.desconto;
console.log(Venda)



novaVenda.aplicarDesconto(0.3)
console.log(novaVenda.verificarDesconto())