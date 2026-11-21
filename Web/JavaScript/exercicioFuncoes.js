// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo).

let nota1;
let nota2;
let nota3; 
let mediaNotas;
let notaSub = 0;
let mediaNotasSub;

function calcularMedia(nota1, nota2, nota3) {
    mediaNotas = (nota1 + nota2 + nota3) / 3;
    console.log(`A média do/a estudante é ${mediaNotas}`);
    return mediaNotas;
}

calcularMedia (6.8, 7.8, 5)


// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:

const mediaGeral = 7;
let alunoPassou = false;

function alunoTemMedia() {
    if (mediaNotas >= mediaGeral) {
        alunoPassou = true;
        console.log(`Aprovado: ${alunoPassou}`);
        console.log("Este(a) estudante está aprovado(a).");
        return alunoPassou;
    }
    else {
        alunoPassou = false;
        console.log(`Aprovado: ${alunoPassou}`);
        console.log("Este(a) estudante está reprovado(a).");
        return alunoPassou;
    }
}

alunoTemMedia (mediaNotas, mediaGeral)


function calcularMediaSub (mediaNotas, notaSub) {
    console.log("calcularMediaSub foi chamada");
    if (alunoPassou === false) {
        mediaNotasSub = (((mediaNotas * 3) + notaSub) / 4);
        if (mediaNotasSub >= 7) {
            console.log(`O(a) estudante está aprovado(a) e sua nova média é ${mediaNotasSub}`);
            return mediaNotasSub;
        }
        else {
            console.log(`O(a) estudante está reprovado(a) e sua nova média é ${mediaNotasSub}`);
            return mediaNotasSub
        }
    }
}

calcularMediaSub (mediaNotas, 10)

// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32


function calcularTempF() {
    let tempF = ((9/5) * tempC) + 32;
    console.log(`A temperatura correspondente em Fahrenheit é de ${tempF}°F`)
    return tempF;
}

calcularTempF(tempC = 100);

// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:

// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).

let prodPrice;

function calcTax(prodPrice) {
    let finalPrice = prodPrice + prodPrice*0.08875;
    console.log(`The final price of this product with taxes is ${finalPrice}`);
    return finalPrice;
}

calcTax(28)