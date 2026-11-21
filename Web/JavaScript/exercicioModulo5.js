
// JavaScript Impressionador - Módulo 5 - Estruturas
// Condicionais e de Repetição

// Exercícios

// IF / ELSE:

// Exercício 1: Verificação de Desconto

// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console.

let totalPurchasePrice = 0;
let discount = false;

function checkDiscount(totalPurchasePrice) {
    
    if (totalPurchasePrice <= 100) {
        discount = false
        console.log(`Não há desconto para esta compra.`)
        return discount
    }
    else {
        const discountValue = totalPurchasePrice * 0.1
        discount = true
        console.log(`Há um desconto para esta compra. O desconto disponível é de R$${discountValue} e o valor total da compra ficou em R$${totalPurchasePrice - discountValue}.`)
        return discount
    }
}       

checkDiscount(2450)


// Exercício 2: Verificação de Produto em Estoque

// Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
// disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
// "Produto esgotado" no console.

let product = {
    name: "Short Sword",
    quantity: 7
}

function checkStock() {
    let productAvailable = false

    if (product.quantity = 0) {
        console.log(`Produto não disponível em estoque.`)
    }
    else {
        console.log(`Produto disponível.`)
    }
}

checkStock(product.name["Short Sword"])

// IF / ELSE IF / ELSE:

// Exercício 3: Determinação de Categoria de Cliente

// Escreva um programa categoriaCliente que determine a categoria de um cliente com base em sua
// pontuação de fidelidade, que será entre 0 e 100. Se a pontuação for maior ou igual a 85, o cliente é
// categorizado como "Cliente Premium". Se for maior ou igual a 50, é categorizado como "Cliente Regular".
// Caso contrário, é categorizado como "Cliente Comum".


let client = {
    name: "Andreas",
    age: 28,
    score: 56,
    category: "",
}


function clientCategory(client) {

    if (client.score >= 85) {
        client.category = "Premium"
    }

    else if (client.score >= 50) {
        client.category = "Regular"    
    }

    else {
        client.category = "Comum"
    }

    console.log(`Você é um cliente ${client.category}`)
    return client
}

clientCategory(client)


// Exercício 4: Classificação de Desempenho de Vendas


// Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
// base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
// desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
// percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
// que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
// 99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
// Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
// vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
// vendedor com base nas vendas mensais e na meta de vendas estabelecida.


let goal = 5000

let seller = {
    name: "Jessica",
    sells: 2500,
    performance: "",
}



function individualSellingPerformance() {
    if (seller.sells >= goal) {
        seller.performance = "Excelente desempenho."
    } else if (seller.sells >= 0.9 * goal) {
        seller.performance = "Muito bom desempenho."
    } else if (seller.sells >= 0.8 * goal) {
        seller.performance = "Bom desempenho."
    } else if (seller.sells >= 0.61 * goal) {
        seller.performance = "Desempenho satisfatório."
    } else if (0.60 * goal >= seller.sells >= 0) {
        seller.performance = "Desempenho insatisfatório."
    }

    console.log(`${seller.performance}`)
}

individualSellingPerformance(seller)

// OPERADOR TERNÁRIO:

// Exercício 5: Verificação de Velocidade

// Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
// retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso
// contrário, utilizando o operador ternário.

let underLimitSpeed = null;

function checkSpeed(speed) {
    let speedCheck = speed <= 80 ? underLimitSpeed = true : underLimitSpeed = false;
    console.log(speedCheck)
}

checkSpeed(40)

// Exercício 6: Semáforo de Trânsito

// Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
// "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
// do semáforo. Utilize o operador ternário para determinar a mensagem.

let trafficLights = ["red", "yellow", "green"];

function trafficLightsMessage(color) {
    if (color === "red") {console.log("Stop!")}
    else if (color === "yellow") {console.log("Caution!")}
    else if (color === "green") {console.log("Move on!")}
}

trafficLights.forEach(color => {
    trafficLightsMessage(color)
})

// SWITCH / CASE:

// Exercício 7: Prioridade no Trânsito

// Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
// exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
// necessário parar.

function trafficLightsColors(trafficLights) {
    switch (trafficLights) {
        case "red":
            console.log("Stop!");
            break;
        case "yellow":
            console.log("Caution!");
            break;
        case "green":
            console.log("Move on!");
            break;
            }
            
}

trafficLightsColors("yellow")

// Exercício 8: Verificação de Placa de Veículo

// Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
// número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
// dígito da placa.

function checkCarPlate(carPlate) {
    let carPlateStr = carPlate.toString();
    let lastDigit = carPlateStr[carPlateStr.length - 1];

    console.log(lastDigit)

    switch (lastDigit) {

        case "0":
        case "1":
            console.log("Seu carro pode transitar no centro expandido na segunda-feira");
            break
        case "2":
            console.log("Seu carro pode transitar no centro expandido na terça-feira");
            break
        case "3":
            console.log("Seu carro pode transitar no centro expandido na quarta-feira");
            break
        case "4":
            console.log("Seu carro pode transitar no centro expandido na quinta-feira");
            break
        case "5":
            console.log("Seu carro pode transitar no centro expandido na sexta-feira");
            break
        case "6":
        case "7":
            console.log("Seu carro pode transitar no centro expandido no sábado");
            break
        case "8": 
        case "9":   
            console.log("Seu carro pode transitar no centro expandido no domingo");
            break
        
    }
}

checkCarPlate(9430453)



