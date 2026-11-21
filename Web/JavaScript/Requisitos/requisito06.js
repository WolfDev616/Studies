// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 6: Crie uma função que receba o número de vitórias e empates de um time e
// retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate
// vale 1 ponto.
// Função: calcularPontos
// Exemplo Entrada: // calcularPontos(5, 2);
// Exemplo Saída: // 17

const gameResults = ["victory", "draw", "victory", "victory", "draw", "loss", "loss"]
const itensToCount1 = "victory"
const itensToCount2 = "draw"
const itensToCount3 = "loss"

const quantidadeVictory = gameResults.filter(item => item === itensToCount1).length;
const quantityDraw = gameResults.filter(item => item === itensToCount2).length;
const quantityLoss = gameResults.filter(item => item === itensToCount3).length; 

function calculateQuantity(array) {
}



function calculateScore(array) {
    let score = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] === "victory") {
            score += 3;
        } else if (array[i] === "draw") {
            score += 1;
        } else {
            score += 0
        }

    } 
    console.log(`With ${quantidadeVictory} victories, ${quantityDraw} draws and ${quantityLoss} losses, the score is ${score}.`)
    
}

(calculateScore(gameResults))





// Pesquisa:

// const itens = ['a', 'b', 'a', 'c', 'a'];
// const itemParaContar = 'a';

// const quantidade = itens.filter(item => item === itemParaContar).length;

// console.log(quantidade); 
// // Saída: 3