// JavaScript Impressionador - Módulo 5 - Estruturas

// Condicionais e de Repetição

// Exercícios

// RECURSIVIDADE:

// Exercício 1: Contagem de Itens do Cardápio (Recursivo)

// Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
// função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.


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

function countItemsOnMenu(menu) {
    let i = 0
    let itemsCounter = 0

    while (i < menu.length) {
        itemsCounter += 1;
        i++
    }
    console.log(`There are ${itemsCounter} items on the menu.`)
}

countItemsOnMenu(menu01)

// Não sei como fazer com recursividade, mas este método acima funcionou bem. 