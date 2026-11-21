// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 9: Crie uma função que receba um array de números e retorne a média desses
// números.
// Função: calcularMedia
// Exemplo Entrada: // calcularMedia([10, 20, 30, 40]);
// Exemplo Saída: // 25

const numbers = [184, 109, 159, 77,
168, 122, 145, 100, 189, 85, 161, 117, 175, 79,
152, 103, 181, 71, 195, 130, 146, 89, 177, 114,
139, 92, 198, 124, 156, 80, 186, 107, 163, 96,
172, 115, 141, 83, 194, 128, 150, 90, 179, 105,
167, 74, 182, 116, 143, 88, 193, 132, 158]


function calculateAverage(array) {
    

    function sumNumbers(array) {
        let sum = 0;
        for (i=0;i<array.length;i++) {
            sum += array[i]
        }
        console.log(`Total sum is: ${sum}`)
        return sum
    }
    const sumResult = sumNumbers(numbers)
    
    console.log(`The average of these values is: ${sumResult / array.length}`)
}

calculateAverage(numbers)
