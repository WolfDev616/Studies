// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.


// Requisito 4: Crie uma função que receba um valor investido e uma taxa de juros e retorne o
// rendimento obtido com esse investimento.
// Função: calcularRendimento
// Exemplo Entrada: //calcularRendimento(1000, 5);
// Exemplo Saída: // 50

function calculateYield(valueInvested, interest) {
    let monthYield = valueInvested * (interest/100)
    console.log(monthYield)
    return monthYield
}

function calculateTotalSelected(valueInvested, calculateYield, b) {
    let totalYield = valueInvested;
    for (i=0; i < b; i++) {
        totalYield += calculateYield
        console.log(totalYield)

    }
}

calculateTotalSelected(1000, calculateYield(1000, 3), 12)