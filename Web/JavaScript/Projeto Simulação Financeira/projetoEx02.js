// Requisitos do Projeto de Simulação Financeira

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 2: Gerenciamento de Despesas

// ❖ Crie uma função que receba um objeto representando as despesas mensais em
// diferentes categorias.
// ❖ A função deve calcular e retornar o total de despesas.
// Função: gerenciarDespesas
const expenses = {
    location: 4000,
    cleaning: 1245,
    food: 2430,
    material: 3422,
    internet: 110,
}

function manageExpenses(object) {
    let totalExpense = 0

    for (i in object) {
        totalExpense += object[i]; 
    }

    console.log(`Your total expense for this month is U$${totalExpense}`)
}

manageExpenses(expenses)