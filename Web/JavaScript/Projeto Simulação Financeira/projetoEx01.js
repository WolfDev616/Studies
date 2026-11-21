// Requisitos do Projeto de Simulação Financeira

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 1: Simulação de Investimento

// ❖ Crie uma função que simule o rendimento de um investimento com base em um valor
// inicial, uma taxa mensal de rendimento e um período de meses.
// ❖ A função deve retornar o saldo final após o período especificado, com duas casas
// decimais.
// Função: simularInvestimento
let investment = 1000;
let monthlyYield = 0.0135;

function simulateInvestment(investment, monthlyYield) {
    let total = investment;
    let totalYield = total - investment;

    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }


    console.log(`Initial investment: ${investment}`)


    for (i=1; i<=12; i++) {
        total += investment * monthlyYield
        console.log(`Month ${months[i]}: Total in this investment: ${total.toFixed(2)}, Current month yield: ${monthlyYield}, Total Yield: ${(total - investment).toFixed(2)}`)
        console.log("-".repeat(100))
    }
    console.log(` Your total investment in this title is ${total.toFixed(2)}`)

    return total

}



function simulateInvestmentByTime(investment, monthlyYield, time) {
    let total = investment;
    let totalYield = total - investment;


    console.log(`Initial investment: ${investment}`)


    for (i=1; i<=time; i++) {
        total += total * monthlyYield
        console.log(`Month ${i+1}: Total in this investment: ${total.toFixed(2)}, Current month yield: ${monthlyYield}, Total Yield: ${(total - investment).toFixed(2)}`)
        console.log("-".repeat(100))
    }
    console.log(` Your total investment in this title is ${total.toFixed(2)}`)

    return total

}


simulateInvestmentByTime(2500, 0.1076, 22);