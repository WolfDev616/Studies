// Requisitos do Projeto de Simulação Financeira

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 4: Geração de Relatório Financeiro
// ❖ Crie uma função que gere um relatório financeiro com base no investimento inicial, taxa
// de rendimento, duração do investimento, despesas mensais, meta de investimento e
// meta de orçamento.
// ❖ O relatório deve incluir:
// ■ O mês atual.
// ■ O saldo final do investimento.
// ■ O total de despesas.
// ■ Uma mensagem de economia ou excedente em relação ao orçamento.
// ■ Uma verificação se a meta de investimento foi atingida.
// ■ Um resumo das despesas por categoria.
// Função: gerarRelatorio

// Requisito 6: Entradas e Configurações do Investimento
// ❖ Defina variáveis para armazenar o valor inicial do investimento, a taxa mensal de
// rendimento, a duração do investimento em meses, a meta de investimento e a meta de
// orçamento mensal.
// ❖ As variáveis devem ser configuráveis para permitir diferentes simulações financeiras.

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


let initialInvestment = 2500.00;
let totalInvested = initialInvestment;
let yieldRate = 0.1076;
let investmentDuration;
let monthlyExpenses = 1800.00;
let totalExpenses;
let investmentGoal = 10000;
let currentMonth;
let balanceValue; // Money invested - total expenses. 

// Show Month

function showCurrentMonth(months) {
    const date = new Date();
    const currentMonth = date.getMonth();


    while (currentMonth) {
        console.log(`The current month is ${months[currentMonth + 1]}.`);
        break
    }    
    console.log("-".repeat(120));
    return currentMonth;
}    


// Show yield

function investmentYield(initialInvestment, yieldRate, monthInt) {
    let yielded = initialInvestment * yieldRate;
    
    for (i=0; i<monthInt; i++) {
            while (i == 0) {
            console.log(`Initial investment: ${initialInvestment}`);    
            i++;
        }    

            totalInvested = totalInvested + yielded;
            console.log(`Total invested up to ${months[i + 1]} is: U$${totalInvested}, with the yield of U$${yielded}.`);
        }    
    console.log("-".repeat(120));        
}            

// Calulate Total Expenses 

function calculateExpenses(monthlyExpenses, monthInt) {    
    
    totalExpenses = monthlyExpenses * monthInt;
        
    console.log(`Total expense until the current date is U$${totalExpenses}.`);
    console.log("-".repeat(120));
    return totalExpenses;
}    


// Calulate balance money invested and expenses.

function balance(totalExpenses, totalInvested) {
    balanceValue = totalInvested - totalExpenses;

    console.log(`Your balance is U$ ${balanceValue}, considering your total value invested and your total expenses up to this date.`);
    console.log("-".repeat(120));
    return balanceValue;
}    


// Investment goal 

function calculateInvestmentGoalTime(initialInvestment, investmentGoal) {
    // Find in how much time the totalInvested will reach investmentGoal:
    let investmentForecast = initialInvestment;
    let timeUntilInvestmentGoal = 0;

    while (investmentForecast < investmentGoal) {
        investmentForecast += initialInvestment * yieldRate;
        timeUntilInvestmentGoal++;
        };
        console.log(`In the ${timeUntilInvestmentGoal} month, you'll have reached your investment goal of U$ ${investmentGoal}.`);
        console.log("-".repeat(120));
}        


// Requisito 7: Execução do Relatório
// ❖ Chame a função gerarRelatorio com os parâmetros adequados para gerar e exibir
// o relatório financeiro no console.
// ❖ A chamada deve utilizar as variáveis e objetos definidos anteriormente.


// Create report   
    
function createReport() {
    let monthInt = showCurrentMonth(months) + 1;
    investmentYield(initialInvestment, yieldRate, monthInt);
    calculateExpenses(monthlyExpenses, monthInt);
    balance(totalExpenses, totalInvested);
    calculateInvestmentGoalTime(totalInvested, investmentGoal);
}

createReport() 