// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
// que o maior gasto aparece nesse array.
// Função: maiorGasto
// Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
// Exemplo Saída: // 20

const numbersExpenses = [
143, 78, 191, 102, 167, 89, 174, 120, 155, 96,
182, 73, 134, 199, 108, 165, 84, 176, 92, 150,
187, 111, 70, 138, 160, 95, 172, 104, 147, 83,
190, 121, 158, 99, 180, 76, 169, 113, 142, 88,
200, 131, 153, 97, 185, 74, 162, 118, 171, 90,
144, 106, 178, 81, 196, 125, 149, 94, 183, 72,
166, 110, 157, 86, 192, 135, 101, 170, 93, 148,
179, 75, 164, 119, 154, 98, 188, 82, 173, 112,
140, 91, 197, 126, 151, 87, 184, 109, 159, 77,
168, 122, 145, 100, 189, 85, 161, 117, 175, 79,
152, 103, 181, 71, 195, 130, 146, 89, 177, 114,
139, 92, 198, 124, 156, 80, 186, 107, 163, 96,
172, 115, 141, 83, 194, 128, 150, 90, 179, 105,
167, 74, 182, 116, 143, 88, 193, 132, 158, 97,
174, 111, 149, 76, 187, 120, 160, 84, 191, 101,
169, 93, 200, 137, 154, 78, 183, 118, 145, 95,
176, 109, 162, 81, 198, 123, 151, 86, 185, 113,
170, 72, 190, 127, 157, 99, 178, 104, 164, 91,
196, 136, 142, 75, 180, 110, 153, 87, 188, 121,
165, 94, 199, 129, 147, 82, 173, 106, 159, 89
];

function sumNumbers(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(`Total expense was: ${sum}}`)
    return sum
}

function verifyBiggestExpense(numbers) {
    const maxNumber = Math.max(...numbers);
    const maxNumberCount = numbers.filter( item => item === maxNumber).length;

    const minNumber = Math.min(...numbers);
    const minNumberCount = numbers.filter( item => item ===  minNumber).length;

    

    console.log(maxNumber)
    console.log(maxNumberCount)
    
    console.log(`Your biggest expense had the cost of ${maxNumber}, having happened ${maxNumberCount} times. Your lowest expense was ${minNumber}, having happened ${minNumberCount} times.`)
}


sumNumbers(numbersExpenses)
verifyBiggestExpense(numbersExpenses)