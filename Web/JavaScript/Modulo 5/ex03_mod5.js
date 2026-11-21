// JavaScript Impressionador - Módulo 5 - Estruturas

// Condicionais e de Repetição

// Exercícios

// FOR IN:


// Exercício 3: Listagem de Itens do Cardápio

// Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
// são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um
// programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.

const ourMenu = {
    pizza: 60,
    burger: 14,
    milkshake: 8,
    coffee: 2.5,
    cappuccino: 6,
    croissant: 3,
    "coca-cola": 5
}

function showPrices(menu) {
    for (var i in menu) {
        console.log(`${i}: R$ ${menu[i]}`)
    }
}

showPrices(ourMenu)