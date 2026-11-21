// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 15: Crie uma função que receba um array de nomes de investimentos que você
// quer fazer e um segundo parâmetro com seu nome.
// Função: gerarListaInvestimentosExemplo 
// Entrada: //const investimentos = [5000, 2000, 15000];
// const nome = "Maria";
// const resultado = gerarListaInvestimentos(investimentos1, nome1);
// Exemplo Saída:
// // [
// { investimento: 2000, nome: "Maria" },
// { investimento: 5000, nome: "Maria" },
// { investimento: 15000, nome: "Maria" }
// ]

const realEstateInvestments = {
  residentialProperty: 3200,
  commercialProperty: 4700,
  industrialProperty: 2900,
  reit: 1500,
  vacationRental: 4100,
  landInvestment: 2300,
  mixedUseProperty: 3800,
  fixAndFlip: 2600,
  studentHousing: 3400,
  selfStorageUnits: 1950
};

function generateInvestmentList(investmentList, investorName) {
    for (i in realEstateInvestments) {
        console.log(
            `You have ${investmentList[i]} invested in ${i}. Investor name: ${investorName}`
        )
    }
}

generateInvestmentList(realEstateInvestments, "Andreas")