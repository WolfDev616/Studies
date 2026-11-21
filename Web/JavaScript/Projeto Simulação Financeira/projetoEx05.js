// Requisitos do Projeto de Simulação Financeira

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.


// Requisito 5: Estrutura de Dados para Despesas
// ❖ Crie um objeto para armazenar as despesas mensais, utilizando categorias como
// alimentação, transporte, aluguel e lazer.
// ❖ O objeto deve permitir fácil acesso e modificação dos valores das despesas.

let personalExpenses = {
    rent: 1200,
    electricity: 200,
    water: 123,
    internet: 110,
    groceries: 346,
    market: 189,
    "pet care": 78
}


function sumAllExpenses(list) {
    let totalExpense = 0

    for (i in list) {
        totalExpense += list[i]
    }

    if (totalExpense <= 2200) {
        message = "Your month was good"
    } else if (2200 <= totalExpense <= 3000) {
        message = "Be careful with your expenses!"
    } else {
        message = "You're spending too much!"
    }
        
    return console.log(`Your total expenses this month is: U$${totalExpense}. ${message}`)


}

sumAllExpenses(personalExpenses)


console.log(personalExpenses)