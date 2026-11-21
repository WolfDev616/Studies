// JavaScript Impressionador - Módulo 5 - Estruturas

// Condicionais e de Repetição

// Exercícios

// Estrutura de Repetição - FOR:


// Exercício 1: Cálculo do Faturamento Semanal

// Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
// semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
// semana. Crie um programa que calcule o valor total das vendas em uma semana.


let totalBurgersSold


function totalWeeklySum() {
    let somaTotal = 0


    for (let i = 1; i < 8; i++) {
        totalBurgersSold = Math.floor(Math.random() * 100);
        console.log(`O total de hamburguers vendidos neste dia foi de: ${totalBurgersSold}`)
        let a = totalBurgersSold * 10;
        somaTotal += a;
        console.log(`A soma semanal total foi de: ${somaTotal}`)
    }
    return somaTotal
}


totalWeeklySum()




// Exercício 2: Listagem do Cardápio Digital

// Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
// juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.


const menu = [

    {
        nomeProduto: "espresso",
        preco: 4.00,
        disponibilidade: true,
    },
    {
        nomeProduto: "café com leite",
        preco: 4.50,
        disponibilidade: true,
    },
    {
        nomeProduto: "cappuccino",
        preco: 6.0,
        disponibilidade: true,
    },
    {
        nomeProduto: "leite com chocolate",
        preco: 3.00,
        disponibilidade: true,
    },
    {
        nomeProduto: "café gelado",
        preco: 5.00,
        disponibilidade: true,
    },
    {
        nomeProduto: "espresso tônica",
        preco: 5.00,
        disponibilidade: true,
    },
    {
        nomeProduto: "café coado",
        preco: 2.00,
        disponibilidade: true,
    },
    {
        nomeProduto: "frappuccino",
        preco: 8.00,
        disponibilidade: true,
    },
    {
        nomeProduto: "cold brew",
        preco: 8.00,
        disponibilidade: true,
    }
]

function showMenu(cardapio) {

    for (let index = 0; index < cardapio.length; index++) {
        if (cardapio[index].disponibilidade === true) {
            console.log(`${cardapio[index].nomeProduto.charAt(0).toUpperCase()}${cardapio[index].nomeProduto.slice(1)}: R$ ${cardapio[index].preco}`)
        }
    }
    return

}

showMenu(menu)


// Estrutura de Repetição - WHILE:


// Exercício 3: Contagem de Dinheiro no Caixa

// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
// feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete.

let valorVenda = 1;
let i = 10;
let somatorioVendasDia = 0;

function somaVendasDia() {

    while (valorVenda && i > 0) {
        valorVenda = Math.floor(Math.random() * 100);
        console.log(valorVenda)
        somatorioVendasDia += valorVenda;
        i--
        console.log(`O total de vendas do dia até então foi: ${somatorioVendasDia.toFixed(2)}`)
    }
    return somatorioVendasDia
}

somaVendasDia()



// Exercício 4: Entrega de Pedidos Pendentes

// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
// pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.

const ordersReceived = ["Burger", "Burger + Fries", "Fries + Soda", "2 Burgers", "Chesse Pizza", "2 Pizzas, Cheese and Broccoli"];

console.log(ordersReceived)
console.log(ordersReceived.length)


function makeDelivery(ordersReceived) {
    let currentOrder = "";
    console.log(`Commencing deliveries:`)

    while (ordersReceived.length > 0) {
        currentOrder = ordersReceived.shift();
        console.log(`The order ${currentOrder} is out for delivery.`);
    }
    console.log(`There are no more orders.`)
}

makeDelivery(ordersReceived)

// Estrutura de Repetição - DO...WHILE:


// Exercício 5: Adivinhe o Número Secreto para Desconto

// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto.


let magicalNumber = 66;
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function findMagicalNumber() {
    rl.question("Digite um número:", Response => {
            let clientAttempt = Number(Response)
            if(isNaN(clientAttempt)) {
                console.log(`Coloque apenas números!`)
            } else {

                console.log(`Seu numero é: ${clientAttempt}, mas não é o número mágico!`)
            }
                if(clientAttempt !== magicalNumber) {
                findMagicalNumber()
            } else {
                console.log(`Você encontrou o número mágico! Parabéns!!! O número é ${clientAttempt}`)
            }
            rl.close})
}

findMagicalNumber()




// Forma 2, de acordo com a correção:




// Exercício 6: Gerenciamento de Estoque de Itens em Falta

// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo.

let listaProdutos = [
    {
        nomeItem: "suco de caixinha",
        preco: 2.5,
        quantidadeEstoque: 28
    },
    {
        nomeItem: "latas de coca-cola",
        preco: 3.5,
        quantidadeEstoque: 12
    },
    {
        nomeItem: "latas de fanta laranja",
        preco: 3.2,
        quantidadeEstoque: 41
    },
    {
        nomeItem: "limão",
        preco: 0.6,
        quantidadeEstoque: 56
    },
    {
        nomeItem: "pão de queijo",
        preco: 4.5,
        quantidadeEstoque: 12
    },
    {
        nomeItem: "pastel pequeno",
        preco: 6,
        quantidadeEstoque: 0
    },
    {
        nomeItem: "pastel grande",
        preco: 8,
        quantidadeEstoque: 0
    },
    {
        nomeItem: "garapa",
        preco: 5.0,
        quantidadeEstoque: 0
    }
]


function adicionarItens() {
    let i = 0


    do {
        if (listaProdutos[i].quantidadeEstoque !== 0) {
            console.log(`A quantidade em estoque de ${listaProdutos[i].nomeItem} é ${listaProdutos[i].quantidadeEstoque}`)
        } else {
            console.log(`A quantidade em estoque de ${listaProdutos[i].nomeItem} é ${listaProdutos[i].quantidadeEstoque}`)

            listaProdutos[i].quantidadeEstoque += 5
            console.log(`Foram adicionados 5 itens. Nova quantidade: ${listaProdutos[i].quantidadeEstoque}`)
        }
        i++

    } while (i < listaProdutos.length)

}

adicionarItens()