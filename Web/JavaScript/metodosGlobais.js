// Módulo Métodos

// Exercícios - Objetos Globais Math e Date

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.
// Exemplo Entrada: 7.89
// Exemplo Saída: Arredondado para baixo: 7
// Arredondado para cima: 8
// Arredondado para o valor mais próximo: 8


let number = 5.656
console.log(Math.round(number)); 
console.log(Math.floor(number)); // Number(number.toFixed(2))
console.log(Math.ceil(number)); // Number.parseInt(number)


// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
// valor mínimo dessa lista.
// Exemplo Entrada: 10, 5, 20, 40, 1, 7
// Exemplo Saída: Valor mínimo: 1
// Valor máximo: 40

let numberInputs = [10, 4, 27, 69, 32, 6, 61, 9, 37, 56]

console.log(Math.min(...numberInputs))
console.log(Math.max(...numberInputs))


// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
// e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
// resultados no console.
// Exemplo Entrada: 50, 100
// Exemplo Saída: Aleatório entre 0 e 1: 0.8629821531529918
// Aleatório entre 0 e 100: 42.48780566605361
// Aleatório entre 50 e 100: 63.70589822740784


function generateNumbers() {

    const randomNumber = Math.random();
    const randomNumber2 = Math.random() * 100;
    const randomNumber3 = Math.random() * (80 - 20) + 20;

    return [randomNumber, randomNumber2, randomNumber3]
}

const numbersGenerated = generateNumbers()

console.log(numbersGenerated);




// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
// Exiba o resultado no console.
// Exemplo Entrada: 2024-01-01, 2024-10-07
// Exemplo Saída: Diferença em dias entre 2024-01-01 e 2024-10-07: 280

date1 = new Date;
date2 = new Date ("1998-01-13");

console.log(typeof date1)
console.log(typeof date2)

function calculateDateMs(date1, date2) {
    let dateDifferenceMs = date1.getTime() - date2.getTime();
    console.log(`Diferença em ms: ${dateDifferenceMs}`);
    return dateDifferenceMs;
}

function calculateDateDays(dateDifferenceMs) {
    let dateDifferenceDays = dateDifferenceMs / (1000*60*60*24);
    console.log(`Diferença em dias: ${dateDifferenceDays}`);
    return dateDifferenceDays;
}

calculateDateMs(date1, date2)
calculateDateDays(calculateDateMs(date1, date2))



// Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
// Exiba as informações no console.
// Exemplo Entrada: 2024-10-07
// Exemplo Saída: Ano: 2024, Mês: 10, Dia: 6

const dateInputNow = new Date();

console.log(dateInputNow)

function extractDateInfo(dateInputNow) {
    let dateInputYear = dateInputNow.getFullYear();
    let dateInputMonth = dateInputNow.getMonth();
    let dateInputDay = dateInputNow.getDate();

    console.log(`Esta data é o ano ${dateInputYear}, mês ${dateInputMonth + 1} e dia ${dateInputDay}`)
}

extractDateInfo(dateInputNow)


// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
// Exemplo Entrada: 1990-05-15
// Exemplo Saída: Idade: 34



const birthDate = new Date("1998/01/13");
const currentDate = new Date();

console.log(birthDate, currentDate)

function calculateAge(birthDate, currentDate) {
    const ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    const ageMonths = currentDate.getMonth() - birthDate.getMonth();
    const ageDays = currentDate.getDate() - birthDate.getDate();

    console.log(`This person's age is ${ageYears} years, ${ageMonths} months and ${ageDays} days.`);
    return ageYears, ageMonths
}

calculateAge(birthDate, currentDate);

// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: 2024-10-07
// Exemplo Saída: Data formatada no padrão brasileiro: 07/10/2024

const doomsdayDate = new Date('2026-01-13T19:00:00');


function formatDateToSPTimeZone(date) {
    let doomsdayDateYear = date.getFullYear();
    let doomsdayDateMonth = date.getMonth();
    let doomsdayDateDay = date.getDate();

    console.log(`Esta data em formato brasileiro é ${doomsdayDateDay}/${doomsdayDateMonth + 1}/${doomsdayDateYear}.`)
    

}

formatDateToSPTimeZone(doomsdayDate);

