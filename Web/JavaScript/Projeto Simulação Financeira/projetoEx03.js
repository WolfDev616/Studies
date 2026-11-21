// Requisitos do Projeto de Simulação Financeira

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 3: Obtenção do Mês Atual
// ❖ Crie uma função que retorne o nome do mês atual em formato string.
// ❖ A função deve utilizar um array de nomes dos meses para identificar o mês atual.
// Função: obterMesAtual


// function showMonth() {

//     const date = new Date();
//     const month = date.toLocaleString('en-US', { month: 'long' })
    
    
//     console.log(month)
// }




// Alternativa mais extensa:


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

function showCurrentMonth(months) {
    const date = new Date();
    const currentMonth = date.getMonth();

    while (currentMonth) {
        console.log(`The current month is ${months[currentMonth + 1]}.`)
        break
    }
}

showCurrentMonth(months)