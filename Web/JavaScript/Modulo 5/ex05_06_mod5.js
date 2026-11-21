// JavaScript Impressionador - Módulo 5 - Estruturas

// Condicionais e de Repetição

// Exercícios

// FOR OF:

// Exercício 5: Listagem de Itens do Cardápio

// Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use
// um loop for...of para listar todos os itens do cardápio.

const menu01 = [

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


// Usando loop for in:

// function listItems(menu) {
//     for (let i in menu) {
//         console.log(`${menu[i].nomeProduto}: R$ ${menu[i].preco}`)
//     }
// }


// Usando loop for of:

function listItems(menu) {
    for (i of menu) {
        console.log(`${i.nomeProduto}: ${i.preco}`)
    }
}

listItems(menu01)


// Exercício 6: Calcular o Total da Conta

// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
// item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
// valor total da conta.


const orders = [
    {
        produto: menu01[0], // espresso
        quantidade: 2,
        preco: 4
    },
    {
        produto: menu01[3], // leite com chocolate
        quantidade: 3,
        preco: 3
    },
    {
        produto: menu01[7], // frappuccino
        quantidade: 3,
        preco: 8
    },
    {
        produto: menu01[4], // café gelado
        quantidade: 4,
        preco: 5
    }
];


function calculatePrice(orders) {
    let orderSum = 0;
    
    for (i of orders) {
        orderSum += i.quantidade * i.preco
        console.log(`${i.produto.nomeProduto} x ${i.quantidade}: total R$ ${i.quantidade * i.preco}`)
    } console.log(`O preço total foi de R$ ${orderSum}.`)
}

calculatePrice(orders)