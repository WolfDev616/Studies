// JavaScript Impressionador - Módulo 5 - Estruturas

// Condicionais e de Repetição

// Exercícios

// FOR IN:

// Exercício 4: Calcular o Total da Conta

// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
// quantidades) e calcule o valor total da conta.


// Estou usando o mesmo menu do exercício anterior

const ourMenu = {
    pizza: 60,
    burger: 14,
    milkshake: 8,
    coffee: 2.5,
    cappuccino: 6,
    croissant: 3,
    "coca-cola": 5
}


let clientOrder = {
    pizza: 2,
    "coca-cola": 2,
    coffee: 4,
    croissant: 6
}

function calculatePrice(clientOrder) {
    let totalPrice = 0;
    
    for (i in clientOrder) {
        totalPrice += clientOrder[i] * ourMenu[i];
        console.log(`You're buying ${clientOrder[i]} ${i} for ${clientOrder[i] * ourMenu[i]}.`)
    }
    console.log(`The total price is ${totalPrice}`)
}

calculatePrice(clientOrder)