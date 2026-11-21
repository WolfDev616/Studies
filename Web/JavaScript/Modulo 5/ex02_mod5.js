// JavaScript Impressionador - Módulo 5 - Estruturas

// Condicionais e de Repetição

// Exercícios

// RECURSIVIDADE:

// Exercício 2: Cálculo do Valor Total das Vendas (Recursivo)

// Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
// um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
// mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.


let burgersSold = Math.floor(Math.random() * 50);
const sells = [];
const burgerPrice = 10;

console.log(burgersSold)

function calculateDaySells() {
    for (i = 0; i < 7; i++) {
        let daySells = burgersSold * burgerPrice;
        sells.push(daySells)
        burgersSold = Math.floor(Math.random() * 50)
    }

    console.log(sells)
}

function calculateWeekSells(sells) {
    let somaTotal = 0;
    for (i = 0; i < sells.length; i++) {
        somaTotal += sells[i];

    } console.log(`O valor total de vendas da semana foi de R$${somaTotal}`)
}

calculateDaySells()
calculateWeekSells(sells)


// Também não fazia ideia de como resolver fazendo uma função recursiva, então resolvi de forma simples mesmo até ver a correção. 