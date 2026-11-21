// Módulo 5

// Exercícios - Métodos Nativos - Number

// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 1: Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais.
// Exemplo de Entrada: 
//"150.50";
//"200px";
//"abc";
// Exemplo de Saída: 
//150.50
//200
// NaN
 const values = [
    "200px",
    "150.50",
    "abc",
]

const result = values.map(Number.parseFloat)


console.log(result)


// Exercício 2: Somar valores numéricos de uma entrada de formulário
// Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
// Exemplo de Entrada:
// "10" e "20.5";
// Exemplo de Saída:
// 30.5

let stringInput1 = "";
let stringInput2 = "";

function sumStringValues(stringInput1, stringInput2) {
    let sum = ((Number.parseFloat(stringInput1)) + (Number.parseFloat(stringInput2)))
    console.log(sum);
    return sum
}

sumStringValues(49, 53)

// Exercício 3: Arredonde valores financeiros
// Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
// casas decimais.
// Exemplo de Entrada: 
// 1234.56789;
// Exemplo de Saída: 
// Valor formatado: 1234.57

let financialValue = 124535.4959538

console.log(financialValue.toFixed(2))
console.log(financialValue.toFixed(3))


// Exercício 4: Ajustar a precisão de um número
// Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
// Exemplo de Entrada: 
// 12345.6789;
// Exemplo de Saída: 
// Valor com precisão: 1.235e+4

console.log(financialValue.toPrecision(2))
console.log(financialValue.toPrecision(3))


// Exercício 5: Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação.
// Exemplo de Entrada: 
// "123abc";
// Exemplo de Saída: 
// "A entrada não é um número válido."

const entryValues = [
    "Hello, ms. Jones",
    "What a fine ass!",
    "359",
    "1427.755",
    "Love you, babe",
    "666",
    "Devil's Child"
]

const entryValuesAnalysis = entryValues
    .map(Number.parseFloat)
    // .filter(value => !Number.isNaN(value)); 


function checkStringMessage() {  

    for (item of entryValuesAnalysis) {
        if (Number.isNaN(item)) {
            console.log("Este item não é um número");}
        else {
            console.log("Este item é um número");}
    }
}
    
console.log(entryValuesAnalysis)
checkStringMessage()

// Exercício 6: Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
// Exemplo de Entrada: // 1 / 0;
// NaN ou “abc”;
// Exemplo de Saída: 
// ""O número é infinito ou não é um número."


function verifyFiniteness(numero) {
    console.log(Number.isFinite(numero));
    return
}


verifyFiniteness(numero = 4666);
verifyFiniteness(numero = "Luci");
verifyFiniteness(1/0);